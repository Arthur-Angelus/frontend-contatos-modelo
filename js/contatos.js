'use strict'

export async function lerContatos(){
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const response = await fetch (url)

    const contatos = await response.json()

    console.log(contatos)

    return contatos
}

export async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }
    
    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok
}

export async function deletarContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:"DELETE"
    }

    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok 
}

export async function atualizarContato(id, contato){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:"PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }
    
    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok
}

const novoContato = {
        "nome": "Zote o poderoso",
        "celular": "hmhhmm",
        "foto": "https://http2.mlstatic.com/D_NQ_NP_758992-MLU74519887581_022024-O.webp",
        "email": "zoteTheMighty@gmail.com",
        "endereco": "dirtmouth, 04",
        "cidade": "HollowNest"
}


//criarContato(novoContato)
//atualizarContato()
//deletarContato()
