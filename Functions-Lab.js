// Triangle of Stars
function drawStars(n){
    let output = ""
    for (let i = 0; i <= n; i++) {
        output += "*".repeat(i) + "\n";
    }

    for (let i = n - 1; i >= 0 ; i--) {
        output += "*".repeat(i) + "\n";
    }

    console.log(output)
}

// drawStars(1)
// drawStars(2)
// drawStars(5)

// Square of Stars
function drawSquare(n = 5){
    let output = ""

    for (let i = 0; i < n; i++) {
        output += "* ".repeat(n) + "\n"        
    }

    console.log(output)    
}

// drawSquare(2)
// drawSquare()

// palindrom
function checkIfPalindrom(str){
    let rev = str.split("").reverse().join("")

    if (str === rev) {
        console.log(true)        
    }
    else {
        console.log(false)        
    }
}

// checkIfPalindrom("tacocat")
// checkIfPalindrom("racecar")

// Day of the Week
function whichDay(day){
    switch (day){
        case "Monday":
            return 1;
        case "Tuesday":
            return 2;
        case "Wednesday":
            return 3;
        case "Thursday":
            return 4; 
        case "Friday":
            return 5;
        case "Saturday":
            return 6;
        case "Sunday":
            return 7;
        default:
            return "error";
    }
}

// console.log(whichDay("Monday"))
// console.log(whichDay("Friday"))
// console.log(whichDay("Frabjoyousday"))

// Functional Calculator
function calc(operand1, operand2, operator){
    switch(operator){
        case "+":
            return Number(operand1) + Number(operand2)
        case "-":
            return Number(operand1) - Number(operand2)
        case "*":
            return Number(operand1) * Number(operand2)
        case "/":
            return Number(operand1) / Number(operand2)
        case "%":
            return Number(operand1) % Number(operand2)
        case "^":
            return Number(operand1) ** Number(operand2)
        default:
            return "wrong operator"
    }
}

// console.log(calc(2, 4, '+'))
// console.log(calc(3, 3, '/'))
// console.log(calc(18, -1, '*'))

// Aggregate Elements
function aggregate(input){
    let sum1 = 0
    let sum2 = 0
    let concat = ''
    for (let i = 0; i < input.length; i++) {
        sum1 += Number(input[i])
        sum2 += 1 / Number(input[i])
        concat += input[i]      
    }

    console.log(sum1)
    console.log(sum2)
    console.log(concat)
}

// aggregate([1, 2, 3])
// aggregate([2, 4, 8, 16])

// Words Uppercase
function goUpperCase(sentence){
    let str = sentence.split(/\W+/).filter(x => x !== "")
    let output = []
    for (let w of str) {
        output.push(w.toUpperCase())
    }

    console.log(output.join(", "));
}

// goUpperCase('Hi, how are you?')
// goUpperCase('hello')
