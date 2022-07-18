import { coinsInformation } from "../inicial/bits.js"

function addCoin(coinName){
    alert('ó´')
    coinsInformation(coinName).then(response => response.json()).then(response => popopo(response[0]))
}

function popopo (response){
    console.log(response);
    const wallet = document.getElementById('wallet')

    let coinSection = document.createElement('div')
    coinSection.setAttribute('class', 'coinSection')

    let coinIcon = document.createElement('img')
    coinIcon.setAttribute('src', response.iconUrl)
    coinIcon.setAttribute('class', 'coinIcon')

    let coinText = document.createElement('p')
    let node = document.createTextNode(`Você comprou R$${response.price * 5.5 } em ${response.name}`)
    coinText.appendChild(node)
    coinText.setAttribute('class', 'coinText')

    coinSection.appendChild(coinIcon)
    coinSection.appendChild(coinText)
    wallet.appendChild(coinSection)
}

export { addCoin }