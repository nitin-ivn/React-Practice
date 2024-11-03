import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className='w-100 vh-100 d-flex justify-content-center 
    align-items-center m-0 p-0'
    style={{backgroundColor: 'rgb(31, 41, 55)'}}>
      <div>
        
      </div>
    </div>
  )
}

export default App
