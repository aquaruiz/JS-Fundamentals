// Inside Volume
function solve(input){
    function isInsideVolume(x, y, z){
        let boxX1 = 10;
        let boxX2 = 50;

        let boxy1 = 20;
        let boxy2 = 80;

        let boxz1 = 15;
        let boxz2 = 50;
        
        if (x >= boxX1 && x <= boxX2
        && y >= boxy1 && y <= boxy2
        && z >= boxz1 && z <= boxz2) {
            true;
        } else {
            false;
        }
    }

    for (let i = 0; i < input.length; i+=3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if(isInsideVolume(x, y, z)){
            console.log("inside");
        } else {
            console.log("outside");
        }
    }
}

// solve([8, 20, 22])
// solve([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43])

// Road Radar
function isWithinSpeedLimit([speed, area]){
    let speedLimits = {
        ["motorway"] : 130,
        ["interstate"] : 90,
        ["city"] : 50,
        ["residential"] : 20
    };

    function checkSpeed(speed, area){        
        if (speed > speedLimits[area]){
            let speedDif = speed - speedLimits[area]
            
            if(speedDif <= 20){
                return "speeding";
            } else if(speedDif <= 40){
                return "excessive speeding";
            } else {
                return "reckless driving";
            }
        }

        return ""
    }

    let message = checkSpeed(speed, area);
    console.log(message);
}

// isWithinSpeedLimit([40, "city"]);
// isWithinSpeedLimit([21, "residential"]);
// isWithinSpeedLimit([120, "interstate"]);
// isWithinSpeedLimit([200, "motorway"]);

// Template Format
function printOutQuizData(quizData){
    function makeXML(q, a){
        L `  <question>\n    ${q}\n  </question>\n  <answer>\n    ${a}\n  </answer>`;
    }

    console.log('<?xml version="1.0" encoding="UTF-8"?>\n<quiz>');
    
    for (let i = 0; i < quizData.length; i+=2) {
        console.log(makeXML(quizData[i], quizData[i + 1]));
    }

    console.log('</quiz>');
    
}

// printOutQuizData(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
// printOutQuizData(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);

// Cooking by Numbers
function cookThatNum ([num, op1, op2, op3, op4, op5]){
    function cookIt(num, operator){
        switch (operator){
            case "chop": return num / 2;
            case "dice": return Math.sqrt(num);
            case "spice": return num + 1;
            case "bake": return num * 3;
            case "fillet": return 0.8 * num;
        }
    }
    
    num = cookIt(num, op1);
    console.log(num);
    num = cookIt(num, op2);
    console.log(num);
    num = cookIt(num, op3);
    console.log(num);
    num = cookIt(num, op4);
    console.log(num);
    num = cookIt(num, op5);
    console.log(num);    
}

// cookThatNum([32, "chop", "chop", "chop", "chop", "chop"]);
// cookThatNum([9, "dice", "spice", "chop", "bake", "fillet"]);

// Modify Average
function modifyAverage(num){
    function sumDigits(number){
        let sum = 0;
        let num = number.toString();

        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);            
        }

        return sum/num.length;
    }

    let sumDigs = sumDigits(num);

    while(sumDigs <= 5){
        num += "9";
        sumDigs = sumDigits(num);
    }
    
    console.log(num);
}

// modifyAverage(101);
// modifyAverage(5835);

// Validity Checker
function checkValidity([x1, y1, x2, y2]){
    function calcDistance([x1, y1, x2, y2]){
        let distanceX = Math.abs(x1 - x2);
        let distanceY = Math.abs(y1 - y2);
        let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        return distance;
    }

    if(calcDistance([x1, y1, 0, 0]) % 1 === 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);        
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);                
    }

    if(calcDistance([x2, y2, 0, 0]) % 1 === 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);        
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);                
    }

    if(calcDistance([x1, y1, x2, y2]) % 1 === 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);        
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);                
    }
}

// checkValidity([3, 0, 0, 4])
// checkValidity([2, 1, 1, 1])

