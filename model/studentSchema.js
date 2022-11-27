const mongoose = require("mongoose")

const schema = mongoose.Schema;

const studentSchema = schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: String
    }
})

module.exports = mongoose.model("Student", studentSchema);