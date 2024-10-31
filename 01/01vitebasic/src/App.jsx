import { useState } from 'react'
import Youtube from './Youtube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Basic Vite React</h2>
      <Youtube />
    </>
  )
}

export default App
