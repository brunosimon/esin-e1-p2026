const containerElement = document.querySelector('.euro-converter')
const inputElement = containerElement.querySelector('.input')
const currencyElement = containerElement.querySelector('.currency')
const outputElement = containerElement.querySelector('.output')

function calculate()
{
    const input = parseFloat(inputElement.value)
    const currency = parseFloat(currencyElement.value)
    const output = input * currency

    if(isNaN(output))
        outputElement.value = '¯\\_(ツ)_/¯'
    else
        outputElement.value = output.toFixed(4)
}

inputElement.addEventListener('input', calculate)
currencyElement.addEventListener('input', calculate)