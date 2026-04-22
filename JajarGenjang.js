const prompt=require('prompt-sync')({sigint: true})
let alas = Number(prompt("Masukkan nilai Alas: "))
let tinggi = Number(prompt("Masukkan nilai Tinggi: "))
let a = Number(prompt("Masukkan nilai A: "))
let b = Number(prompt("Masukkan nilai B: "))

let luas = alas * tinggi
let keliling = 2 * (a + b)

console.log("---------------")
console.log("      HASIL     ")
console.log("===============")

console.log(
    `Luas Jajar Genjang\t\t: ${luas.toFixed(2)} cm2
    Keliling Jajar Genjang\t: ${keliling.toFixed(2)} cm`
)