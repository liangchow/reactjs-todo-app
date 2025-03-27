import { useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

function App() {

  const [todos, setTodos] = useState([
        "Eat chocolate",
        "Go to gym",
      ])

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
