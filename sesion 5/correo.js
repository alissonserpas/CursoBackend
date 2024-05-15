const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'alisonserpas@outlook.com',
        pass: '25312531_Ali'
    }
});


let mailOptions = {
    from: 'alisonserpas@outlook.com',
    to: 'j.william03@hotmail.com',
    subject: 'Implementación de servidor de correos',
    text: '¡Servidor de correo funcionando excelente!'
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Correo enviado: ' + info.response);
    }
});
