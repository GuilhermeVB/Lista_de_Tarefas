let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone" onclick="marcarTarefa(${contador})">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome" onclick="marcarTarefa(${contador})">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        // ZERAR CAMPO DE TEXTO
        input.value = '';
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id); 
    var classe = item.getAttribute('class');

    if (classe == 'item') {
        item.classList.add('clicado');

        var icone = document.getElementById(`icone_${id}`);

        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById(`icone_${id}`);

        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener('keyup', function(event) {
    // TECLA DE ATALHO PARA CONFIRMAÇÃO DE TAREFA (ENTER)
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});