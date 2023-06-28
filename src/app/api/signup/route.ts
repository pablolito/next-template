import Email from "next-auth/providers/email";
import { createUser, findUser } from "./signupModel"
import * as bcrypt from "bcrypt"
import { NextResponse } from "next/server";

interface Signup {
   email: string
   password: string 
}

export async function POST (req: Request) {
    const {email, password}: Signup = await req.json();

    if (!email || !password) {
        return NextResponse.json({message: "Bad request"}, {status: 400})
    }

    const result = await findUser(email)

    if (result[0].count > 0) {
        throw new Error("User already exist")
    }

    await createUser({
        email: email,
        password: await bcrypt.hash(password, 10)
    });

    return NextResponse.json({message: "Created"}, {status: 200})
    
}