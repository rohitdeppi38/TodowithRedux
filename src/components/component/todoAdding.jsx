import React from 'react'
import {useDispatch} from "react-redux"
import { useState } from 'react';
import { addTask } from "../../features/todo/todoslice.js";


const AddTodo = () => {
    const dispatch = useDispatch();
    const [task,setTask]=useState('');
  return (
    <>
        <div>Add Todo</div>
        <div>
          <input type="text" value={task} onChange={(e)=>{
            setTask(e.target.value)
          }} placeholder="Add task"/>
          <button onClick={()=>{dispatch(addTask(task));
            setTask("");
          }}>Add Task</button>
        </div>
    </>
  )
}

export default AddTodo