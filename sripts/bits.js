
function coinsInformation(name){
    var api_key = "coinranking1ab2611c5b60defac1466459b4a5c4863a10bd7e3752e714"
    var url = "https://api.coinranking.com/v2/coins"


    fetch((url), {
        method: "GET",
        headers: {
            'Content-Type': 'aplication/json',
            'x-acess-token': api_key,
            'Acess-Control-Allow-origin': '*'
        }
    }).then((response) => {
        if (response.ok) {
            response.json().then((json) => {

                const coinsData = json.data.coins
                for(let i = 0; i < coinsData.lenght; i++){
                    if(coinsData[i].name == name){
                        return coinsData[i]
                    }
                }
            })
        }
    }).catch((error) => {
    console.log(error)
    })
}

coinsInformation()

export {coinsInformation}
