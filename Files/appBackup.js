const https = require("http")

const server = https.createServer(()=>{})
const PORT = 3000;
const add = require("../lerning/calc");
const { FindByalphabeats, palindromeName, copyEmail } = require("./Files/fileTask");

console.log("Addition "+add(60,70));


//files
// FindByalphabeats();
// palindromeName();
// copyEmail();

server.listen(PORT,function(){
    console.log("Server Started on 3000");
})
 