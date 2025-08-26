const convertButton = document.querySelector(".convert-button")

function convertvalue(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".valor-moeda-para-troca") //moeda para converter
    const currencyValueConverted = document.querySelector(".valor-moeda") //outras moedas

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    

    
}

convertButton.addEventListener("click", convertvalue)