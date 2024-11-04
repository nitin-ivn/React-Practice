import { useCallback, useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  let passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str+= "!@#$%^&*()_+";

    for(let i=1;i<length;i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length,numberAllowed,charAllowed])

  useEffect(() => {
    generatePassword();
  }, [length,numberAllowed,charAllowed])


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  }

  return (
    <div className='w-100 vh-100 m-0 p-0'
      style={{backgroundColor: 'rgb(31, 41, 55)'}}>
      <h1 className='mx-auto text-center text-light mt-3'>Password Generator</h1>
      <div className='d-flex w-100 justify-content-center me-2 rounded-lg mb-4'>
        <input
        type="text"
        value={password}
        className='gen py-1 px-3 rounded-1 textpass'
        placeholder='Password'
        readOnly
        ref={passRef}
        />
        <button className='copy-btn px-3 bg-primary text-light rounded-1 border-0'
          onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className='d-flex small justify-content-center'>
        <div className='d-flex'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='len'
          onChange={(e) => setLength(e.target.value)}
          name=""
          id="" 
          />

          <label htmlFor="length" className='text-light ms-1'>
            Length: {length}
            </label>
        </div>

        <div className='d-flex'>
          <input
          type="checkbox"
          value={numberAllowed}
          className='len ms-3'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
          name=""
          id="" 
          />

          <label htmlFor="number" className='text-light ms-1'>
            Number Allowed
            </label>
        </div>

        <div className='d-flex'>
          <input
          type="checkbox"
          value={charAllowed}
          className='len ms-3'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          name=""
          id="" 
          />

          <label htmlFor="character" className='text-light ms-1'>
            Characters Allowed
            </label>
        </div>
      </div>
    </div>
  )
}

export default App
