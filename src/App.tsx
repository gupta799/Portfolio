import { useState } from 'react'
import './App.scss'
import Navigation from './components/nav/navigation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    </>
  )
}

export default App
