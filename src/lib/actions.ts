'use server'
import sendMail from '@/middlewares/nodemailer'; 


const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries()); //crea un objeto con los datos del form


    const file: File | null = formData.get('file') as unknown as File;
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

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