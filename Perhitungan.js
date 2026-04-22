const prompt=require('prompt-sync')({sigint: true})
let x = Number(prompt("Masukkan nilai x: "))
let y = Number(prompt("Masukkan nilai y: "))
let z = Number(prompt("Masukkan nilai z: "))
let k = x + y - z
let j = (x * y) - (z + x)

console.log("---------------")
console.log("      HASIL     ")
console.log("===============")

console.log(
    `K\t\t: ${luas.toFixed(2)}
    J\t: ${keliling.toFixed(2)}`
)