const prompt = require('prompt-sync')({sigint: true});

let bilanganb = Number(prompt("Masukkan Bilangan Bulat(1-4): "));

switch(bilanganb){
    case 1:
        console.log("satu");
        break;
    case 2:
        console.log("dua");
        break;
    case 3:
        console.log("tiga");
        break;
    case 4:
        console.log("empat");
        break;
    default:
        console.log("Angka yang dimasukkan salah");
}