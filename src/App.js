import './App.css';

import { useState, useEffect} from 'react';

// components 
import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [select, setSelect] = useState("All")
  const [sort, setSort] = useState([])

useEffect(() => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]))
  }else{
   let savedLocalTodos = JSON.parse(localStorage.getItem("todos"))
   setTodos(savedLocalTodos)
  }
},[])

  useEffect(() => {
    switch (select){
      case "completed":
        setSort(todos.filter(lists => lists.completed === true))
        break
      case "uncompleted":
        setSort(todos.filter(lists => lists.completed === false))
        break

      default:
        setSort(todos)
    }

    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos, select])


  return (
    <div className="App">
      <Navbar />
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        select={select}
        setSelect={setSelect}
        
      />

      <TodoList
        setTodos={setTodos}
        todos={todos}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
}

export default App;




  