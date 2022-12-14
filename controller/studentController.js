const studentSchema = require("../model/studentSchema")

//addStudent
exports.addStudent = (req, res) => {

    const Student = new studentSchema(req.body);

    Student.save((err, data) => {
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
exports.getAllStudent = (req, res) => {
    studentSchema.find((err, data) => {
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
exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    studentSchema.findByIdAndDelete((err, data) => {
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

exports.updateStudent = (req, res) => {
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
        var user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            age: req.body.age
        };
    }

    const id = req.params.id;
    studentSchema.findOneAndUpdate(id, req.body, (err, data) => {
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

exports.getStudentById = (req, res) => {
    const id = req.params.id
    studentSchema.findById(id, (err, data) => {
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