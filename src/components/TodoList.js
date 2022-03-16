import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, setTodos, sort}){
    return (
        <div className="todo-container">

        <ul className="todo-list">
            
            {sort.map((todo) => (
            
            <Todo 
             setTodos={setTodos}
                todos={todos}
                key={todo.id}
                todo={todo}
                text={todo.text}
            />
            ))}
          
        </ul>

    </div>
    )
}