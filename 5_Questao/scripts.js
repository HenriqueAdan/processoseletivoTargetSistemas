function inverterString(str) {
    let novaString = '';
    for(let i = str.lenght - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString
}

let minhaString = "Olá pessoal";
let stringInvertida = inverterString("Pessoal olá");
console.log("String verdadeira: " , minhaString);
console.log("String invertida: " , stringInvertida);