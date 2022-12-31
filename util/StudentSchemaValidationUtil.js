const zod = require("zod")

const Student2Schema = zod.object({

    body: zod.object({
        name: zod.string().min(2).max(6),
        email: zod.string().max(15),
        phone: zod.string().min(1).max(10),
        age: zod.number()
    }).strict()
})

module.exports = Student2Schema;