const prompt=require('prompt-sync')({sigint: true})
let r = Number(prompt("Masukkan nilai Jari-jari: "))
let t = Number(prompt("Masukkan nilai Tinggi: "))
let s = Math.sqrt(r^2 + t^2)

let v = 1/3 * 22/7 * r^2 * t
let L = 22/7 * r * (r + s)

console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,")
console.log("         H A S I L         ")
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,")

console.log(
`Volume Kerucut\t\t: ${v.toFixed(2)}  cm2
Luas Permukaan Kerucut\t: ${L.toFixed(2)}  cm`
)