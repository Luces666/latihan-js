const prompt = require('prompt-sync')({sigint: true});

let bilangan = Number(prompt("Masukkan Bilangan: "));

if(bilangan > 0){
    console.log("Bilangan tersebut Positif");
} else if(bilangan < 0){
    console.log("Bilangan tersebut negatif");
} else {
    console.log("Nol");
}