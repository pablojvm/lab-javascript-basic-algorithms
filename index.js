// Iteration 1: Names and Input
let hacker1= "Pablo"
let hacker2= "Mackenzie"
console.log(`The driver´s name is ${hacker1}`)
console.log(`The navigator´s name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let hacker1Capital = ""

for (let i= 0 ; i < hacker1.length ; i++){
    hacker1Capital += hacker1[i].toUpperCase() + " "
}
console.log(hacker1Capital)

let hacker1Reverse= ""
for (let i= hacker1.length -1 ; i >= 0 ; i--){
    hacker1Reverse += hacker1[i]
}
console.log(hacker1Reverse)

if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name goes first.`)
} else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
} 
