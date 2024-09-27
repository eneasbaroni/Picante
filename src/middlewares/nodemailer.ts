import { createTransport } from "nodemailer"

const EMAIL = process.env.EMAIL
const MAIL_PASS = process.env.MAILPASS
const EMAIL_TO_SEND = process.env.EMAIL_TO_SEND

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: EMAIL,
        pass: MAIL_PASS,
    },
    // === add this === //
    tls : { rejectUnauthorized: false }
});

/* funcion para enviar el mail */
const sendMail = async (data: any, file:any) => { //cambiar el any

    const mailOptions = {
        from: data.email,
        to: `${EMAIL_TO_SEND}`,
        subject: 'Nuevo pedido de presupuesto',
        text: `Hola, mi nombre es ${data.nombre} ${data.apellido}.\r\nMi teléfono es ${data.telefono}.\r\nMi correo electrónico es ${data.email}.\r\nNecesito un presupuesto por:\r\n El soporte seleccionado es ${data.soporte}.\r\nCantidad de copias =  ${data.cantidad}.\r\nMedida = ${data.medida}.\r\nCantidad de colores de estampa = ${data.cantidadColores}.\r\nDescripcio = ${data.descripcion}`,
        attachments: [{
            filename: data.file.name,
            content: file
        }]
    };

    // Enviar el correo electrónico
    try {
        // Enviar el correo electrónico y devolver una promesa
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado:', info.response);
        return true;
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return false;
    }
}


export default sendMail