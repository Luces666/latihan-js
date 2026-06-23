const prompt = require('prompt-sync')({sigint: true});

let angka = Number(prompt("Masukkan Angka (1-10): "));
let hasil = "";
switch(angka){
    case 1:
        hasil = ("I");
        break;
    case 2:
        hasil = ("II");
        break;
    case 3:
        hasil = ("III");
        break;
    case 4:
        hasil = ("IV");
        break;
    case 5:
        hasil = ("V");
        break
    case 6:
        hasil = ("VI");
        break;
    case 7:
        hasil = ("VII");
        break;
    case 8:
        hasil = ("VIII");
        break;
    case 9:
        hasil = ("IX");
        break;
    case 10:
        hasil = ("X");
        break;
    default:
        console.log("Angka harus antara 1-10");
}

console.log(`Angka Romawi: ${hasil}`)