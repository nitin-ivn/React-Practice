import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0)

  let addValue = () => {
    // setCounter(counter + 1);
    
    //if we use setCounter method normally four times
    //the react will bundle them into one and execute only
    //one time.This is called patching/
    //to prevent that we use callback to get prev
    //value and then update it.

    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }

  let removeValue = () => {
    setCounter(counter - 1);

    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
       onClick={addValue}
       >Add Value</button>
       <button
        onClick={removeValue}
       >Remove Value</button>
    </>
  )
}

export default App