// Treasure Locator
function findTreause(coordinates){
    for (let i = 0; i < coordinates.length; i++) {
        let col = coordinates[i++];
        let row = coordinates[i];

        let location = (row >= 0 && row <= 1 && col >= 8 && col <= 9) ? 'Tokelau' 
            : (row >= 1 && row <= 3 && col >= 1 && col <= 3) ? 'Tuvalu'
            : (row >= 3 && row <= 6 && col >= 5 && col <= 7) ? 'Samoa'
            : (row >= 6 && row <= 8 && col >= 0 && col <= 2) ? 'Tonga'
            : (row >= 7 && row <= 8 && col >= 4 && col <= 9) ? 'Cook'
            : 'On the bottom of the ocean';

        console.log(location);
    }
}

// findTreause([4, 2, 1.5, 6.5, 1, 3]);
// findTreause(["-10", "0"]);

// Trip Length
function calcShortestDistance([x1, y1, x2, y2, x3, y3]){
    function calcDistance(x1, y1, x2, y2){
        let distanceX = Math.abs(x1 - x2);
        let distanceY = Math.abs(y1 - y2);
        let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        return distance;
    }

    let distanceBtw123 = calcDistance(x1, y1, x2, y2) + calcDistance(x2, y2, x3, y3);
    let distanceBtw132 = calcDistance(x1, y1, x3, y3) + calcDistance(x3, y3, x2, y2);
    let distanceBtw213 =  calcDistance(x1, y1, x2, y2) + calcDistance(x1, y1, x3, y3);

    let minDistance = Math.min(distanceBtw123, distanceBtw132, distanceBtw213);

    if (minDistance === distanceBtw123) {
        console.log(`1->2->3: ${minDistance}`);
    } else if(minDistance === distanceBtw132){
        console.log(`1->3->2: ${minDistance}`);        
    } else if( minDistance === distanceBtw213){
        console.log(`2->1->3: ${minDistance}`);        
    } 
}

// Radio Crystals
function makeRadioCrystal([thickness, raw]){
    let cut = (x) => x / 4;
    let lap = (x) => 0.8 * x;
    let grind = (x) => x - 20;
    let etch = (x) => x - 2;
    let xRay = (x) => x + 1;
    let transportAndWash = (x) => Math.floor(x);

    let count = 0;

    console.log(`Processing chunk ${raw} microns`);
    
    while(cut(raw) >= thickness){
        raw = cut(raw);
        count++;
    }

    if (count > 0) {
        console.log(`Cut x${count}`);
        raw = transportAndWash(raw);
        console.log("Transporting and washing"); 
        count = 0;      
    }    
    
    while(lap(raw) >= thickness){
        raw = lap(raw);
        count++;        
    }

    if (count > 0) {
        console.log(`Lap x${count}`);
        raw = transportAndWash(raw);
        console.log("Transporting and washing"); 
        count = 0;      
    }    

    while(grind(raw) >= thickness){
        raw = grind(raw);
        count++;               
    }

    if (count > 0) {
        console.log(`Grind x${count}`);
        raw = transportAndWash(raw);
        console.log("Transporting and washing"); 
        count = 0;      
    }   
    
    while(etch(raw) >= thickness){
        raw = etch(raw);
        count++;        
    }

    if (raw > thickness) {
        raw = etch(raw);
        count++; 
    }

    if (count > 0) {
        console.log(`Etch x${count}`);
        raw = transportAndWash(raw);
        console.log("Transporting and washing"); 
    }    
    
    if(raw === thickness){
        console.log(`Finished crystal ${thickness} microns`);
    } else {
        raw = xRay(raw);
        console.log("X-ray x1");
        console.log(`Finished crystal ${thickness} microns`);
    }    
}

// makeRadioCrystal([1375, 50000])

// DNA Helix
function printDnaHelix(length){
    let dna = "ATCGTTAGGG";
    let current = 0;
    for (let i = 0; i < length; i++) {
        if (current === 10) {
            current = 0;
        }

        if (i % 4 === 0) {
            console.log(`**${dna[current++]}${dna[current++]}**`);
        } else if (i % 4 === 1 || i % 4 === 3){
            console.log(`*${dna[current++]}--${dna[current++]}*`);            
        } else {
            console.log(`${dna[current++]}----${dna[current++]}`);            
        }
    }
}

// printDnaHelix(4);
// console.log();
// printDnaHelix(10);
