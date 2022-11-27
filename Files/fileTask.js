const fs = require('fs')
// function FindByalphabeats() {

//   var userStr = fs.readFileSync('./files/users.json', 'utf-8')
//    u = JSON.parse(userStr);

//   //find 'S' Name's
// //   users = u.filter((user)=>{

// //       return user.first_name.startsWith('S');
// //   }) 
// //   console.log(users);
//  }

// function palindromeName(){

//   var userStr = fs.readFileSync('./files/users.json', 'utf-8')
//   u = JSON.parse(userStr);
   
 
//  users = u.filter((user)=>{
  
//       const rev =  user.first_name.split('').reverse().join('');
//         console.log(rev);   
//       return user.first_name === rev;
//       }) 
//     console.log(users);
// }

//3.copy only emails to email.txt
// function copyEmail(){
//   var userStr = fs.readFileSync('./Files/users.json', 'utf-8')
//   u = JSON.parse(userStr);
   
//   if(fs.existsSync("./Files/users.json")){
//     for(i=0; i<u.length; i++){
//       email = u[i].email;
//       console.log(email);
//       fs.appendFileSync("./Files/email.txt",email);
//       fs.copyFileSync('./Files/email.txt','./Files/Emails.txt');
//     }
    
     
      
//   }
// } 
 module.exports = { copyEmail }