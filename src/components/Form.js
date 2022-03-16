import React from "react";
// import Todo from "./Todo";

export default function Form({ inputText, setInputText, todos, setTodos, select, setSelect}){

    const inputHandler= (e) => {
        setInputText(e.target.value)
        
    }

    
    const submitHandler = (e) => {
        e.preventDefault()

        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random()*1000 }
        ])
        setInputText("")
    }

    const selectHandler = (e) => {
        setSelect(e.target.value)
    }

    return (
        <form>
        <input type="text" 
                className="todo-input" 
                onChange={inputHandler}
                value={inputText}  
         />

        <button 
                className="todo-button"
                type="submit"
               onClick={submitHandler} 
        >
                
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select 
                name="todos" 
                className="filter-todo"
                onChange={selectHandler}
            >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

    )
}