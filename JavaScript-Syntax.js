// Sum 3 numbers
function sum3nums(num1, num2, num3){
    let sum = num1 + num2 + num3
    console.log(sum)
}

// sum3nums(1, 2, 3)
// sum3nums(1.5, 1.5, -1)
// sum3nums(2, 3, 4)

// Sum and Vat
function calcvat(prices){
    let sum = 0;
    let vat = 0;
    let total = 0;

    for (let i = 0; i < prices.length; i++){
        sum += prices[i]
        vat += 0.2 * prices[i]
        total += 1.2 * prices[i]
    }

    console.log(sum)
    console.log(vat)
    console.log(total)
}

// calcvat([1.20, 2.60, 3.50])

// Letter Occurrences in String
function findOccurrences(text, letter){
    let counter = 0;

    for (let i = 0; i < text.length; i++){
        if(letter == text[i]){
            counter++;
        }
    }

    console.log(counter);
}

// findOccurrences('hello', 'l')

//  Filter by Age
function ageFilter(lookUpAge, name, age, name2, age2){
    let nameAge = [];
    
    nameAge[0] = {"name" : name, "age" : age};
    nameAge[1] = {"name" : name2, "age" : age2};

    for (let i = 0; i < nameAge.length; i++) {
        if(nameAge[i]["age"] >= lookUpAge){
            console.log(nameAge[i]);
        }  
    }
}

// ageFilter(12, 'Ivan', 15, 'Asen', 9)

// String of Numbers 1..N
function printNums(num){
    n = parseInt(num);
    output = '';

    for (let index = 1; index <= num; index++) {
        output += String(index);
    }

    console.log(output);
}

// printNums('11')

// Figure Area

function figureOutArea(width, height, width2, height2){
    let area1 = width * height;
    let area2 = 0; 
}