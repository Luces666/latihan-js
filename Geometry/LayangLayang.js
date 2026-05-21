const prompt=require('prompt-sync')({sigint: true})
let d1 = Number(prompt("Masukkan nilai Diagonal1: "))
let d2 = Number(prompt("Masukkan nilai Diagonal2: "))
let p = Number(prompt("Masukkan nilai p: "))
let q = Number(prompt("Masukkan nilai q: "))

let luas = 0.5 * d1 *d2
let keliling = 2 * (p + q)

console.log("///////////////")
console.log("     HASIL     ")
console.log("///////////////")

console.log(
    `Luas LayangLayang\t\t: ${luas.toFixed(2)} cm2
    Keliling LayangLayang\t: ${keliling.toFixed(2)} cm`
)

