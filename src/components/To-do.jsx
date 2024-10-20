import React, { useState } from 'react'

export default function Todo() {
  const [Task, setTask] = useState('')
  const [MainTask, setMainTask] = useState([])
  const [isEdit, setIsEdit] = useState(null)
  const [newEdit, setNewEdit] = useState('')
  function handleAdd() {
    setMainTask([...MainTask, { toDo: Task, isCheck: false }])
    setTask('')

  }
  function handelEdit(index) {
    setIsEdit(index)
    setNewEdit(MainTask[index].toDo)
  }
  function handelSave(index) {
    const updateCheckTask = MainTask.map((v, i) =>
      i === index ? { ...v, toDo: newEdit } : v
    )

    setMainTask(updateCheckTask)
    setIsEdit(null)
  }

  function handleChange(e) {
    setTask(e.target.value)
  }
  function handleDelete(index){
    const updatetask=MainTask.filter((_,i)=>
      i!==index
    )
    setMainTask(updatetask)
  }
  
  function handelCheck(index) {
    const updateCheckTask = MainTask.map((v, i) =>
      i === index ? { ...v, isCheck: !v.isCheck } : v
    )

    setMainTask(updateCheckTask)
  }
  return (
    <div >
      <div  className='font-extrabold '><h1>To Do List</h1></div>
      <input  value={Task} onChange={handleChange} className='border-black border' type="text" />
      <button className='border bg-black text-white px-2 text-center font-bold' onClick={handleAdd}>save</button>
      <h1 className='font-bold '>My Task To Do</h1>
      {MainTask.map((value, index) => {
        return (

          <div className='flex m-1' key={index}>
            <input className='p-1 m-1' type="checkbox" onChange={() => handelCheck(index)}  />
            {isEdit === index ? (
                <input className='border-2 border-black' type='text' value={newEdit} onChange={(e) => setNewEdit(e.target.value)} />
              ) : (
                <div className={value.isCheck ? 'line-through' : '' }>{ value.toDo}</div>
              )

              }
              {isEdit === index ? (
                  <button onClick={()=> handelSave(index)} className='border bg-black text-white px-2 text-center font-bold mx-1'>Save</button>
                ) : (
                  <button onClick={()=> handelEdit(index)} className='border bg-black text-white px-2 text-center font-bold mx-1'>Edit</button>
                )}
          
            <button onClick={()=>handleDelete(index)} className='border bg-black text-white px-2 text-center font-bold mx-1'>Delete</button></div>)
      })}
    </div>
  )
}


