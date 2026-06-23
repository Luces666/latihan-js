const prompt = require('prompt-sync')({sigint: true});

let angka = Number(prompt("Masukkan Angka (1-10): "));

switch(angka){
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
        break;
    case 10:
        console.log("X");
        break;
    default:
        console.log("Angka harus antara 1-10");
}