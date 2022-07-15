
function coinsInformation(){
    return fetch('https://musicapig.herokuapp.com/coins')
};

coinsInformation()

export {coinsInformation}
