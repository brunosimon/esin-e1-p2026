const leftInputElement = document.querySelector('.left-input')
const operationElement = document.querySelector('.operation')
const rightInputElement = document.querySelector('.right-input')
const outputElement = document.querySelector('.output')

const calculate = () =>
{
    const leftValue = leftInputElement.value
    const operationValue = operationElement.value
    const rightValue = rightInputElement.value
    const formula = `${leftValue} ${operationValue} ${rightValue}`

    try
    {
        const result = eval(formula)
        outputElement.value = Math.round(result * 1000) / 1000
    }
    catch(error)
    {
        outputElement.value = '¯\\_(ツ)_/¯'
    }

}

leftInputElement.addEventListener('input', calculate)
operationElement.addEventListener('input', calculate)
rightInputElement.addEventListener('input', calculate)