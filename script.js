const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".converter-para")


function convertvalue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".valor-moeda-para-troca") //moeda para converter
    const currencyValueConverted = document.querySelector(".valor-moeda") //outras moedas



    const dolarToday = 5.2
    const euroToday = 6.2
    const pesoToday = 73


    if (currencySelect.value == "dolar") { //se o valor selecionado for dolar então faça isso
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") { //se o valor selecionado for euro então faça isso
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * pesoToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.getElementById("moeda")
    const currencyImg = document.querySelector(".bandeira-US")

    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "assets/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/logo-euro.png"
    }
    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso cubano"
        currencyImg.src = "assets/bandeira-cuba.png"
    }

    convertvalue()

}

convertButton.addEventListener("click", convertvalue)

currencySelect.addEventListener("change", changeCurrency)

////////////////////////////////////TRECHO DO CODIGO FEITO POR MIM ///////////////////////////////////////


