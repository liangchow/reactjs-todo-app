import React from 'react'
import TodoCard from './Todocard'

export default function TodoList(props) {
    
    const { todos } = props

  return (
    <ol>
        {todos.map((todo, todoIndex)=>{
            return(
                <p>{todo}</p>
            )
        })}
    </ol>
  )
}
