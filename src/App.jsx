import { useState, useEffect } from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

function App() {
  // Initiaze a todos list
  const [todos, setTodos] = useState([
        "Eat chocolate with tomato juiced to fine-grained puree",
        "Go to gym",
      ])

  // For inputting new todo items
  const [todoValue, setTodoValue] = useState('')
  
  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos : newList}))
  }

  function handleAddTodo(newTodo){
    // Append newTodo item to the remaining todos list
    const newTodoList = [newTodo, ...todos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }    

  function handleDeleteTodo(index){
    const updatedTodoList = todos.filter((todo, todoIndex) => todoIndex != index)
    persistData(updatedTodoList)
    setTodos(updatedTodoList)
  }

  function handleEditTodo(index){
    const todoValueToBeEdited = todos[index]
    setTodoValue(todoValueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      // Check if localStorage exists, then return
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
    
  }, [])

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )}

export default App
