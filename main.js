'use strict'

console.log("sono correttamente collegato al doc.html")
// Iterazione da 1 a 100
for(let i = 1; i <= 100; i++){
    // Sostituizione multipli di 3 con "Fizz"
    if(i % 3 === 0){
        console.log("Fizz");
    // Sostituzione multipli di 5 con "Buzz"
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
// Sostituzione multipli di 5 con "Buzz"
// Sostituzione multipli di 3 e 5 con "FizzBuzz"
// Altrimenti stampare il numero