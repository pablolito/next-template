import { NextRequest, NextResponse } from 'next/server'
import { getTodo, addTodo, updateTodo } from './todoModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"



export async function GET() {
    const session = await getServerSession(authOptions)
    if (session) {
        const todo = await getTodo();
        return NextResponse.json(todo)
    } else {
        return NextResponse.json({ message: "unauthorize" }, { status: 401 })
    }
}

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)
    if (session) {
        const { title } = await req.json()
        const result = await addTodo(title);
        return NextResponse.json({ created: result.insertId }, {status: 201})
    } else {
        return NextResponse.json({ message: "unauthorize" }, { status: 401 })
    }
}

export async function PUT(req: NextRequest) {
    const session = await getServerSession(authOptions)
    if (session) {
        const { title, done, id } = await req.json()
        const result = await updateTodo(title, done, id);
        return NextResponse.json({ updated: result.updateId })
    } else {
        return NextResponse.json({ message: "unauthorize" }, { status: 401 })
    }
}




