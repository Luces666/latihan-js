const prompt=require('prompt-sync')({sigint: true})
let d1 = Number(prompt("Masukkan nilai Diagonal1: "))
let d2 = Number(prompt("Masukkan nilai Diagonal2: "))
let s = Number(prompt("Masukkan sisi: "))

let luas = 0.5 * d1 * d2
let keliling = 4 * s
let sisi = keliling / 4 //Jika kelilingnya diketahui

console.log("===============")
console.log("     HASIL     ")
console.log("===============")

console.log(
    `Luas BelahKetupat\t\t: ${luas.toFixed(2)} cm2
    Keliling BelahKetupat\t: ${keliling.toFixed(2)} cm
    Sisi BelahKetupat\t: ${sisi.toFixed(2)} cm`
)
