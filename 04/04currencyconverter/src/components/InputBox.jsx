import React from 'react'

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
    
  return (
    <div className={`${className} bg-light p-3 rounded-lg text-sm flex`}>
        <div className='w-50'>
            <label className='text-dark mb-2 d-inline-block'>
                {label}
            </label>

            <input 
            type="text"
            className='border-0 w-100 py-1'
            placeholder='0'
            disabled = {amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
             />
        </div>
        <div className='w-50 d-flex flex-wrap justify-content-end text-right'>
            <p className='text-dark mb-2 w-100'>Currency Type</p>
            <select
             className='rounded-lg px-1 bg-dark border-0'
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