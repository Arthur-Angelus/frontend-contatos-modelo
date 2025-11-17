'use strict'

import { lerContatos, criarContato, deletarContato, atualizarContato } from "./contatos.js"

const contatos = await lerContatos()

async function criarCards(contato) {
    const container = document.getElementById('container')

    const card = document.createElement('div')
    const imagem = document.createElement('img')
    const nome = document.createElement('h2')
    const numero = document.createElement('p')
    let cliques = 0;

    card.classList = 'card-contato'
    imagem.src = contato.url
    nome.textContent = contato.nome
    numero.textContent = contato.celular
    card.dataset.id = contato.id

    card.addEventListener('click', async () => {
        cliques++;
        mostrarFormulario()
        await infoUsuario(contato)
        await desabilitarInfoUsuario()
        const id = this.dataset.id
        if(cliques == 1){
            habilitarInfoUsuario()
        }


        
    })

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
        "foto": document.getElementById('foto').src,
        "email": document.getElementById('email').value,
        "endereco": document.getElementById('endereco').value,
        "cidade": document.getElementById('cidade').value
    }

    await criarContato(novoContato)
}

const salvar = document.getElementById('salvar')
salvar.addEventListener('click', async () => {
    await criarUsuario()
    ocultarFormulario()
})

async function editarUsuario() {
    const editar = document.getElementById('editar')
    editar.addEventListener('click', atualizarContato())
}

async function excluirUsuario() {
    const deletar = document.getElementById('deletar')
    deletar.addEventListener('click', deletarContato())
}  

async function infoUsuario(contato) {
    document.getElementById('nome').value = contato.nome,
    document.getElementById('celular').value = contato.celular,
    document.getElementById('preview-image').src = contato.url,
    document.getElementById('email').value = contato.email,
    document.getElementById('endereco').value = contato.endereco,
    document.getElementById('cidade').value = contato.cidade
}

async function desabilitarInfoUsuario() {
    document.getElementById('nome').disabled = true,
    document.getElementById('celular').disabled = true,
    document.getElementById('preview-image').disabled = true,
    document.getElementById('email').disabled = true,
    document.getElementById('endereco').disabled = true,
    document.getElementById('cidade').disabled = true
}

async function habilitarInfoUsuario() {
    document.getElementById('nome').disabled = false,
    document.getElementById('celular').disabled = false,
    document.getElementById('preview-image').disabled = false,
    document.getElementById('email').disabled = false,
    document.getElementById('endereco').disabled = false,
    document.getElementById('cidade').disabled = false
}