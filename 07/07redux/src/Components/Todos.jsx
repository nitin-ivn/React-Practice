import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {

  const todos = useSelector(state => state.todos)
  return (
    <>    
      <div>Todos</div>
      <ul className='list-none'>
      {todos.map((todo) => (
        <li key={todo.id}>
        <div>{todo.text}</div>
        </li>
      ))}
      </ul>
    </>
  )
}

export default Todos