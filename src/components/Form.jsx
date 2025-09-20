import React from 'react'

function Form({todos}) {
    const Addtodo = (e)=>{
        const id = localStorage.getItem('id') || 1
        e.preventDefault()
        const formdata = new FormData(e.target)
        const obj = {
            id: id,
            complete: false,
            todo: formdata.get('todo')
        }
        localStorage.setItem('id', id+1)
        todos(prev=>{
            const newtodos = [...prev, obj]
            localStorage.setItem('todos', JSON.stringify(newtodos))
            return newtodos
        })
        
        
    }
  return (
    <form onSubmit={Addtodo} className='w-full flex flex-col gap-4 justify-center max-w-[700px] mx-auto'>
        <input type="text" name='todo' placeholder='todo' className='focus: outline-2 outline-green-300 rounded-[8px] p-4'/>
        <button  type='submit' className='p-3 bg-blue-800 w-[30%] mx-auto text-white text-2xl font-bold rounded-[7px]'>+</button>
    </form>
  )
}

export default Form