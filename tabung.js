const prompt=require('prompt-sync')({sigint: true})
let r = Number(prompt("Masukkan nilai Jari-jari: "))
let t = Number(prompt("Masukkan nilai Tinggi: "))

let v = 22/7 * r^2 * t
let lp = 2 * 22/7 * r * (r + t)

console.log("...........................")
console.log("         H A S I L         ")
console.log("...........................")

console.log(
`Volume Tabung\t\t: ${v.toFixed(3)}  cm3
Luas Permukaan Tabung\t: ${lp.toFixed(3)}  cm2`
)