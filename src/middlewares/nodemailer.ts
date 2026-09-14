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

/* html del mail que recibe el estudio con la consulta de presupuesto */
const mailHtml = (data: any) => `
<!DOCTYPE html>
<html lang="es">
<body style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

  <p style="font-size: 18px; font-weight: bold;">Nuevo pedido de presupuesto</p>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9f9f9;">
    <tr><td colspan="2" style="padding: 10px; font-weight: bold; border-bottom: 2px solid #ddd;">Datos del cliente</td></tr>
    <tr>
      <td style="padding: 8px 10px; color: #666;">Nombre</td>
      <td style="padding: 8px 10px;">${data.nombre} ${data.apellido}</td>
    </tr>
    <tr style="background: #fff;">
      <td style="padding: 8px 10px; color: #666;">Teléfono</td>
      <td style="padding: 8px 10px;">${data.telefono}</td>
    </tr>
    <tr>
      <td style="padding: 8px 10px; color: #666;">Email</td>
      <td style="padding: 8px 10px;">${data.email}</td>
    </tr>
  </table>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9f9f9;">
    <tr><td colspan="2" style="padding: 10px; font-weight: bold; border-bottom: 2px solid #ddd;">Detalle del trabajo</td></tr>
    <tr>
      <td style="padding: 8px 10px; color: #666;">Soporte</td>
      <td style="padding: 8px 10px;">${data.soporte}</td>
    </tr>
    <tr style="background: #fff;">
      <td style="padding: 8px 10px; color: #666;">Medida</td>
      <td style="padding: 8px 10px;">${data.medida} cm</td>
    </tr>
    <tr>
      <td style="padding: 8px 10px; color: #666;">Cantidad de colores</td>
      <td style="padding: 8px 10px;">${data.cantidadColores}</td>
    </tr>
    <tr style="background: #fff;">
      <td style="padding: 8px 10px; color: #666;">Cantidad de copias</td>
      <td style="padding: 8px 10px;">${data.cantidad}</td>
    </tr>
    <tr>
      <td style="padding: 8px 10px; color: #666;">Descripción</td>
      <td style="padding: 8px 10px;">${data.descripcion}</td>
    </tr>
  </table>

</body>
</html>
`;

/* funcion para enviar el mail */
const sendMail = async (data: any, file:any) => { //cambiar el any

    const mailOptions = {
        from: data.email,
        to: `${EMAIL_TO_SEND}`,
        subject: 'Nuevo pedido de presupuesto',
        html: mailHtml(data),
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