import React, { useState } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Form from './Form'
import Todo from './Todo'

function Home() {

  const [todos, Settodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  
  return (
    <>
    <Header/>
    <main className='grow p-5'>
      <Form todos={Settodos}/>
      <Todo todos={[todos, Settodos]}/>
      </main>
    <Footer/>
    </>
  )
}

export default Home