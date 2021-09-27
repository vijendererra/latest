const { User } = require('../schema/schema');
var validator = require('../validators/validator');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var nodemailer = require("nodemailer");
var myReq = require("../error/reqLogger");
var session = require('express-session');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');


var fs = require('fs');
// var util=require('util');
// var log_file_err=fs.createWriteStream('error/errors.log',{flags:'a'})


// User-Registration;
exports.registration = async function (req, res) {
    try {
        var phonenumber = req.body.phonenumber;
        validator.validatePhoneNumber(phonenumber);
        //    console.log("K",number);
        // if (validator.validatePhoneNumber(req.body.phonenumber)) {
        const requestBody = req.body;
        var userReg = new User({
            name: requestBody.name,
            email: requestBody.email,
            password: requestBody.password,
            confirmpassword: requestBody.confirmpassword,
            phonenumber: requestBody.phonenumber,
            address: requestBody.address,
            pinnumber: requestBody.pinnumber,
        });
        let result = await userReg.save((err, result) => {
            if (err && err.code === 11000) {
                res.status(400).json({ message: "Emaii was Already Exist" });
            } else {
                res.json(result);
            }
        });
        return result;
    }
    catch (err) {
        console.log(err)
    }

    // }
    // else if (!validator.validatePhoneNumber(req.body.phonenumber)) {
    //     res.status(400).json({ message: "Please Enter valid Number" });
    // }
};


//User-Login;
exports.userLogin = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        // console.log(user);
        const comparingPassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparingPassword) {
            res.status(420).json({ message: 'password wrong.', sucess: false });
            // console.log('pwwd wro')
        }
        else {
            jwt.sign({ user }, 'securitykey', (err, token) => {
                res.json({
                    token
                })
            })
        }
    }
    else {
        res.status(421).json({ message: 'Email is wrong.', sucess: false });
    }
};


exports.jwtVeryfied = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.sendStatus(403);
    }
};

exports.userLogedIn = (req, res) => {
    jwt.verify(req.token, 'securitykey', (err, user) => {
        if (err) {
            res.status(400).json({ message: "Token Authorizatin Failed" })
            // console.log("hi")
        }
        else {
            const id = user.user._id;
            User.findById(id, (err, data) => {
                if (!err) {
                    res.json(data)
                }
                else {
                    res.status(401).json({ message: "User Not Found" })
                }
            })

        }
    })
};

exports.uppDateProfile = (req, res) => {
    // console.log("Body", req.body);
    const requestBody = req.body;
    if (req.files) {
        req.files.forEach(function (file) {
            // console.log(file);
            var filename = (new Date).valueOf() + "-" + file.originalname
            fs.rename(file.path, 'uploads/' + filename, function (err) {
                if (err) throw err;
                var id = req.body._id;
                var updateData = ({
                    name: requestBody.name,
                    email: requestBody.email,
                    phonenumber: requestBody.phonenumber,
                    address: requestBody.address,
                    pinnumber: requestBody.pinnumber,
                    image: filename,
                })
                User.findByIdAndUpdate(id, { $set: updateData }, { new: true }, (err, data) => {
                    if (!err) {
                        res.json(data);
                    }
                    else {
                        res.status(400).json({ message: "User Not Found" });
                        console.log(err);
                    }
                })
            });
        });
    }
    else {
        var id = req.body._id;
        var updateData = ({
            name: requestBody.name,
            email: requestBody.email,
            phonenumber: requestBody.phonenumber,
            address: requestBody.address,
            pinnumber: requestBody.pinnumber,
        })
        User.findByIdAndUpdate(id, { $set: updateData }, { new: true }, (err, data) => {
            if (!err) {
                res.json(data);
            }
            else {
                res.status(400).json({ message: "User Not Found" });
                console.log(err);
            }
        })
    }
}

exports.forgotpwd = (req, res) => {
    var email = req.body.email;
    // console.log(email)
    User.findOne({ email: email }, (err, user) => {
        if (err || !user) {
            return res.status(404).json({ message: "User not found" })
        }
        else {
            var number = Math.floor((Math.random() * 9999) + 1000);
            const data = {
                userID: user._id,
                userName: user.name,
                unicNumber: number,
            }

            req.session.user = data;
            localStorage.setItem('userID', user._id);
            localStorage.setItem('unicNumber', number);
            localStorage.setItem('userName', user.name)
            localStorage.setItem('usermail', user.email)
            // console.log(localStorage.getItem('userID'))
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'nodemailer0222@gmail.com',
                    pass: 'Vijender@123'
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'learntocodeinfo@gmail.com',
                subject: 'Vijju-Practice-App Password Reset',
                text: 'Deare ' + req.session.user.userName + '\n\n' +
                    'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please use below OTP (Don"t Share this to any one)\n\n' +
                    'OneTimePassword:' + req.session.user.unicNumber + '\n\n' +
                    // https://vijju-practice.herokuapp.com/
                    // 'http://vijju-practice.herokuapp.com/forgotpwd/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                if (err) {
                    console.log(err)
                }
                else {
                    // console.log(req.session.user);
                    res.json({ message: 'Please Check The Mail' });
                    // res.json(req.session.user);
                    setTimeout(() => {
                        req.session.destroy();
                        localStorage.removeItem('userID');
                        localStorage.removeItem('unicNumber');
                        localStorage.removeItem('userName');
                        localStorage.removeItem('usermail')
                        // console.log(localStorage.getItem('userID'))
                    }, 60000);
                }
            });
        }
    })
}

