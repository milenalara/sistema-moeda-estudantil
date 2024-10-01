import { useState } from 'react'
import './index.css'
import MyComponent from './pages/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello world</h1>
     <MyComponent /> 
    </>
  )
}

export default App
