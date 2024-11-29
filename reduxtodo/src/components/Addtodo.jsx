import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/Todo/todoSlice'
function Addtodo() {
  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()
  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')

  }
  



  return (
   <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>

   </form>
  )
}

export default Addtodo