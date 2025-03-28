import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index  } = props

  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            {/* Edit button */}
            <button ><i className="fa-solid fa-pen-to-square"></i></button>

            {/* Delete button */}
            <button onClick={() => handleDeleteTodo(index)}><i className="fa-solid fa-trash"></i></button>
                
        </div>
    </li>
  )
}
