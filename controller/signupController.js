const signupSchema = require('../model/signupSchema')
const bcrypt = require('bcrypt')
const saltRound = 10;

function hashedPassword(password) {
    bcrypt.hash(password, saltRound, function (err, hash) {
        return hash;
    })
}
var hashedPassword;
exports.signup = (req, res) => {
    const { name, password } = req.body;

    hashedPassword = bcrypt.hashSync(password, saltRound);

    const signup = signupSchema({
        name: name,
        password: hashedPassword
    })

    signup.save((err, data) => {
        if (err) {

            res.status(500).json({
                message: "Error in saving data",
            })
        }
        else {
            res.status(200).json({
                message: "Data saved successfully",
                data: data
            })
        }
    })
}

exports.validate = (req, res) => {

    const { name, password } = req.body;
    let isCorrect = false;
    signupSchema.findOne({ name: name }, function (err, data) {

        console.log(data);

        if (data) {
            let ans = bcrypt.compareSync(password, data.password);
            if (ans == true) {
                isCorrect = true;
            }
        }
        if (isCorrect == false) {
            res.status(401).json({
                message: "Invalid Credentials"
            })
        } else {
            res.status(400).json({
                message: "Login Done",
                data: data
            })
        }
    })
}
