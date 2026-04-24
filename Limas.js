const prompt=require('prompt-sync')({sigint: true})
let La = Number(prompt("Masukkan nilai Luas alas: "))
let t = Number(prompt("msukkan nilai Tinggi: "))
let Ls = Number(prompt("Masukkan nilai Luas selubung: "))

let volume = 1/3 * La * t
let Luas = La + Ls

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("         H A S I L         ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")

console.log(
`Volume Limas\t\t: ${volume.toFixed(3)}  cm3
Luas Permukaan Limas\t: ${Luas.toFixed(3)}  cm2`
)