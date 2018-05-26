'use strict'

// Multiply Numbers
function mult(a, b){
    console.log(a * b)
}

// mult(2, 3)

// Boxes and Bottles
function calcHowManyBoxes(bottles, boxCapacity){
    let boxesQnty = Math.ceil(bottles / boxCapacity);
    console.log(boxesQnty);
}

// calcHowManyBoxes(20, 5);
// calcHowManyBoxes(15, 7);
// calcHowManyBoxes(5, 10);

// Leap Year
function isYearLeap(year){
    let leap = "no";
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        leap = "yes";
    }

    console.log(leap);
}

// isYearLeap(1999);
// isYearLeap(2000);
// isYearLeap(1900);

// Circle Area
function calcCircleArea(radius){
    let area = Math.PI * (radius ** 2);

    console.log(area);
    console.log(area.toFixed(2));
}

// calcCircleArea(5)

// Triangle Area
function calcTriangleAreaHeron(a, b, c){
    let semiperimeter = (a + b + c) / 2
    let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c))
    console.log(area);
}

// calcTriangleAreaHeron(2, 3.5, 4);

// Cone volume and surface
function calcCone(radius, height){
    let volume = (Math.PI * (radius ** 2) * height) / 3;
    let slant = Math.sqrt(height ** 2 + radius ** 2);
    let lateralSurface =    Math.PI * radius * slant;
    let baseSurface = Math.PI * radius ** 2;
    let surface = lateralSurface + baseSurface;

    console.log("volume = " + volume);
    console.log("area = " + surface);
}

// calcCone(3, 5)

// Odd/Even
function oddOrEven(number){
    if (number % 1 != 0) {
        console.log("invalid");
    } else if(number % 2 == 0) {
        console.log("even");
    } else if(Math.abs(number % 2) == 1){
        console.log("odd");
    }
}

// oddOrEven(5.5)

// Fruit or Vegetable
function fruitOrVegetable(fruit){
    switch (fruit) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            console.log("fruit");          
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");            
            break;
    }
}

// fruitOrVegetable("banana");
// fruitOrVegetable("cucumber");
// fruitOrVegetable("pizza");

// Colorful Numbers
function makeColorfulNumbers(count){
    let output = "<ul>\n"
    for (let i = 0; i < count; i++) {
        let color = i % 2 == 0 ? "green" : "blue";
        output += `  <li><span style='color:${color}'>${i + 1}</span></li>\n`;
    }

    output += "</ul>"
    console.log(output);
}

// makeColorfulNumbers(10);

// Chess Board
function makeChessBoard(count){
    let output = '<div class="chessboard">\n';
    let color = "black";
    let firstColorRow = "black";

    for (let i = 0; i < count; i++) {
        output += "  <div>\n";

        for (let j = 0; j < count; j++) {
            if (j == 0) {
                firstColorRow = color;
            }

            output += `    <span class="${color}"></span>\n`; 
            color = color == "black" ? "white" : "black";          
        }

        output += "  </div>\n";   
        
        if (firstColorRow == color) {
            color = color == "black" ? "white" : "black";                      
        }
    }

    output += "  </div>\n";
    console.log(output);    
}

// makeChessBoard(3);
// makeChessBoard(2);
// makeChessBoard(10);

// Binary Logarithm
function calcBinLog(numbers){
    for (let num of numbers) {
        console.log(Math.log2(num));            
    }
}

// calcBinLog(1024);

// Prime Number Checker
function isPrime(number){
    let prime = true;
    
    for (let i = 2; i < Math.sqrt(number); i++) {
        if(number % i == 0){
            prime = false;
            break;
        }        
    }

    console.log(prime);    
}

// isPrime(7);
// isPrime(88);