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
    
}