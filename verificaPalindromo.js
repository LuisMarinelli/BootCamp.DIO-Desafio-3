//Verifica Palíndromo simples (sem espaços ou acentuações)
function verificar(string){
    //verifica existencia de um texto - não precisa do Else
    if(!string) return;

    //separa os textos, faz um reverso e junta com o método Join para comparar
    return string.split("").reverse().join("") === string;
}

console.log(verificar("amor"));