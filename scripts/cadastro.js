import { User } from "./user.js";
import fetch from "node-fetch";
function registerUser(register){
    let url = '#'
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
            "pk_user_id":id,
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
    return user
}

export { registerUser }