const prompt = require("prompt-sync")({sigint: true});
let panjang = Number(prompt('Masukkan Panjang: '))
let lebar = Number(prompt('Masukkan Lebar: '))
let luas = panjang * lebar
let keliling = 2 * luas

console.log("---------------")
console.log("      HASIL     ")
console.log("===============")

console.log(
    `Luas Persegi Panjang\t\t: ${luas.toFixed(2)} cm2
    Keliling Persegi Panjang\t: ${keliling.toFixed(2)} cm`
)