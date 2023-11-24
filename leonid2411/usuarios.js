'use strict'

async function listarUsuario (){
    const url = 'http//:10.107.140.2.8080/usuarios/'
    const response = await fetch (url) 
    const data = await response.json()
    console.log (data)

    return data
}

async function cadastrarUsuario (usuario){
const url = 'http//:10.107.140.2.8080/usuarios/'
const options = {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body : JSON.stringify(usuario)
}

const responde = await fetch (url, options)
return response.ok

}
async function atualizarUsuario (usuario){
    const url='http//:10.107.140.2.8080/usuarios/$(usuario.id)'
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'aplication'

        }
    }
}


/// AREA DE TESTE

const novoUsuario = {

    nome: 'Julia',

    email: 'julia.ferraz@gmail.com'

}

cadastrarUsuario()

listarUsuario ()