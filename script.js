let contador = 0;
let input = document.getElementById('input-tarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('area-lista');

function adicionarItem() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<section id="area_${contador}" class="display__class">
        <div id="item_${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            <p class="paragrafo__tarefa">${valorInput}</p>
        </div>
        </div>
        <div class="item-botao">
            <button onmouseover="trocarIcone(this)" onmouseout="reverterIcone(this)" onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
        </section>`;

        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}

btnAdd.addEventListener('click', adicionarItem);

input.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        adicionarItem();
    }
});

function deletar(id) {
    let tarefa = document.getElementById('area_' + id);
    tarefa.remove();
};

function trocarIcone(botao) {
    const icone = botao.querySelector('.mdi');
    icone.classList.remove('mdi-delete');
    icone.classList.add('mdi-delete-empty');
};

function reverterIcone(botao) {
    const icone = botao.querySelector('.mdi');
    icone.classList.remove('mdi-delete-empty');
    icone.classList.add('mdi-delete');
};

function marcarTarefa(id) {
    let item = document.getElementById('item_' + id);
    let itemBaixo = document.getElementById('area_' + id);
    let classe = item.getAttribute('class');

    if (classe == 'item') {
        item.classList.add('clicado');

        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        itemBaixo.parentNode.appendChild(itemBaixo);
    } else {
        item.classList.remove('clicado');

        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
};

