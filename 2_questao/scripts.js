function Fibonacci(n) {
    let a = 0;
    let b = 1;

    while(a <= n) {
        if(a == n) {
            return true;
        }
         let temp = a + b;
            a = b;
            b = temp;
    }
        return false;
}

const numero = 13; // Número pre definido
if(Fibonacci(numero)) {
    console.log(`o Número ${numero} pertence a sequência Fibonacci`);
} else {
    console.log(`O número ${numero} não pertece a sequência Fibonacci`);
}    