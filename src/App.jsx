import { useState } from 'react'
import AddTodo from "./components/component/todoAdding.jsx"
import DisplayTodo from "./components/component/displayTodo.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <AddTodo/>
      <DisplayTodo/>
    </>
  )
}

export default App
