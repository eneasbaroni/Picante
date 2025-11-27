import { connectMongoDB } from '../../../lib/mongodb'
import User from '../DAO/models/users.models'
import { NextResponse, NextRequest } from "next/server"
import { getServerSession } from "next-auth"

export async function GET(req: NextRequest) {
    try {
        // Verificar que el usuario esté autenticado y sea admin
        const session = await getServerSession()
        if (!session || !session.user) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        }

        // Obtener el rol del usuario actual
        const userEmail = session.user.email
        await connectMongoDB()
        const currentUser = await User.findOne({ email: userEmail })
        
        if (!currentUser || currentUser.role !== 'admin') {
            return NextResponse.json({ message: 'Forbidden: Admin access required' }, { status: 403 })
        }

        // Obtener todos los usuarios
        const users = await User.find({}).sort({ createdAt: -1 })
        return NextResponse.json(users)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
