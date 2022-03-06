const containerElement = document.querySelector('.converter')
const inputElement = containerElement.querySelector('.input')
const currencyElement = containerElement.querySelector('.currency')
const outputElement = containerElement.querySelector('.output')

const calculate = () =>
{
    const inputValue = parseFloat(inputElement.value)
    const currencyValue = parseFloat(currencyElement.value)
    const outputValue = inputValue * currencyValue
    
    if(isNaN(outputValue))
        outputElement.value = '¯\\_(ツ)_/¯'
    else
        outputElement.value = outputValue.toFixed(2)
}

inputElement.addEventListener('input', calculate)
currencyElement.addEventListener('input', calculate)
