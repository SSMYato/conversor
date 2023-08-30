const convertButton = document.querySelector('.convert-button')
const inputValue = document.querySelector('.input-currency')
const firstCurrencyName = document.querySelector('.first-currency-name')
const firstCurrencyValue = document.querySelector('.first-currency-value')
const secondCurrencyName = document.querySelector('.second-currency-name')
const secondCurrencyValue = document.querySelector('.second-currency-value')
const firstImg = document.querySelector('.first-currency-img')
const secondImg = document.querySelector('.second-currency-img')
const secondSelect = document.querySelector('.second-select')

function convertValues() {
    const dolarToday = 4.85
    const libraToday = 6.13
    const euroToday = 5.28
    const firstSelect = document.querySelector('.first-select').value
    const secondSelect = document.querySelector('.second-select').value

    firstCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue.value)

    if (secondSelect == 'dolar') {
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue.value / dolarToday),
        secondCurrencyName.innerHTML = 'Dólar Americano',
        secondImg.src = './assets/dolar.png'
    }

    if (secondSelect == 'euro') {
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue.value / euroToday),
        secondCurrencyName.innerHTML = 'Euro',
        secondImg.src = './assets/euro.png'
    }
    if (secondSelect == 'libra'){
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue.value / libraToday),
        secondCurrencyName.innerHTML = 'Libra Esterlina',
        secondImg.src = './assets/libra.png'

    }
}
secondSelect.addEventListener('change', convertValues)
convertButton.addEventListener('click', convertValues)