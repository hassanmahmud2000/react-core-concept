import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friends from './Frands'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Data Storag By React</h1>
      <Friends></Friends>
    </>
  )
}

export default App
