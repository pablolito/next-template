import { NextResponse } from 'next/server'
import { deleteTodo } from '../todoModel';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)
    if (session) {
        const result = await deleteTodo(params.id);
        if (result.affectedRows > 0) {
            return NextResponse.json({ message: "deleted" }, {status: 200})
        }
    } else {
        return NextResponse.json({ message: "unauthorize" }, { status: 401 }) 
    }

}