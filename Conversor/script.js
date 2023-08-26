const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')
const secondCurrencySelect = document.querySelector('.second-currencySelect')
const secondValueImg = document.querySelector('.second-value-img')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') /*Primeiro valor*/
    const currencyValueConverted = document.querySelector('.currency-value') /*Segundo valor*/

    console.log(currencySelect.value)
    console.log(secondCurrencySelect.value)
    const dolarToday = 4.85
    const euroToday = 5.28
    const libraToday = 6.13
    const realToday = 1.0

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

    if(secondCurrencySelect.value == 'second-real'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }

    if(secondCurrencySelect.value == 'second-dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrencyValue / dolarToday)
    }

    if(secondCurrencySelect.value == 'second-libra'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('un-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if(secondCurrencySelect.value == 'second-euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-EU', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if(secondCurrencySelect == 'second-euro'){
        secondValueImg.style.img = './assets/euro.png'
    }
}
convertButton.addEventListener('click', convertValues)