const prompt = require("prompt-sync")({sigint: true});

let angka = Number(prompt("Masukkan Angka: "));

if(isNaN(angka)){
    console.log("Bukan Angka")
} else if (angka % 2 == 0){
    console.log("Genap");
} else {
    console.log("Ganjil");
}