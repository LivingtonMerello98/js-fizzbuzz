'use strict'

console.log("sono correttamente collegato al doc.html")
// Iterazione da 1 a 100

//bonus1
function fizzBuzz(){
    const container = document.getElementById('container');


    for(let i = 1; i <= 100; i++){
        //creo il div
        const element = document.createElement('div');
        //chiamo le sue classi e aggiungo la classe item
        element.classList.add("item");

        // Sostituizione multipli di 3 con "Fizz"
        if(i % 3 === 0){
            console.log("Fizz");
            //aggiunta parola Fizz al div
            element.textContent += "Fizz ";
        // Sostituzione multipli di 5 con "Buzz"
        }else if(i % 5 === 0){
        // Sostituzione multipli di 3 e 5 con "FizzBuzz"
            console.log("Buzz");
            element.textContent += "Buzz";
        }else if(i % 3 === 0 || i % 5 === 0) {
            console.log("FizzBuzz");
            element.textContent = "FizzBuzz";
        }else{
        // Altrimenti stampare il numero
            console.log(i);
            element.textContent = i;
        }
        container.appendChild(element);
    }

}
//richiamo la funzione
fizzBuzz();



