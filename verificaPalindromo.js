//Solução 1
//Verifica Palíndromo simples (sem espaços ou acentuações)
function verificar(string) {
    //verifica existencia de um texto - não precisa do Else
    if (!string) return "Não existe nenhuma String";

    //separa os textos, faz um reverso e junta com o método Join para comparar
    return string.split("").reverse().join("") === string;
}

//Solução 2
function verificar2(string) {
    //verifica existencia de um texto - não precisa do Else
    if (!string) return "Não existe nenhuma String.";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }

    return true;
}

console.log(verificar2("amo"));
