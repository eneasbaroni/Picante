import mongoose, { Schema, models } from "mongoose";

const presupuestoCollection = 'presupuesto'
const presupuestoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        telefono: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        soporte: {
            type: String,
            required: true,
        },
        medida: {
            type: String,
            required: true,
        },
        cantidadColores: {
            type: String,
            required: true,
        },
        cantidad: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        estado: {
            type: String,
            enum: ['Recibido', 'Enviado', 'Cancelado', 'Aceptado'],
            default: 'Recibido'
        }
    },
    { timestamps: true }
);

const Presupuesto = models.presupuesto || mongoose.model(presupuestoCollection, presupuestoSchema)

export default Presupuesto
