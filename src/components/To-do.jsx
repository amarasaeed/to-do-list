import React from 'react'

export default function Todo() {
  return (
    <div>
        <div><h1>To Do List</h1></div>
        <input className= 'border-black border' type="text" />
        <button className='border bg-slate-500'>save</button>
        <h1>My Task To Do</h1>
        <div className='flex'>
        <div>task1</div>
        <button className='border bg-slate-500'>Edit</button>
        <button className='border bg-slate-500'>Delete</button></div>
    </div>
  )
}


