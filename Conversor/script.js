const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') /*Primeiro valor*/
    const currencyValueConverted = document.querySelector('.currency-value') /*Segundo valor*/

    console.log(currencySelect)
    const dolarToday = 4.85
    const euroToday = 5.28

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
    }).format(convertedValue)



}

convertButton.addEventListener('click', convertValues)