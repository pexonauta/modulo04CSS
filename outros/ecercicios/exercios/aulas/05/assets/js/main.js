let inputNovaTarefa = document.querySelector('#novatarefa');
let btnAddTarefa = document.querySelector('#btn-add');
let listaTarefa = document.querySelector('#listatarefas');

let janelaEditar = document.querySelector('#janelaEdicao');
let janelaFundoEditar = document.querySelector('#janelafundo');
let fecharTarefa = document.querySelector('#janelaFechar');
let saveNewTask = document.querySelector('#btn-save')
let idNewTask = document.querySelector('#idtask')
let newTaskText = document.querySelector('#AtualizarTarefa')

inputNovaTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId(),
        };

        adicionarTarefa(tarefa);
    }
})

btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
    };

    adicionarTarefa(tarefa);
})

fecharTarefa.addEventListener('click', (e) => {
    AbrireFecharEdit();
})

saveNewTask.addEventListener('click', (e) => {
    e.preventDefault();

    let idTarefa = idNewTask.innerHTML.replace('#', '');
    let tarefa = {
        nome: newTaskText.value,
        id: idTarefa,
    }

    let tarefaAtual = document.getElementById(''+idTarefa+'');

    if(tarefaAtual) {
        let li = criarTagLi(tarefa);
        listaTarefa.replaceChildren(li, tarefaAtual);

        AbrireFecharEdit();
    }
    else {
        alert('Elemento Não Encontrado');
    }
})

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {
    let li = criarTagLi(tarefa);
    listaTarefa.appendChild(li);

    inputNovaTarefa.value = ''
}

function criarTagLi(tarefa) {
    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add("textotarefa");
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btn-acao');
    btnEditar.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
    btnEditar.setAttribute('onclick', 'editar(' + tarefa.id + ')');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btn-acao');
    btnExcluir.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}

function editar(idTarefa) {
    let li = document.getElementById('' + idTarefa + '');
    if (li) {
        idNewTask.innerHTML = '#' + idTarefa;
        newTaskText.value = li.innerText;
    }
    else {
        alert('Elemento Não Encontrado');
    }
    AbrireFecharEdit();

}
function excluir(idTarefa) {
    let confirmacao = window.confirm('Realmente Deseja Excluir ?');
    if(confirmacao) {
        let li = document.getElementById(''+idTarefa+'');
        if(li) {
            listaTarefa.removeChild(li)
        }
        else {
            alert('Elemento Não Encontrado');
        }
    }
}

function AbrireFecharEdit() {
    janelaEditar.classList.toggle('on');
    janelaFundoEditar.classList.toggle('on');
}