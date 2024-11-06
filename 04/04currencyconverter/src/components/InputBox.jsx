import React, {useId} from 'react'
import './input.css'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    
    const id = useId();
  return (
    <div className={`${className} bg-light p-3 rounded-lg text-sm d-flex`}
     style={{backgroundColor: 'rgb(227, 230, 230)'}}
    >
        <div className='w-50'>
            <label htmlFor={id} className='text-dark mb-2 d-inline-block'>
                {label}
            </label>

            <input
            id={id} 
            type="number"
            className='border-0 w-100 py-1'
            placeholder='0'
            disabled = {amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
             />
        </div>
        <div className='w-50 currType d-flex flex-wrap justify-content-end text-end'>
            <p className='text-dark mb-2 w-100'>Currency Type</p>
            <select
             className='rounded-lg px-1 border-0 curr'
             value={selectedCurrency}
             onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
             disabled = {currencyDisabled}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>

    </div>
  )
}

export default InputBox