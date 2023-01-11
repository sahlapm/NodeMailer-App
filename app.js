const bodyParser = require("body-parser");
const express = require("express");
const nodeMailer = require("nodemailer");

const app = new express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.post("/", async (req, res) => {
    const { email } = req.body;
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sahlahafiz2011@gmail.com',
            pass: 'krzfdyvwtznahcck'
        }
    });

    const message = {
        from: 'sahlahafiz2011@gmail.com',
        to: `${email}`,
        subject: "NodeMailer-Assignment",
       
       html:'<div style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;"><p><b>Hi My dear friend,</b></p>' +
       '<p>Hope you\'re doing well.</p>'+
       '<p>I am pleased to state that I have successfully completed the work that have assigned to us.</p><br>'+
       '<p><b>Thanks & Regards</b></p>' +
       '<p><b>Sahla PM</b></p></div>' 
       
    }

    let info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);

    res.send("Email sent successfully!");
})


app.listen(port, () => {
    console.log(`the server is listening at http://localhost:${port}`);
})