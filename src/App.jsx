import { useState } from 'react'
import './App.css'
import InputComponents from './components/InputComponents'
import TodoComponents from './components/TodoComponents'

function App() {

  const [inputVal, setinputVal] = useState('')

  function writeTodo(e) {
    setinputVal(e.target.value)
  }

  const [todoList, settodoList] = useState([])

  function addTodo() {
    if (inputVal != '') {
      settodoList((prevTodo) => [...prevTodo, inputVal])
      setinputVal('')
    }
  }

  function delTodo(todoIndex) {
    settodoList((prevTodo) => {
      return prevTodo.filter(
        (prevTodo, prevTodoIndex) => prevTodoIndex !== todoIndex
      )
    })
  }

  return (
    <div className="container">
      <div className="box">

        <div className="main">
          <h1>📝 To-Do List</h1>
        </div>

        <InputComponents
          inputVal={inputVal}
          writeTodo={writeTodo}
          addTodo={addTodo}
        />

        <TodoComponents
          todoList={todoList}
          delTodo={delTodo}
        />

      </div>
    </div>
  )
}

export default App
