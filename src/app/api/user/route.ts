import {connectMongoDB} from '../../../lib/mongodb'
import User from '../DAO/models/users.models'
import {NextResponse, NextRequest } from "next/server"



export async function POST(req: NextRequest) {
    const  data  = await req.json()
    const { name, email, image } = data
    try {
        await connectMongoDB()
        //verificar si el usuario con ese email no existe ya
        const userExist = await User.findOne({email})            
        if (userExist) return NextResponse.json({ message: 'User already exists' })

        const newUser =  new User({ name, email, image })
        await newUser.save()
        return NextResponse.json({ message: 'User created' })
    } catch (error: any) {
        return NextResponse.json({ message: error.message })
    }
}

export async function GET(req: NextRequest) {
    const email = req.nextUrl.searchParams.get('email') as string    
    if (!email) return NextResponse.json({ message: 'Email is required' })
    
    try {
        await connectMongoDB()
        const user = await User.findOne({email})
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json({ message: error.message })
    }
}
