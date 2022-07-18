import { User } from "./user.js";
function registerUser(register) {
console.log('js:'+register);
   
    let url = 'https://musicapig.herokuapp.com/users'
    fetch(url, {
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            "name": register.username, 
            "password_user":register.senha, 
            "cep":register.cep,
            "user_address": register.rua,
            "house_number": register.numero,
            "uf": register.uf,
            "district": register.bairro, 
            "city": register.cidade
        })
    }).then(alert('usuário registrado'))
}

export { registerUser }