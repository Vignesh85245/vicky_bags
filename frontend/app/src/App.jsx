import { useState } from 'react'
import './App.css'
import './index.css' // Assuming you have Tailwind CSS set up// Import your custom styles for the Login component
import Login from './components/Login.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
           <Login />
      </div>
    </>
  )
}

export default App
