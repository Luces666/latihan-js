const prompt=require('prompt-sync')({sigint: true})
let La = Number(prompt("Masukkan nilai Luas alas: "))
let t = Number(prompt("Masukkan nilai Tinggi: "))
let Ka = Number(prompt("Masukkan nilai Keliling alas: "))

let Volume = La * t
let Luas = 2 * La * Ka * t

console.log("---------------")
console.log("     HASIL     ")
console.log("---------------")

console.log(
`Volume Prisma Segitiga\t\t: ${Volume.toFixed(2)} cm2
Luas Permukaan Prisma Segitiga\t: ${Luas.toFixed(2)} cm`
)