exports.validateOtp = (req, res) => {
    const otp = req.body.otp;
    // console.log(localStorage.getItem('userID'))

    if (localStorage.getItem('userID') == null) {
        res.json({ message: "Session Time Out" })
    }

    else {
        if (otp == localStorage.getItem('unicNumber')) {
            // console.log("OTP macthed")
            const userId = localStorage.getItem('userID')
            const token = jwt.sign({ _id: userId }, 'secretkey', { expiresIn: '3m' });
            // console.log(token)
            return User.findOneAndUpdate({ _id: userId }, { $set: { resetPasswordToken: token } }, (err, sucess) => {
                if (err) {
                    return res.status(200).json({ message: "token invalid or expires" })
                }
                else {
                    const email = localStorage.getItem('usermail');
                    const username = localStorage.getItem('userName');
                    // console.log(email);
                    var smtpTransport = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'nodemailer0222@gmail.com',
                            pass: 'Vijender@123'
                        }
                    });
                    var mailOptions = {
                        to: email,
                        from: 'learntocodeinfo@gmail.com',
                        subject: 'Vijju-Practice-App Password Reset',
                        text: 'Deare ' + username + '\n\n' +
                            'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                            'http://localhost:4200/forgotpwd/reset/' + token + '\n\n' +
                            // https://vijju-practice.herokuapp.com/
                            // 'http://vijju-practice.herokuapp.com/forgotpwd/reset/' + token + '\n\n' +
                            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                    };
                    smtpTransport.sendMail(mailOptions, function (err) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            // console.log('mail sended succesfully');
                            res.json({ message: "Please loging your mail and set new password", jwttoken: token })
                            // res.json(req.session.user);
                            localStorage.setItem('token', true)
                            setTimeout(() => {
                                localStorage.removeItem('token')
                            }, 60000);
                        }
                    });
                }
            })
        }
        else {
            res.json({ message: 'OTP not matched ' })
            // console.log("otp not macthed")
        }
    }

}

exports.tokenexpirs = (req, res) => {
    if (localStorage.getItem('token') == null) {
        res.json({ message: "token expires" })
    }
    else {
        res.json({ message: "token not expires" })
    }
}

exports.resetPwd = (req, res) => {

    var reset = req.params.token;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;
    // console.log(password);
    if (reset) {
        jwt.verify(reset, 'secretkey', (error, decoder) => {
            if (error) {
                res.status(400).json({ message: 'Session Time Out' });
                // console.log("token expired")
            }
            else {
                User.findOne({ resetPasswordToken: reset }, (err, user) => {
                    if (err || !user) {
                        res.status(400).json({ mess: 'user not found' });
                    }
                    else {
                        // console.log(password)
                        bcrypt.hash(password, 10, (err, hash) => {
                            if (!err) {
                                this.password = hash;
                                return User.updateOne({ _id: user._id }, { $set: { password: this.password, confirmpassword: confirmpassword } }, (err, sucess) => {
                                    if (err) {
                                        return res.status(400).send({ error: "your password not updated" })
                                    }
                                    else {
                                        var smtpTransport = nodemailer.createTransport({
                                            service: 'Gmail',
                                            auth: {
                                                user: 'nodemailer0222@gmail.com',
                                                pass: 'Vijender@123'
                                            }
                                        });
                                        var mailOptions = {
                                            to: user.email,
                                            from: 'learntocodeinfo@gmail.com',
                                            subject: 'Vijju-Practice-App Password Reset',
                                            text: 'Hello,\n\n' +
                                                'This is a confirmation about your account ' + user.email + '!...password  has just been changed.\n'
                                        };
                                        smtpTransport.sendMail(mailOptions, function (err) {
                                            // console.log('mail sended succesfully');
                                            res.json('mail sended succesfully');
                                        });
                                    }
                                })
                            }

                            else {
                                console.log(err);
                            }
                        })
                    }
                })
            }
        })
    }
}


exports.changePwd = async (req, res) => {
    const user = await User.findOne({ _id: req.body._id });
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;
    var oldpassword = req.body.oldpassword;
    if (user) {
        // console.log(user);
        const comparingPassword = await bcrypt.compare(oldpassword, user.password);
        if (!comparingPassword) {
            res.status(420).json({ message: 'Oldpassword Not Matched.', sucess: false });
            // console.log('pwwd wro')
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (!err) {
                    this.password = hash;
                    return User.updateOne({ _id: user._id }, { $set: { password: this.password, confirmpassword: confirmpassword } }, (err, sucess) => {
                        if (!err) {
                            res.json({ message: "Password Changed Successfully" });
                        }
                        else {
                            res.status(400).json({ mess: "Password Not Updated" });
                        }
                    })
                }
            })
        }
    }
    else {
        res.status(421).json({ message: 'User Not Found.', sucess: false });
    }
};




