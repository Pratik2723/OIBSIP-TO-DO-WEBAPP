import React from 'react'

const TodoList =({todos,setTodos})=> {
  return (
    <>
    {todos.map((todo)=>(
        <li>
            <input type="text" value />
        </li>
    ))}


    </>
  )
}

export default TodoList;