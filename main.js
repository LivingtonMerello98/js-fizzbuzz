'use strict'

console.log("sono correttamente collegato al doc.html")

//bonus2
const body = document.querySelector('body')
const title = document.getElementById('title');

body.classList.add('bg-color')
body.style.fontFamily='"Roboto", sans-serif'

title.classList.add( 'text-center','fs-32','py-30','text-white');
title.innerHTML="<h1>FizzBuzzDOM</h1>";


//bonus1
function fizzBuzz(){
    const container = document.getElementById('container');


    for(let i = 1; i <= 100; i++){
        //creo il div
        const element = document.createElement('div');
        //chiamo le sue classi e aggiungo la classe item
        element.classList.add("item");

    // Sostituzione multipli di 3 e 5 con "FizzBuzz"
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzBuzz');
        //aggiunta parola Fizz al div
        element.textContent =  'fizzbuzz';
        element.classList.add('fizzBuzz','text-white');
    // Sostituizione multipli di 3 con "Fizz"    
    } else if(i % 3 === 0){
        console.log('Fizz');
        element.textContent =  'Fizz';
        element.classList.add('fizz','text-white');
    // Sostituzione multipli di 5 con "Buzz"
    } else if(i % 5 === 0){
        console.log('Buzz')
        element.textContent =  'Buzz';
        element.classList.add('buzz','text-white');
    } else {
    // Altrimenti stampare il numero
        console.log(i);
        element.textContent = i;
        element.classList.add('number');
    }
        container.appendChild(element)
    }

}
//richiamo la funzione
fizzBuzz();



