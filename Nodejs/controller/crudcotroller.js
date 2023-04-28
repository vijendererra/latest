const { Crud } = require('../schema/schema');

exports.save = async (req, res) => {
    var requestBody = req.body;
    var crud = new Crud({
        name: requestBody.name,
        role: requestBody.role,
        location: requestBody.location,
    });

    try {
        const result = await crud.save();
        if (result)
            res.json(result);
        else {
            res.status(400).json({ message: "Somethisng went wrong" });
        }
    }
    catch (error) {
        const message = error.message;
        res.status(error.status || 500).json({ message });
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await Crud.find();
        res.json(result);
    } catch (error) {
        const err = error.message || "Something went wrong";
        res.status(400).json({ message: err });
    }

}

exports.update = async (req, res) => {
    var id = req.params._id;
    var updateData = ({
        name: req.body.name,
        role: req.body.role,
        location: req.body.location,
    })
    try {
        const result = await Crud.findByIdAndUpdate(id, { $set: updateData }, { new: true });
        if (result)
            res.json(result);
        else {
            res.status(400).json({ message: id + " not found...!" });
        }
    } catch (error) {
        const message = error.message;
        res.status(error.status || 500).json({ message });
    }

};

exports.deleteById = async (req, res) => {
    try {
        const id = req.params._id;
        const result = await Crud.findByIdAndDelete(id);
        if (result) {
            res.json({ message: result.name + " deleted successfully..!" });
        } else {
            res.status(400).json({ message: id + " not found...!" });
        }
    } catch (error) {
        const err = error.message || "Something went wrong"
        res.status(500).json({ message: err });
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const name = req.params.name;
        console.log(name);
        const result = await Crud.findOneAndDelete({ name });
        if (result) {
            res.json({ message: result.name + " deleted successfully..!" });
        }
        else {
            res.status(400).send({ message: name + " not found...!" });
        }
    } catch (error) {
        const err = error.message;
        res.status(500).json({ message: err });
    }
};
