const prompt = require("prompt-sync")({sigint: true});
let sisi = Number(prompt('masukkan sisi: '))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("==================")
console.log("      HASIl       ")
console.log("------------------")

console.log('Luas Persegi : ' + luas + ' cm')
console.log('Keliling Persegi : ' + keliling)
console.log(
    `Luas Persegi\t\t: ${luas.toFixed(2) } cm2
    Keliling Persegi\t: ${keliling.toFixed(2)} cm`
)