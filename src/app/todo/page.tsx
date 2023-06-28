import { Suspense } from "react";
import { headers } from "next/headers"
import TodoList from "./todoList";

export const metadata = {
    title: "Todo",
    description: "My todo page",
};

async function Page() {
    async function getTodo() {
        const res = await fetch("http://localhost:3000/api/todo", {
            cache: "no-store",
            headers: headers()
        });
        
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    }
    const todo = await getTodo();
    
    return (
        
        <div>
            <h1 className="text-2xl mb-6">Todo</h1>
            <Suspense fallback={<div>Loading</div>}>
                <TodoList todo={todo} />
            </Suspense>
        </div>
    );
}

export default Page;
