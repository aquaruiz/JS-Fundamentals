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