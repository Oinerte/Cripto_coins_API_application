import { coinsInformation } from "../bits"

function addCoin(coinName){
    let Coin = coinsInformation(coinName)

    const wallet = document.getElementById('wallet')

    let coinSection = Document.createElement('div')
    coinSection.setAttribute('class', 'coinSection')

    let coinIcon = Document.createElement('img')
    coinIcon.setAttribute('src', Coin.iconUrl)
    coinIcon.setAttribute('class', 'coinIcon')

    let coinText = Document.createElement('p')
    coinText.createTextNode(`Você comprou R$${Coin.price * 5.5 * coinAmout} em ${Coin.name}`)
    coinText.setAttribute('class', 'coinText')

    coinSection.appendChild(coinIcon)
    coinSection.appendChild(coinText)
    wallet.appendChild(coinSection)
}