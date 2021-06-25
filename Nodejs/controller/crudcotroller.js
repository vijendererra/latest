const { Crud } = require('../schema/schema')

exports.save = async (req, res)=> {
    try {
        var requestBody = req.body;
        var crud = new Crud({
            name: requestBody.name,
            role: requestBody.role,
            location: requestBody.location,
        });
        let result = await crud.save((err, data) => {
            if (!err) {
                res.send(data);
            }
            else {
                res.status(400).send(err);
                console.log(err);
            }
        })
        return result;
    }
    catch (err) {
        console.log(err)
    }

};

exports.getAll = async (req, res) => {
    try {
        let result = await Crud.find((err, data) => {
            if (!err) {
                res.json(data);
                // console.log(data);
            }
            else {
                res, status(400).json({ error: err });
                console.log(err);
            }
        })
        return result;

    }
    catch (err) {
        console.log(err);
    }

};

exports.update = async (req, res) => {
    try {
        var id = req.params._id;
        var updateData = ({
            name: req.body.name,
            role: req.body.role,
            location: req.body.location,

        })
        let result = await Crud.findByIdAndUpdate(id, { $set: updateData }, { new: true }, (err, data) => {
            if (!err) {
                res.json(data);
            }
            else {
                res.status(400).json({ message: "User Not Found" });
                console.log(err);
            }
        })
        return result;
    }
    catch (err) {
        console.log(err);
    }

};

exports.delete = async (req, res) => {
    try {
        var id = req.params._id;
        let result = await Crud.findByIdAndDelete(id, (err, data) => {
            if (!err) {
                res.json(data);
            }
            else {
                res.status(400).send(err);
                // console.log(err);
            }
        })
        return result;
    }
    catch (err) {
        console.log(err);
    }
};

exports.deleteOne = (req, res) => {
    const names = req.params.name;
    Crud.findOneAndDelete({ name: names }, (err, data) => {
        if (!err) {
            res.json(data);
        }
        else {
            res.status(400).send(err);
            console.log(err);
        }
    })
};
