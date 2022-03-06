const calculatorElement = document.querySelector('.calculator')
const inputLeftElement = calculatorElement.querySelector('.input-left')
const inputRightElement = calculatorElement.querySelector('.input-right')
const operationElement = calculatorElement.querySelector('.operation')
const outputElement = calculatorElement.querySelector('.output')

const calculate = () =>
{
    const inputLeftValue = parseFloat(inputLeftElement.value)
    const inputRightValue = parseFloat(inputRightElement.value)
    const operationValue = operationElement.value
    const formula = `${inputLeftValue} ${operationValue} ${inputRightValue}`
    const result = eval(formula)
    
    outputElement.value = isNaN(result) ? 'ERROR' : result.toFixed(3)
}

inputLeftElement.addEventListener('input', calculate)
inputRightElement.addEventListener('input', calculate)
operationElement.addEventListener('input', calculate)
