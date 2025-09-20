import React from 'react'

function Todo({todos}) {
   const [todo, settodo] = todos
   const deleteTodo = (id)=>{
    const newtodos = todo.filter(el=>el.id!=id)
    localStorage.setItem('todos', JSON.stringify(newtodos))
    settodo(newtodos)
    
   }
   return <ul>
    {todo.map(el=>{
        return <li key={el.id}>
            <h3>{el.todo}</h3>
            <button onClick={()=>deleteTodo(el.id)} className='p-3 rounded-[5px] bg-red-700 text-white' type='button'>delete</button>
        </li>
    })}
   </ul>
}

export default Todo