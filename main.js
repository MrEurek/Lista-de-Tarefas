const elementoLista = document.querySelector('ul')
const elemontoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')

const tarefas = []

function mostraTarefas(){

    elementoLista.innerHTML = ''

    for (tarefa of tarefas){
        const elementoTarefa = document.createElement('Li')
        const textoTarefa = document.createTextNode(tarefa)
         
        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createTextNode('X')
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
    }
}

mostraTarefas()

function addTarefas(){
     const textoTarefa = elemontoInput.value
     tarefas.push(textoTarefa)
     elemontoInput.value = ''

     mostraTarefas()
}

elementoBotao.setAttribute('onclick', 'addTarefa()')

function deletaTarefa(pos){
    tarefas.splice(pos, 1)
    mostraTarefas()
}


