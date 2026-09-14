import { connectMongoDB } from '../../../lib/mongodb'
import Presupuesto from '../DAO/models/presupuesto.models'
import { NextResponse, NextRequest } from "next/server"

export async function PATCH(req: NextRequest) {
    try {
        const { id, estado } = await req.json()

        if (!id || !estado) {
            return NextResponse.json({ message: 'Id and estado are required' }, { status: 400 })
        }

        // Validar que el estado sea válido
        const validEstados = ['Recibido', 'Enviado', 'Cancelado', 'Aceptado']
        if (!validEstados.includes(estado)) {
            return NextResponse.json({ message: 'Invalid estado' }, { status: 400 })
        }

        await connectMongoDB()
        const presupuesto = await Presupuesto.findByIdAndUpdate(
            id,
            { estado },
            { new: true }
        )

        if (!presupuesto) {
            return NextResponse.json({ message: 'Presupuesto not found' }, { status: 404 })
        }

        return NextResponse.json({ message: 'Presupuesto estado updated successfully', presupuesto })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
