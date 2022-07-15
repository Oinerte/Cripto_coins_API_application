class User {

    nomeCompleto
    username
    senha
    cep 
    rua
    numero
    uf
    bairro
    cidade

    constructor(nome, username, senha, cep, rua, numero, uf, bairro, cidade){
        this.nomeCompleto = nome
        this.username = username
        this.senha = senha
        this.cep = cep
        this.rua = rua
        this.numero = numero
        this.uf = uf
        this.bairro = bairro
        this.cidade = cidade
    }

}
export {User}