import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from '../../features/todo/todoslice';

const DisplayTodo = () => {
  const state = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md mx-auto w-md">
        <h2 className='text-center font-bold text-xl`'>My todos</h2>
        <ul className={"bg-gray-100 "}>
          {state.map(todo => {
            return (<li key={todo.id} className='bg-purple-100 font-semibold px-4 py-2 border my-2 rounded-xl flex justify-between'>
              <p>{todo.text}</p>
              <div className='flex gap-1'>
                <button className='bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer' onClick={()=>{dispatch(deleteTask(todo.id))}}>Delete</button>
                <button className='bg-green-600 text-white px-2 py-1 rounded-md cursor-pointer'>completed</button>
              </div>
            </li>)
          }
          )}
        </ul>
      </div>
    </>
  )
}

export default DisplayTodo