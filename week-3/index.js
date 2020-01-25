const formProduto = document.querySelector('#form-produto');
const inputProduto = document.querySelector('#input-produto');
const inputValor= document.querySelector('#input-valor');
const tableProdutos = document.querySelector('#tableProdutos');
const btnDeleteAll = document.querySelector('#delete-all');

function handleSubmitForm(event){
    event.preventDefault(); //evita que a pagina recarregue
    const data = getData();
    createDataTable(data);
    cleanForm();
}

function cleanForm(){
    inputProduto.value = "";
    inputValor.value = "";
}

function handleDelete(event){
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

function handleDeleteAll() {
    tableProdutos.lastElementChild.innerHTML = '';
}

function createDataTable(produto) {
   const tableRow = createTableRow();
   const tableDataProduto = createTableData(produto.nome);
   const tableDataValor = createTableData(produto.valor);

   const button = createButton('X', handleDelete);
   const tableButton = createTableData(button);

   tableRow.appendChild(tableDataProduto);
   tableRow.appendChild(tableDataValor);
   tableRow.appendChild(tableButton);

   tableProdutos.children[1].appendChild(tableRow);
}

function createTableData(valor){
    const data = document.createElement('td');

    if(typeof valor === 'string'){
        data.textContent = valor;
    }else{
        data.appendChild(valor);
    }

    return data;
}

function createTableRow() {
    const row = document.createElement('tr');
    return row;
}

function getData(params) {
    const produto = inputProduto.value;
    const valor = inputValor.value;

    const produtoCadastrado = {
        nome: produto,
        valor: valor
    }

    return produtoCadastrado;
}

function createButton(text, callback) {
    const button = document.createElement('button');
    button.textContent = text;

    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.onclick = callback;

    return button;
}

formProduto.addEventListener('submit', handleSubmitForm);
btnDeleteAll.addEventListener('click', handleDeleteAll);