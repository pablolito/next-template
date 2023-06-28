import { getUser } from "./loginModel";
import * as bcrypt from "bcrypt"

interface LoginPost {
    username: string,
    password: string
}


export async function POST(req: Request) {
    const body: LoginPost = await req.json();
    const user = await getUser(body.username)
    if (user && (await bcrypt.compare(body.password, user[0].password))) {
        return new Response(JSON.stringify({id: user[0].id, email: user[0].email}))
    } else {
        return new Response(JSON.stringify(null))
    }
}