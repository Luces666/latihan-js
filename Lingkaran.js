const prompt=require('prompt-sync')({sigint: true})
let r = Number(prompt("Masukkan nilai Jari-jari: "))

let luas = 22/7 * r^2
let keliling = 2 * 3.14 * r

console.log("|||||||||||||||")
console.log("     HASIL     ")
console.log("|||||||||||||||")

console.log(
    `Luas Lingkaran\t\t: ${luas.toFixed(2)} cm2
    Keliling Lingkaran\t: ${keliling.toFixed(2)} cm`
)
