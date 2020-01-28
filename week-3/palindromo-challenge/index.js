const inputPalindromo = document.querySelector("#palindromoValue");
const btnDeleteAll = document.querySelector("#delete-all");
const KEY_ENTER = 13;

inputPalindromo.addEventListener("keypress", handleSubmitForm);

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

function checkPalindrome(value){
    const valueInvertido = value.split('').reverse().join('');
    return value === valueInvertido;
}

function createDataTable(object){
console.log(object);
}

function cleanInput(){
    inputPalindromo.value = "";
}