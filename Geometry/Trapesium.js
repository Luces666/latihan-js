const prompt=require('prompt-sync')({sigint: true})
let a = Number(prompt("Masukkan sisi A: "))
let b = Number(prompt("Masukkan sisi B: "))
let t = Number(prompt("Masukkan nilai Tinggi: "))
let c = Number(prompt("Masukkan sisi C: "))
let d = Number(prompt("Masukkan sisi D: "))

let luas = 0.5 * (a + b) * t
let keliling = a + b + c + d

console.log("---------------")
console.log("     HASIL     ")
console.log("---------------")

console.log(
    `Luas Trapesium\t\t: ${luas.toFixed(2)} cm2
    Keliling Trapesium\t: ${keliling.toFixed(2)} cm`
)