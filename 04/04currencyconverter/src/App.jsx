import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import useCurrency from './hooks/useCurrency'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-100 vh-100 m-0 p-0 d-flex justify-content-center
     align-items-center bg-cover bg-no-repeat'
     style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
     }}
     >
      <div className='w-100'>
        <div className='w-100 mx-auto border border-dark rounded-lg p-5
        '>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-100 mb-1'>
              <InputBox 
               label= "from"
               amount = {amount}
               currencyOptions={options}
               onCurrencyChange={(currency) => setFrom(currency)}
               onAmountChange={(amount) => setAmount(amount)}
               selectedCurrency= {from}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
