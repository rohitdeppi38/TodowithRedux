import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteTask ,completed} from '../../features/todo/todoslice';

const DisplayTodo = () => {
  const state = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mx-auto w-md">
        <h2 className='text-center font-bold text-xl`'>My todos</h2>
        <ul className={"bg-gray-100 "}>
          {state.map(todo => {
            return (
              <li
              key={todo.id}
              className={`backdrop-blur-xl border-whi30te/ font-semibold px-4 py-2 border my-2 rounded-xl flex justify-between items-center flex-wrap ${todo.completed ? 'bg-green-200' : 'bg-purple-100'}`}
              >
              <p className={todo.completed ? "line-through" : ""}>{todo.text}</p>
              <div className='flex gap-2 '>
              <button
              className='bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer transform transition-transform hover:scale-105'
              onClick={() => dispatch(deleteTask(todo.id))}
              >
              Delete
              </button>
              <button
              className='bg-green-600 text-white px-2 py-1 rounded-md cursor-pointer transform transition-transform hover:scale-105'
              onClick={() => dispatch(completed(todo.id))}
              disabled={todo.completed}
              >
              Completed
              </button>
              </div>
              </li>
            )
          }
          )}
        </ul>
      </div>
    </>
  )
}

export default DisplayTodo