import { useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

function App() {

  const [todos, setTodos] = useState([
        "Eat chocolate with tomato juiced to fine-grained puree",
        "Go to gym",
      ])
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodo(newTodo){
    const newTodoList = [newTodo, ...todos]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const updatedTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    setTodos(updatedTodoList)
  }
  


  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App
