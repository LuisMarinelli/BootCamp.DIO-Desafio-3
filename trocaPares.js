function trocaPares(array) {
    //verifica existencia de um array null/undefined/false
    if (!array) return -1;
    //verifica existencia de um array
    if (!array.length) return -1;

    for (i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Já existe um Zero!");
        } else if (array[i] % 2 === 0) {
            //realizando interpolação `...`
            console.log(`Sustituindo ${array[i]} por 0...`);
            array[i] = 0;
        } 
    }

    return array;
}

let array = [1, 3, 4, 6, 80, 33, 23, 0];

console.log(trocaPares());