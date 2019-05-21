"use strict";
const nodemailer = require("nodemailer");

async function main(){
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
	// host: "smtp.ethereal.email",
    // port: 587,
	// secure: false, 
	// auth: {
	// 	user: testAccount.user, // generated ethereal user
	// 	pass: testAccount.pass // generated ethereal password
	// }
    host: "smtp.163.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
	user: 'anbeixin365@163.com',
	pass: 'abx18518781479'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"anbeixin365@163.com', // sender address
    to: "yingfei512@sina.com, wiiler@163.com", // list of receivers
    subject: "服务需求", // Subject line
    // text: "Hello world?", // plain text body
	html: 	`<b>服务类型：${a}</b><br>
			<b>银行月交易流水：${b}</b><br>
			<b>联系人：${c}</b><br>
			<b>联系电话：${d}</b><br>
	`
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);