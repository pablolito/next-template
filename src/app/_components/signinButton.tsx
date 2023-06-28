"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <div>
                <p>{session.user?.email}</p>
                <button onClick={() => signOut()}>Logout</button>
            </div>
        );
    } else if(session !== undefined) {
        return <button onClick={() => signIn()}>Signin</button>;
    }
    return null
    
};

export default SigninButton;
