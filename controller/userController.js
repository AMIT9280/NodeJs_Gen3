const userSchema = require("../model/userSchema")

//AddStudent
exports.addUser = (req, res) => {

    const user = new userSchema(req.body);

    user.save((err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Data Not Added.."
            })
        } else {
            res.status(201).json({
                data: data,
                msg: "Data Added Successfully.."
            })
        }
    })
}
//get All User
exports.getAllUser = (req, res) => {
    userSchema.find((err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Data Err.."
            })
        } else {
            res.status(201).json({
                data: data,
                msg: "Data Faceting Successfully.."
            })
        }
    })
}
//Update User
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    userSchema.findByIdAndDelete((err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Data Err.."
            })
        } else {
            if (data != null || data !== undefined) {
                res.status(200).json({
                    data: data,
                    msg: "Data Faceting Successfully.."
                })
            } else {
                res.status(404).json({
                    msg: "Data Not Found.."
                })
            }
        }
    })
};
//Update student

exports.updateUser = (req, res) => {
    console.log(req.body);
    if (
        req.body.firstName == undefined ||
        req.body.lastName == undefined ||
        req.body.email == undefined ||
        req.body.password == undefined ||
        req.body.gender == undefined ||
        req.body.age == undefined
    ) {
        res.status(400).json({
            msg: "Bad Request.."
        });
    } else {
        var user1 = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            age: req.body.age
        };
    }

    const id = req.params.id;
    userSchema.findOneAndUpdate(id, req.body, (err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Data Updating Error.."
            })
        } else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    data: data,
                    msg: "Data Updated Successfully.."
                })
            } else {
                res.status(404).json({
                    msg: "Data Not Found.."
                })
            }
        }

    });
};

//GetStudentById

exports.getUserById = (req, res) => {
    const id = req.params.id
    userSchema.findById(id, (err, data) => {
        if (err) {

            res.status(500).json({
                msg: "Err Faceting Data"
            })
        } else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    data: data,
                    msg: "Data Faceting Successfully.."
                })
            } else {
                res.status(404).json({
                    msg: "Data Not Found.."
                })
            }
        }
    })
}