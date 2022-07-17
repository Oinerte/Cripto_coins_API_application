import { User } from "./user.js";
function registerUser(register){
/*     console.log(register); */
    fetch('https://musicapig.herokuapp.com/users/names',{
        method:'POST',
        body:{
            username:register.username
        }

    }).then(response => response.json())
            .then(response => ()=>{
            if(response.log == 'this name is been used'){
                alert('Esse usuário já está sendo usado')
            }else{
                let url = 'https://musicapig.herokuapp.com/users'
                let user = new User(register.nome, register.username, register.senha, register.cep, 
                    register.rua, register.numero, register.uf, register.bairro, register.cidade)
                let username = user.nome
                let passwd = user.password
                let cep = user.cep
                let rua = user.rua
                let numero = user.numero
                let uf = user.uf
                let bairro = user.bairro
                let city = user.cidade
                fetch(url, {
                    method:"POST",
                    body:{
                        "username":username,
                        "password_user":passwd,
                        "cep":cep,
                        "user_address":rua,
                        "house_number":numero,
                        "uf":uf,
                        "disctrict":bairro,
                        "city":city
                    }
                })
                .then(alert('usuário registrado'))
    
            }
        })

}

export { registerUser }