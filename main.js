'use strict'

console.log("sono correttamente collegato al doc.html")
// Iterazione da 1 a 100
for(let i = 0; i <= 100; i++){
    // Sostituizione multipli di 3 con "Fizz"
    if(i % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}
// Sostituizione multipli di 3 con "Fizz"
// Sostituzione multipli di 5 con "Buzz"
// Sostituzione multipli di 3 e 5 con "FizzBuzz"
// Altrimenti stampare il numero