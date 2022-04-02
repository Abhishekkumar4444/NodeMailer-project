import nodemailer from "nodemailer"; //? install nodemailer package
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true, //? true for 465, false for other ports
  auth: {
    user: "test1@gmail.com", // ?generated  user email
    pass: "*********", // ?generated user password
  },
});
let mailOptions = {
  from: "test1@gmail.com",
  to: "test2@gmail.com",
  subject: "Nodemailer",
  text: "Email had send by using nodemailer",
};
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`email has been sent ${info.response}`);
  }
});
