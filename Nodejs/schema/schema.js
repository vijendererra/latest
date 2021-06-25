var mongoose=require('mongoose');
var bcrypt = require('bcryptjs');

// Crud Schem;
var Schema = mongoose.Schema;
var CrudSchema = new Schema({
    name:{type:String},
    role:{type:String},
    location:{type:String},
});


// Registration Schema;
var UserSchema = new Schema({
    name:{type:String},
    email:{type:String,
        unique: true
       },
       password:{type:String},
       confirmpassword:{type:String},
       resetPasswordToken: {data:String,
        default:''},
        phonenumber:{type:String},
        address:{type:String},
        pinnumber:{type:String},
        image:{type:String},
    });

// Custom validation for email
UserSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// bcrypt ....
UserSchema.pre('save', function (next){
    // var user= this;
    bcrypt.hash(this.password,10,(err,hash) =>{
        if(!err){
			this.password=hash;
			// this.confirmpassword=hash;
            next();
        }
        else{
            return next(err);
        }
    });
});

var crudCollectionNmae= "crud";
var Crud= mongoose.model('Crud',CrudSchema,crudCollectionNmae);
var userCollectionName="user";
var User= mongoose.model('User',UserSchema,userCollectionName);
module.exports={Crud,User};