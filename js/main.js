'use strict'

import { lerContatos, criarContato } from "./contatos.js"

const contatos = await lerContatos()

async function criarCards(contato) {
    const container = document.getElementById('container')

    const card = document.createElement('div')
    const imagem = document.createElement('img')
    const nome = document.createElement('h2')
    const numero = document.createElement('p')

    card.classList = 'card-contato'
    imagem.src = contato.foto
    nome.textContent = contato.nome
    numero.textContent = contato.celular

    card.append(imagem, nome, numero)
    container.append(card)
}

function mostrarCards(){
    contatos.forEach(criarCards)
}

mostrarCards()

function mostrarFormulario(){
    document.getElementById('container').replaceChildren()
    document.querySelector('main').classList.add('form-show')
}

const novoContato = document.getElementById('novo-contato')
novoContato.addEventListener('click', mostrarFormulario)

function ocultarFormulario(){
    document.querySelector('main').classList.remove('form-show')
    mostrarCards()
}

const cancelar = document.getElementById('cancelar')
cancelar.addEventListener('click', ocultarFormulario)

async function criarUsuario(){
    const novoContato = {
        "nome": document.getElementById('nome').value,
        "celular": document.getElementById('celular').value,
        "foto": document.getElementById('foto').src = 'https://i.pinimg.com/originals/e7/c0/5e/e7c05ea75a71182f966f3d9a5aa1574d.gif',
        "email": document.getElementById('email').value,
        "endereco": document.getElementById('endereco').value,
        "cidade": document.getElementById('cidade').value,
    }

    await criarContato(novoContato)
}

const salvar = document.getElementById('salvar')
salvar.addEventListener('click', async () => {
    await criarUsuario()
    ocultarFormulario()
})