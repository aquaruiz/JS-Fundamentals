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
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);           
        }        
    }
}

// printOddNumToN(5);
// printOddNumToN(4);
// printOddNumToN(7);

// Triangle of Dollars
function printDollarTriangle(n){
    for (let i = 1; i <= n; i++) {
        console.log(`${"$".repeat(i)}`);        
    }
}

// printDollarTriangle(3);
// printDollarTriangle(2);
// printDollarTriangle(4);

// Movie Prices
function giveMoviePrice([movie, day]) {
    let price = "error"
    if (movie.toLowerCase() === "the godfather") {
        switch (day.toLowerCase()) {
            case "monday":
                price = 12;
                break;
            case "tuesday":
                price = 10;
                break;
               case "wednesday":
                price = 15;
                break;
            case "thursday":
                price = 12.50;
                break;
            case "friday":
                price = 15;
                break;
            case "saturday":
                price = 25;
                break;
            case "sunday":
                price = 30;
                break;
            default:
                price = "error";
                break;
        }
    } else if (movie.toLowerCase() === "schindler's list") {
        switch (day.toLowerCase()) {
            case "monday":
                price = 8.5;
                break;
            case "tuesday":
                price = 8.5;
                break;
               case "wednesday":
                price = 8.5;
                break;
            case "thursday":
                price = 8.5;
                break;
            case "friday":
                price = 8.5;
                break;
            case "saturday":
                price = 15;
                break;
            case "sunday":
                price = 15;
                break;
            default:
                price = "error";
                break;
        }
    } else if (movie.toLowerCase() === "casablanca") {
        switch (day.toLowerCase()) {
            case "monday":
                price = 8;
                break;
            case "tuesday":
                price = 8;
                break;
               case "wednesday":
                price = 8;
                break;
            case "thursday":
                price = 8;
                break;
            case "friday":
                price = 8;
                break;
            case "saturday":
                price = 10;
                break;
            case "sunday":
                price = 10;
                break;
            default:
                price = "error";
                break;
        }
    } else if (movie.toLowerCase() === "the wizard of oz") {
        switch (day.toLowerCase()) {
            case "monday":
                price = 10;
                break;
            case "tuesday":
                price = 10;
                break;
               case "wednesday":
                price = 10;
                break;
            case "thursday":
                price = 10;
                break;
            case "friday":
                price = 10;
                break;
            case "saturday":
                price = 15;
                break;
            case "sunday":
                price = 15;
                break;
            default:
                price = "error";
                break;
        }
    }
    
    console.log(price);    
}

// // giveMoviePrice(["The Godfather", "Friday"])
// giveMoviePrice(["casablanca", "sunday"])
// giveMoviePrice(["Schindler's LIST", "monday"])
// giveMoviePrice(["SoftUni", "Nineday"])

// Quadratic Equation
function solveQuadEq(a, b, c){
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        if (root1 > root2) {
            console.log(root2 + "\n" + root1);  
        } else {
            console.log(root1 + "\n" + root2);   
        }
    } else if (discriminant === 0){
        let root1 = (-b) / (2 * a);
        console.log(root1);        
    } else {
        console.log("No");        
    }
}

// solveQuadEq(6, 11, -35);
// solveQuadEq(1, -12, 36);
// solveQuadEq(5, 2, 1);

// Multiplication Table
function createMultiplicationTable(n){
    let output = '<table border="1">\n'
    
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            output += "<tr><th>x</th>"
        }
        else {
            output += `<tr><th>${i}</th>`
        }

        for (let j = 1; j <= n; j++) {
            if (i === 0) {
                output += `<th>${j}</th>`                
            }
            else {
                output += `<td>${i*j}</td>`
            }
            
        }

        output += '</tr>\n'        
    }

    output += "</table>\n"
    console.log(output)
}

// createMultiplicationTable(5)

// Figure of 4 Squares
function drawFigure(n){
    n = n % 2 == 0 ? n - 1 : n
    let output = "+" + ("-".repeat(n-2)) + "+" + ("-".repeat(n-2)) + "+\n"
    
    for (let i = 0; i < Math.floor((n - 3 ) / 2); i++) {
        output += "|" + (" ".repeat(n-2)) + "|" + (" ".repeat(n-2)) + "|\n"      
    }

    output += "+" + ("-".repeat(n-2)) + "+" + ("-".repeat(n-2)) + "+\n"

    for (let i = 0; i < Math.floor((n - 3 ) / 2); i++) {
        output += "|" + (" ".repeat(n-2)) + "|" + (" ".repeat(n-2)) + "|\n"        
    }

    output += "+" + ("-".repeat(n-2)) + "+" + ("-".repeat(n-2)) + "+\n"

    console.log(output)    
}

// drawFigure(4)
// drawFigure(5)
// drawFigure(6)
// drawFigure(7)

function monthlyCalendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    month--;
    let today = new Date(year, month, day);
    let dayOfWeek = new Date(year, month, 1).getDay();
    let html = '<table>\n';
    html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    let previousMonthDays = 0;
    html += '<tr>';
    let daysOfLastMonth = 0;

    if(dayOfWeek != 0) {
        let daysInLastMonth = new Date(year, month, 0).getDate();
        daysOfLastMonth = dayOfWeek;

        for(let i = 1; i<=daysOfLastMonth; i++) {
            html += `<td class="prev-month">${daysInLastMonth - daysOfLastMonth + i}</td>`;
            previousMonthDays ++;
        }
    }

    let currentMonthDays = 1;

    for(let i = previousMonthDays; i< 7; i++) {
        if(currentMonthDays == day) {
            html += `<td class="today">${currentMonthDays}</td>`;
        } else {
            html += `<td>${currentMonthDays}</td>`;
        }

        currentMonthDays++;
    }

    html += '</tr>\n';

    let counter = 0;
    
    for(let i = currentMonthDays; i<= new Date(year, month+1, 0).getDate(); i++) {
        if(counter %7 == 0) {
            html += '<tr>';
        }
        if(currentMonthDays == day) {
            html += `<td class="today">${currentMonthDays}</td>`;
        } else {
            html += `<td>${currentMonthDays}</td>`;
        }
        counter++;
        if(counter %7 == 0) {
            html += '</tr>\n';
        }

        currentMonthDays++;
    }

    let nextMonthDays = 1;

    for(let i = (daysOfLastMonth + currentMonthDays - 1) % 7; i < 7; i++) {
        if(i == 0) {
            html += "</table>\n";
            console.log(html);
            return;
        }
        html += `<td class="next-month">${nextMonthDays}</td>`;
        nextMonthDays++;
    }

    html += "</tr>\n";
    html += "</table>\n";

    console.log(html);
}