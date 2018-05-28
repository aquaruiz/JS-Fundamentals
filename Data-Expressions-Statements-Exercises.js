'use strict'

// Hello, JavaScript!
function sayHello(yourName){
    console.log(`Hello, ${yourName}, I am JavaScript!`);
}

// sayHello("Petya");

// Area and Perimeter of Rectangle
function calcAreaAndPerimeter(a, b){
    let area = a * b;
    let perimeter = 2 * (a + b);

    console.log(area);
    console.log(perimeter);
}

// calcAreaAndPerimeter(2, 2);

// Distance over Time
function calcDistanceOverTime([speed1, speed2, time]){
    time = time / 60 / 60;
    let distance1 = speed1 * time;
    let distance2 = speed2 * time;
    
    let distance = Math.abs(distance1 - distance2) * 1000;

    console.log(distance);
}

// calcDistanceOverTime([0, 60, 3600]);
// calcDistanceOverTime([11, 10, 120]);
// calcDistanceOverTime([5, -5, 40]);

// Distance in 3D
function calcDistanceIn3D([x1, y1, z1, x2, y2, z2]){
    let distanceX = Math.pow(x1 - x2, 2);
    let distanceY = Math.pow(y1 - y2, 2);
    let distanceZ = Math.pow(z1 - z2, 2);

    let distance = Math.sqrt(distanceX + distanceY + distanceZ);

    console.log(distance);
}

// calcDistanceIn3D([1, 1, 0, 5, 4, 0]);
// calcDistanceIn3D([3.5, 0, 1, 0, 2, -1]);

// Grads to Degrees
function transferGradToDegree(grad){
    let input = grad % 400;
    let wholePart = 360;
    let degree = input / 400 * wholePart;

    if (degree < 0){
        degree = 360 + degree;
    }

    console.log(degree);
}

// transferGradToDegree(100);
// transferGradToDegree(400);
// transferGradToDegree(850);
// transferGradToDegree(-50);

// Compound Interest
function calcCompoundInterest([princippalSum, interestRate, compoundingFrequencyMonths, overallLenghtYears]){
    interestRate = interestRate / 100;
    compoundingFrequencyMonths = 12 / compoundingFrequencyMonths;
    let compoundInterest = princippalSum * (1 + interestRate / compoundingFrequencyMonths) ** (compoundingFrequencyMonths * overallLenghtYears);

    console.log(compoundInterest.toFixed(2));    
}

// calcCompoundInterest([1500, 4.3, 3, 6]);
// calcCompoundInterest([100000, 5, 12, 25]);

// Rounding
function round([number, precision]){
    if (precision > 15) {
        precision = 15;
    }

    let output = Number(number).toFixed(precision);
    output = parseFloat(output);  
    console.log(output);
}

// round([3.1415926535897932384626433832795, 2]);
// round([10.5, 3]);

// Imperial Units
function calcImperialUnit(input){
    // 12 inches = 1 foot
    let feet = input / 12|0;
    let inches = input % 12;
    console.log(`${feet}'-${inches}"`);
}

// calcImperialUnit(36);
// calcImperialUnit(55);
// calcImperialUnit(11);

// Now playing
function nowIsPlaying(item){
    let track = item[0];
    let artist = item[1];
    let duration = item[2];

    let output = `Now Playing: ${artist} - ${track} [${duration}]`;

    console.log(output);
}

// nowIsPlaying(['Number One', 'Nelly', '4:09']);

// Compose Tag
function composeHTMLTag([fileLocation, altText]){
    let output = `<img src="${fileLocation}" alt="${altText}">`;
    return output;
}

// console.log(composeHTMLTag(['smiley.gif', 'Smiley Face']));

// Binary to Decimal
function binToDec(bin){
    let dec = parseInt(bin, 2);
    return dec;
}

// console.log(binToDec(1001));
// console.log(binToDec(11110000));

// Assign Properties
function assignProperties([key1, value1, key2, value2, key3, value3]){
    let obj = {};
    obj = {
        [key1]: value1,
        [key2]: value2,
        [key3]: value3
    };
    return obj;
}

// console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));

// Last Month
function calcLastMonthDays([day, month, year]){
    let date = new Date(year, month - 1, 0)
    return date.getDate()
}

// console.log(calcLastMonthDays([17, 3, 2002]));
// console.log(calcLastMonthDays([13, 12, 2004]));

// Biggest of 3 Numbers
function giveBiggestNum([num1, num2, num3]){
    return Math.max(Math.max(num1, num2), num3);
}

// console.log(giveBiggestNum([5, -2, 7]));
// console.log(giveBiggestNum([130, 5, 99]));
// console.log(giveBiggestNum([43, 43.2, 43.1]));
// console.log(giveBiggestNum([5, 5, 5]));
// console.log(giveBiggestNum([-10, -20, -30]));

// Point in Rectangle
function isPointInsideRectangle([x, y, xMin, xMax, yMin, yMax]){
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

// isPointInsideRectangle([8, -1, 2, 12, -3, 3]);
// isPointInsideRectangle([12.5, -1, 2, 12, -3, 3]);

// Odd Numbers 1 to N
function printOddNumToN(n){
    
}