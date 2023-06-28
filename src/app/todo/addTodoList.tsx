"use client";

import React, { useState } from "react";

function AddTodoList({handleAdd}: {handleAdd: (title: string) => void}) {
    const [title, setTitle] = useState("");
    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (title !== "") {
            handleAdd(title)
            setTitle("");
        }
    };
    return (
        <div className="mb-3">
            <form action="">
                <input
                    type="text"
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    value={title}
                    className="border p-2"
                />
                <button
                    className="bg-slate-700 text-white p-2 ml-2"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default AddTodoList;
