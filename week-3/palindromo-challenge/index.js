const inputPalindromo = document.querySelector("#palindromoValue");
const btnDeleteAll = document.querySelector("#delete-all");
const tablePalindromos = document.querySelector('#table-palindromos');
const KEY_ENTER = 13;

inputPalindromo.addEventListener("keypress", handleSubmitForm);
btnDeleteAll.addEventListener('click', handleDeleteAll);

function handleSubmitForm(event){
    const isEnter = event.keyCode === KEY_ENTER;

    if(isEnter){
        const value = inputPalindromo.value;
        if(value){
            const palindromo = {
                valor: value,
                isPalindrome: checkPalindrome(value)
            }

            createDataTable(palindromo);
        }

        cleanInput();
    }
}

function handleDeleteAll() {
    tablePalindromos.lastElementChild.innerHTML = '';
}

function checkPalindrome(value){
    const valueInvertido = value.split('').reverse().join('');
    return value === valueInvertido;
}

function createDataTable(object){
    const tableRow = createTableRow();
    const tableDataPalindromo = createTableData(object.valor);
    const tableDataValor = createTableDataWithAttribute(object.isPalindrome);

    tableRow.appendChild(tableDataPalindromo);
    tableRow.appendChild(tableDataValor);

    tablePalindromos.children[1].appendChild(tableRow);
}

function createTableRow() {
    const row = document.createElement('tr');
    return row;
}

function createTableData(valor){
    const data = document.createElement('td');
    data.textContent = valor;
    return data;
}

function createTableDataWithAttribute(valor){
    const data = document.createElement('td');

    let result = "negativo"

    if(valor){
        result = "positivo"
    }

    data.textContent = valor ? 'sim' : 'não';

    data.setAttribute("data-verificado", result);
    return data;
}

function cleanInput(){
    inputPalindromo.value = "";
}