const prompt = require('prompt-sync')({sigint: true});

let angka = Number(prompt("Masukkan Angka untuk dikonveri menjadi Romawi: "));
let nilai = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let simbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
let hasil = "";

if(angka <= 0){
    console.log("Masukkan bilangan positif!");
} else {
    for(let i = 0; i < nilai.length; i++){
        while(angka >= nilai[i]){
            hasil += simbol[i];
            angka -= nilai[i];
        }
    }
    
    console.log(`Angka Romawi: ${hasil}`);
}