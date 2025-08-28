import { useState } from 'react'
import AddTodo from "./components/component/todoAdding.jsx"
import DisplayTodo from "./components/component/displayTodo.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-100 h-[100vh]'>  
      <AddTodo/>
      <DisplayTodo/>
    </div>
  )
}

export default App
