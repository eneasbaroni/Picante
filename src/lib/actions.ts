'use server'
import sendMail from '@/middlewares/nodemailer';
import { connectMongoDB } from '@/lib/mongodb';
import Presupuesto from '@/app/api/DAO/models/presupuesto.models';


const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries()); //crea un objeto con los datos del form


    const file: File | null = formData.get('file') as unknown as File;
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    try {
        await connectMongoDB();
        await Presupuesto.create({
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: data.telefono,
            email: data.email,
            soporte: data.soporte,
            medida: data.medida,
            cantidadColores: data.cantidadColores,
            cantidad: data.cantidad,
            descripcion: data.descripcion,
        });
    } catch (error) {
        console.error('Error al registrar el presupuesto:', error);
    }

    try {
        const res = await sendMail(data, buffer);
        if (res) {
            return 'ok';
        } else {
            return 'error';
        }
    } catch (error) {
        console.error(error);
        return 'error';
    }
    
}


export {handleSubmit}