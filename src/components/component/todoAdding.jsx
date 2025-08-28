import React from 'react'
import {useDispatch} from "react-redux"
import { useState } from 'react';
import { addTask } from "../../features/todo/todoslice.js";


const AddTodo = () => {
    const dispatch = useDispatch();
    const [task,setTask]=useState('');
  return (
    <>
        <div className='bg-amber-200 font-bold text-3xl text-center py-4'>Increase Productivity</div>
        <form className='flex justify-center'>
          <input type="text" value={task} onChange={(e)=>{
            setTask(e.target.value)
          }} placeholder="Add task" className='font-semibold border rounded-xl px-2 py-2 w-xl '/>
          <button onClick={(e)=>{e.preventDefault();if(task!==''){dispatch(addTask(task));setTask("")};
          }} className='bg-blue-500 px-2 py-2 rounded-2xl hover:scale-105 mx-2 text-white font-semibold transition-transform' type="submit">Add Task</button>
        </form>
    </>
  )
}

export default AddTodo