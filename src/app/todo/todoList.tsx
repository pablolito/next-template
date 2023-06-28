"use client";

import * as React from "react";
import { Todo } from "../api/todo/todoModel";
import AddTodoList from "./addTodoList";

interface DataLine {
    id: number;
    title: string;
    done: number;
}

interface TotodoLineProps {
    dataLine: DataLine;
}

function TodoLine({ dataLine }: TotodoLineProps) {
    const [dataLineState, setDataLineState] = React.useState<DataLine | null>(
        dataLine
    );
    const inputRef = React.useRef(null);
    
    const saveData = async (dataLine: DataLine) => {
        if (dataLine.title) {
            await fetch("http://localhost:3000/api/todo", {
                method: "PUT",
                body: JSON.stringify(dataLine),
            });
        }
    };
    const handleKeyUp = (e: any) => {
        if (e.key === "Enter" && inputRef.current) {
            (inputRef.current as any).blur();
        }
    };
    const handleDelete = async (id: number) => {
        const resp = await fetch(`http://localhost:3000/api/todo/${id}`, {
            cache: "no-store",
            method: "delete",
        });
        if (resp.ok) {
            setDataLineState(null);
        }
    };
    return (
        dataLineState && (
            <tr>
                <td>
                    <input
                        className="mr-2"
                        type="checkbox"
                        onChange={(e) => {
                            setDataLineState({
                                ...dataLineState,
                                done: e.currentTarget.checked ? 1 : 0,
                            });
                            saveData({
                                ...dataLine,
                                done: e.currentTarget.checked ? 1 : 0,
                            });
                        }}
                        checked={dataLineState.done === 1}
                    />
                </td>
                <td>
                    <input
                        ref={inputRef}
                        onBlur={() => saveData(dataLineState)}
                        onChange={(e) =>
                            setDataLineState({
                                ...dataLineState,
                                title: e.currentTarget.value,
                            })
                        }
                        onKeyUp={(e) => handleKeyUp(e)}
                        type="text"
                        value={dataLineState.title}
                    />
                </td>
                <td>
                    <div
                        className="cursor-pointer"
                        onClick={() => handleDelete(dataLine.id)}
                    >
                        x
                    </div>
                </td>
            </tr>
        )
    );
}

function TodoList({ todo }: { todo: Todo[] }) {
    const [todoState, setTodoState] = React.useState(todo);

    const addTodo = async (title: string) => {
        const result = await fetch("http://localhost:3000/api/todo", {
            method: "POST",
            body: JSON.stringify({ title: title }),
        });
        
        if(result.ok) {
            const json = await result.json();
            setTodoState([...todoState, {
                id: json.created,
                title: title,
                done: 0
            }])
        }
    };

    return (
        <>
            <AddTodoList handleAdd={addTodo} />
            <table>
                <tbody>
                    {todoState &&
                        todoState.map((dataLine: Todo) => (
                            <TodoLine key={dataLine.id} dataLine={dataLine} />
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;
