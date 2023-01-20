const jwt = require('jsonwebtoken')
const secret = "secret";

const generateToken = (user) =>{
    return jwt.sign({user},secret,{expiresIn:'1h'})
}
module.exports = {generateToken};
// console.log(generateToken({name:"amit",pass:1234}))