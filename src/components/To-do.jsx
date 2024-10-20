import React, { useState, useEffect } from 'react'

export default function Todo() {
  const [Task, setTask] = useState('')

  const [MainTask, setMainTask] = useState(() => {
    const data = localStorage.getItem('todo')
    return data ? JSON.parse(data) : []
  })
  const [isEdit, setIsEdit] = useState(null)
  const [newEdit, setNewEdit] = useState('')

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(MainTask))
  }, [MainTask])






  function handleAdd() {
    if (Task.trim() !== '') {
      setMainTask([...MainTask, { toDo: Task, isCheck: false }])
      setTask('')
    }
  }
  function handleEdit(index) {
    setIsEdit(index)
    setNewEdit(MainTask[index].toDo)
  }
  function handleSave(index) {
    const updateCheckTask = MainTask.map((v, i) =>
      i === index ? { ...v, toDo: newEdit } : v
    )

    setMainTask(updateCheckTask)
    setIsEdit(null)
  }

  function handleChange(e) {
    setTask(e.target.value)
  }
  function handleDelete(index) {
    const updatetask = MainTask.filter((_, i) =>
      i !== index
    )
    setMainTask(updatetask)
  }

  function handleCheck(index) {
    const updateCheckTask = MainTask.map((v, i) =>
      i === index ? { ...v, isCheck: !v.isCheck } : v
    )

    setMainTask(updateCheckTask)
  }
  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-700 px-40 py-12 min-h-screen">
      <div className=' bg-white py-2 rounded pl-4  '>
        <div className=' flex font-extrabold items-center'><h1 className="m-4" >To Do List</h1> <img className='w-4 h-4' src="/images/icon.png" alt="" /></div>
        <div className="bg-[#edeef0]  flex   mb-6 rounded-full h-8 mx-4">
          <input value={Task} onChange={handleChange} className='pl-2 border-none outline-none flex-1  font-semibold bg-transparent ' type="text" placeholder='Add your text'
            onKeyDown={(e) => e.key === "Enter" ? handleAdd() : null} />
          <button className='flex items-center justify-center  w-16 border text-base bg-[#ff5945] text-white cursor-pointer rounded-full' onClick={handleAdd}>save</button></div>
         
        
        {MainTask.map((value, index) => {
          return (

            <div className='flex m-1 ml-3 px-3' key={index}>
              <input className='p-1 m-1 ' type="checkbox" onChange={() => handleCheck(index)} checked={value.isCheck} />
              {isEdit === index ? (
                <input className='border outline-none  font-normal bg-[#edeef0] rounded-full' type='text' value={newEdit} onChange={(e) => setNewEdit(e.target.value)} />
              ) : (
                <div className={ ` w-56 pl-4 ${value.isCheck ? 'line-through' : '' }`} >{value.toDo}</div>
              )

              }
              {isEdit === index ? (
                <button onClick={() => handleSave(index)} className='px-1 mx-1 w-14 border text-base bg-[#ff5945] text-white cursor-pointer rounded-full'>Save</button>
              ) : (
                <button onClick={() => handleEdit(index)} className=' px-1 mx-1 w-14 border text-base bg-[#ff5945] text-white cursor-pointer rounded-full'>Edit</button>
              )}

              <button onClick={() => handleDelete(index)} className='p w-14 border text-base bg-[#ff5945] text-white cursor-pointer rounded-full'>Delete</button></div>)
        })}
      </div></div>
  )
}


