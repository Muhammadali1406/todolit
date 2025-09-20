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
        return <li className='w-full p-3 text-2xl font-bold text-blue-900 flex justify-between' key={el.id}>
            <h3>{el.todo}</h3>
            <button onClick={()=>deleteTodo(el.id)} className=' w-[20%] p-3 rounded-[5px] bg-red-700 text-white' type='button'>delete</button>
        </li>
    })}
   </ul>
}

export default Todo