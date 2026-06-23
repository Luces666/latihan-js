const prompt = require('prompt-sync')({sigint: true});

let bilangan = Number(prompt("Masukkan Bilangan Bulat Positif Kelipatan 4: "));

if(bilangan <=0){
    console.log("Inputan harus bilangan bulat positif");
} else if(bilangan % 4 == 0){
    console.log(`${bilangan} adalah kelipatan 4`);
} else {
    console.log(`${bilangan} bukan kelipatan 4`);
}