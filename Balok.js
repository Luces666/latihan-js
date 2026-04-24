const prompt=require('prompt-sync')({sigint: true})
let p = Number(prompt("Masukan nilai Panjang: "))
let l = Number(prompt("Masukan nilai Lebar: "))
let t = Number(prompt("Masukan nilai Tinggi: "))

let Volume = p * l * t
let Luas = 2 * (p * l + p * t + l * t)

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("         H A S I L         ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")

console.log(
`Volume Balok\t\t: ${Volume.toFixed(3)}  cm3
Luas Permukaan Balok\t: ${Luas.toFixed(3)}  cm2`
)