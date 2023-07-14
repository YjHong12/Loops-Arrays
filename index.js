// Only Odds
// Create an array for the input
// Create a loop to check each array 
// If the array divided by 2 doesn't have a remainder of 0, it is an odd number
// Return the odd numbers
let input = [2, 4, 6, 8, 11, 20, 15, 22]
let odd = []

for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 !== 0) {
        odd.push(input[i]);
    }
}
console.log(odd)

// -------------------------------------------------------------------------------
// Vowel vs Consonant 
// Create an array for the input, a counter for vowels and a counter for consonants
// Create a loop to check each array if it's a vowel
// Else it's a consonant
// Count the number of consonants and vowels and return the value
let input2 = "hello"
let vowels = 0
let consonant = 0

for (let x = 0; x < input2.length; x++) {
if (input2[x] === "a" || input2[x] === "e" || input2[x] === "i" || input2[x] === "o" || input2[x] === "u") {
    vowels++
}
else {
    consonant++
}
}
console.log(input2 + " has " + consonant + " consonants and " + vowels + " vowels")

// -------------------------------------------------------------------------------
// Reverse Array
// Create an array for the input and the reverse
// Create a for loop to creaete a new array
// Return new array
let input3 = [1, 2, 3]
let reverse = []

for(let n = 0; n < input3.length; n++) {
        reverse.unshift(input3[n]);
}
console.log(reverse)

// -------------------------------------------------------------------------------
// FizzBuzz 
// Set a variable that starts at 1 and adds 1 until it reaches 100
// Create a loop to check each number if it's divisible by 3 and 5
// Then check if the number is divisible by 3 or 5
// Print Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for multiples of both
// Else print the number
for(let y = 1; y <= 100; y++) {
    if(y % 3 !== 0 && y % 5 !== 0) {
        console.log(y)
    }
    else if(y % 3 === 0 && y % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if(y % 3 === 0) {
        console.log("Fizz")
    }
    else if(y % 5 === 0) {
        console.log("Buzz")
    }
}