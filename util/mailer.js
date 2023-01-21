const mailer = require('nodemailer')

const sendMail = async (to, otp) => {
    var otp = otp;
    console.log(otp);
    const transporter = mailer.createTransport({

        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: "amit.royal223344@gmail.com",
            pass: "hpdmoifqrmzyoaox"
        }
    })
    const options = {
        from: 'amit.royal223344@gmail.com',
        to: to,
        subject: 'OTP',
        html: '<button>' + otp + '</button>',

    }
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}
const sendAttachments = async (to,name) => {

    const transporter = mailer.createTransport({

        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: "amit.royal223344@gmail.com",
            pass: "hpdmoifqrmzyoaox"
        }
    })
    const options = {
        from: 'amit.royal223344@gmail.com',
        to: to,
        subject: 'OTP',
        html: '<h3>Welcome ' + name +'</h3><br><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtnk1kE-rNHQ1Z7o_pEvfWfjcB7A3ZY8icA&usqp=CAU"/>',
        attachments:[{
            filename:'shiv.jpg',
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Jw2cJRnIjTQwOVpryhFuBsc1WmqjSi2IqA&usqp=CAU'
        }]

    }
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

module.exports = { sendMail,sendAttachments };