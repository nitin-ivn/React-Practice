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
    setConvertedAmount(0)
    setAmount(0)
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
      <div className='w-50'>
        <div className='blur-background w-100 mx-auto border border-dark rounded-2 p-3
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

            <div class="position-relative w-100 h-50">  
              <button 
              class="btn btn-dark position-absolute top-50 start-50 translate-middle"
              onClick={swap}
              >  
                Swap  
              </button>  
            </div> 

            <div className='w-100 mb-1'>
              <InputBox 
               label= "to"
               amount = {convertedAmount}
               amountDisabled
               currencyOptions={options}
               onCurrencyChange={(currency) => setTo(currency)}
               selectedCurrency= {to}
              />
            </div>

            <button className= 'btn btn-dark w-100 px-3 py-2'
             onClick={convert}
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
