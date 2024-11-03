import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MyCard from './MyCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MyCard title = "Card 1" button = "lol"/>
      <MyCard title = "Card 2" button = "lol"/>
      <MyCard title = "Card 3" button = "lol"/>
    </>
  )
}

export default App
