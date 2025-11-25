document.querySelector('#AddButton').addEventListener('click', function () {

    // 1. Pegar o texto digitado
    let texto = document.querySelector('#Input').value;

    // Evitar adicionar tarefa vazia
    if (texto.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // 2. Criar um novo <li>
    let novoItem = document.createElement('li');

    // 3. Criar checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // 4. Criar um span para guardar o texto
    let span = document.createElement('span');
    span.innerText = texto;

    // 5. Quando clicar no checkbox → riscar texto
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });

    // 6. Colocar checkbox e texto dentro do <li>
    novoItem.appendChild(checkbox);
    novoItem.appendChild(span);

    // 7. Adicionar o <li> na UL
    document.querySelector('ul').appendChild(novoItem);

    // 8. Limpar campo de texto
    document.querySelector('#Input').value = "";
});


function RemoverTarefa() {
    let lista = document.querySelector('ul');
    lista.removeChild(lista.lastElementChild);
}

document.querySelector('#RemoveButton').addEventListener('click', RemoverTarefa);

document.querySelector('#ClearButton').addEventListener('click', function LimparTarefas() {
    document.querySelector('ul').innerHTML = '';
});
