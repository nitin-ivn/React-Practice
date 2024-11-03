import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [color,setColor] = useState('black');

  function changeColor(color){
      setColor(color);
  }

  return (
    <div className='w-100 vh-100 d-flex justify-content-center 
    align-items-center' 
    style={{backgroundColor: color}}>
      <div className='bg-white d-flex p-1 rounded-3'>
      <button className='btn btn-primary h-25 mx-1'
        onClick={() => changeColor('rgb(0, 123, 255)')}
      >Blue</button>
      <button className='btn btn-danger h-25 mx-1'
        onClick={() => changeColor('rgb(220, 53, 69)')}
      >Red</button>
      <button className='btn btn-success h-25 mx-1'
        onClick={() => changeColor('rgb(40, 167, 69)')}
      >Green</button>
      </div>
    </div>
  )
}

export default App
