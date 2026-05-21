const prompt = require("prompt-sync")({ sigint: true })
let s = Number(prompt("Masukkan sisi : "))

let volume = s^3
let luas = 6 * s^2

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("         H A S I L         ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")

console.log(
`Volume Kubus\t\t: ${volume.toFixed(3)}  cm3
Luas Permukaan Kubus\t: ${luas.toFixed(3)}  cm2`
)