// Arithmephile
function calc(input){
    input = input.map(Number)
    let product = 1
    let biggestProduct = Number.NEGATIVE_INFINITY
    
    for (let i = 0; i < input.length; i++) {
        if(input[i] >= 0 && input[i] <= 9){
            
            for (let j = 1; j <= input[i]; j++) {
                if (input[i + j] !== undefined) {
                product *= input[i + j]                                   
                }
            }
            
            if (product > biggestProduct) {
                biggestProduct = product
            }

            product = 1
        }        
    }

    console.log(biggestProduct)
}

// calc([10, 20, 2, 30, 44, 3, 56, 20, 24])
// calc([10, 20, 3, 56, 20, 4, 24, 30, 44, 3, 56])
// calc([10, 20, 2, 30, 44, 4, 56, 20, 24])

// calc("100\n200\n2\n3\n2\n3\n2\n1\n1")

// Bitcoin "Mining"
function mine(findings){
    // 1 Bitcoin = 11949.16 lv.
    // 1 g of gold = 67.51 lv.
    let totalSum = 0
    let mined = findings.map(Number)
    let bitCoinsBought = 0;
    let firstDay = 0
    
    for (let i = 0; i < mined.length; i++) {
        if ((i + 1) % 3 === 0) {
            totalSum += 0.7 * mined[i] 
        } else {
            totalSum += mined[i] 
        }
        let budget = totalSum * 67.51       
        
        if (budget / 11949.16 >= 1) {
            if (firstDay === 0) {
                firstDay = i + 1
            }

            totalSum -= Math.floor(budget / 11949.16) *  11949.16 / 67.51
            bitCoinsBought += Math.floor(budget / 11949.16)
        }
    }

    console.log(`Bought bitcoins: ${bitCoinsBought}`)

    if (firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)        
    }

    console.log(`Left money: ${(totalSum * 67.51).toFixed(2)} lv.`)  
}

// mine([100, 200, 300])
// mine([50, 100])
// mine([3124.15, 504.212, 2511.124])

// Daggers and Swords
function classify(knifes){
    // 1 or 6 etc. (n*5 + 1) 'blade'
    // 2 or 7 etc. (n*5 + 2) 'quite a blade'
    // 3 or 8 etc. (n*5 + 3) 'pants-scraper'
    // 4 or 9 etc. (n*5 + 4) 'frog-butcher'
    // 5 or 10 etc. (n*5 + 5) '*rap-poker'
    // longer than 40cm, it is a sword. Otherwise it is a dagger.

    knifes = knifes.filter(x => x !== "")

    let output = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n'
    for (let knife of knifes) {
        let blade = Math.floor(Number(knife))

        if (blade <= 10) {
            continue
        }
        let swordDagger = ""
        let type = ""

        if (blade > 40){
            swordDagger = "sword"
        } else {
            swordDagger = "dagger"
        }

        let calc = blade % 5 
        
        switch(calc){
            case 0:
                type = "*rap-poker"
                break
            case 1:
                type = "blade"
                break
            case 2:
                type = "quite a blade"
                break
            case 3:
                type = "pants-scraper"
                break
            case 4:
                type = "frog-butcher" 
                break
        }

        output += `<tr><td>${blade}</td><td>${swordDagger}</td><td>${type}</td></tr>\n`
    }

    output += `</tbody>\n</table>`
    console.log(output) 
}

// classify(["17.8", "19.4", "13", "55.8", "126.96541651", "3"])

// Medenka Wars
function solve(input) {
    const singleMedenkaDmg = 60

    let naskorDamageDone = 0
    let vitkorDamageDone = 0

    let naskorPreviousAttackDmg = ""
    let naskorStrike = 0

    let vitkorPreviousAttackDmg = ""
    let vitkorStrike = 0

    for (let line of input) {
        let inputInfo = line.split(/\s+/)
        let medenkaCount = +inputInfo[0]
        let medenkaType = inputInfo[1]

        let medenkaDmg = medenkaCount * singleMedenkaDmg        
        if (medenkaType === 'white') {
            if (medenkaDmg === vitkorPreviousAttackDmg) {
                vitkorStrike++

                if (vitkorStrike == 2) {
                    medenkaDmg *= 2.75
                    vitkorStrike = 0
                }
            } else {
                vitkorPreviousAttackDmg = medenkaDmg
                vitkorStrike = 0                
                vitkorStrike++
            }

            vitkorDamageDone += medenkaDmg
        } else {
            if (medenkaDmg === naskorPreviousAttackDmg) {
                naskorStrike++

                if (naskorStrike == 5) {
                    medenkaDmg *= 4.5
                    naskorStrike = 0
                }
            } else {
                naskorPreviousAttackDmg = medenkaDmg
                naskorStrike = 0                
                naskorStrike++
            }

            naskorDamageDone += medenkaDmg
        }
    }

    let winner = vitkorDamageDone > naskorDamageDone ? 'Vitkor' : 'Naskor'
    let damage = vitkorDamageDone > naskorDamageDone ? vitkorDamageDone : naskorDamageDone

    console.log('Winner - ' + winner)
    console.log('Damage - ' + damage)
}

// solve([
//     '2 dark medenkas',
//     '1 white medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
//     '15 white medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas'
// ])


// Spice Must Flow
function calcSpice(startingYield){
    startingYield = Number(startingYield)
    let totalAmountSpiceFromSource = 0
    let totalCountDayOperating = 0
    // each next day -10
    // if startingYield < 100 - stop 
    // crewConsumption + 26

    let crewConsumption = 26 // per day

    while (startingYield >= 100) {
        totalCountDayOperating++
        totalAmountSpiceFromSource += startingYield
        totalAmountSpiceFromSource -= crewConsumption    
        startingYield -= 10        
        if (totalAmountSpiceFromSource < 0) {
            totalAmountSpiceFromSource = 0
        }
    }

    totalAmountSpiceFromSource -= crewConsumption
    if (totalAmountSpiceFromSource < 0) {
        totalAmountSpiceFromSource = 0
    }

    console.log(totalCountDayOperating)    
    console.log(totalAmountSpiceFromSource)
}

// calcSpice(111)
// calcSpice(450)
// calcSpice(200)

// The Hungry Programmer
function feedIt(meals, commands){
    let mealsSnatched = 0
    
    for (let i = 0; i < commands.length; i++) {
        command = commands[i].split(" ")[0]
        
        switch (command) {
            case "Serve":
                let lastPortion = meals.pop()
                console.log(`${lastPortion} served!`)
                break
            case "Eat":
                let firstPortion = meals.shift()
                mealsSnatched++
                console.log(`${firstPortion} eaten`)
                break
            case "Add":
                let newPortion = commands[i].split(" ")[1]
                meals.unshift(newPortion)
                break
            case "Consume":
                let startIndex = Number(commands[i].split(" ")[1])
                let endIndex = Number(commands[i].split(" ")[2])
                let length = endIndex + 1 - startIndex 
                mealsSnatched += length                               
                meals.splice(startIndex, length)
                console.log("Burp!")
                break
            case "Shift":
                let firstIndex = commands[i].split(" ")[1]
                let firstElement = meals[firstIndex]
                let secondIndex = commands[i].split(" ")[2]                
                meals.splice(firstIndex, 1, meals[secondIndex])
                meals.splice(secondIndex, 1, firstElement)
                break
            case "End":
                i = commands.length
                break
            default:
                break;
        }

            if (meals.length <= 0) {
                console.log("The food is gone");
                i = commands.length            
            }
        
    }

    if (meals.length > 0) {
        console.log("Meals left: " + meals.join(", "));        
    }

    console.log("Meals eaten: " + mealsSnatched);
}

// feedIt(['chicken', 'steak', 'eggs'], ['Serve', 'Eat',  'End', 'Consume 0 1'])
// feedIt(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'], ['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End'])
// feedIt(['carrots', 'apple', 'beet'], ['Consume 0 2', 'End',])

// Exam Results
function sortStudents(scores){
    let courseForAverafe = scores.pop()
    let neededPointsFor6 = 80
    let counter = 0
    let totalScore = 0

    for (let studentScores of scores) {
        let data = studentScores.split(" ")
        let studentName = data[0]
        let studentCourse = data[1]
        let studentPoints = Number(data[2])
        let studentBonus = Number(data[3])

        if (studentCourse === courseForAverafe) {
            counter++
            totalScore += studentPoints
        }

        let examPoints = Math.round((0.2 * studentPoints + studentBonus) * 100) / 100 
        let grade = ((examPoints / neededPointsFor6) * 4) + 2

        if (grade > 6) {
            grade = 6
        }

        if (studentPoints < 100) {
            console.log(`${studentName} failed at "${studentCourse}"`)
        } else{
            console.log(`${studentName}: Exam – "${studentCourse}"; Points – ${examPoints}; Grade – ${grade.toFixed(2)}`);
        }
    }  
    
    console.log(`"${courseForAverafe}" average points -> ${Math.round((totalScore / counter)     * 100) / 100}`)
}

// sortStudents(["Pesho C#-Advanced 100 3",
//     "Gosho Java-Basics 157 3",
//     "Tosho HTML&CSS 317 12",
//     "Minka C#-Advanced 57 15",
//     "Stanka C#-Advanced 157 15",
//     "Kircho C#-Advanced 300 0",
//     "Niki C#-Advanced 400 10",
//     "C#-Advanced"])

// The Pyramid of King Djoser
function build(base, height){
    let rowSquares = base ** 2
    let totalStones = 0
    let totalMarbles = 0
    let totalLapisLazuri = 0

    let totalSteps = 1

    while (rowSquares > 4) {
        let decoration = 2 * (2 * base) - 4
        if (totalSteps % 5 === 0) {
            totalLapisLazuri += decoration * height
        } else{
            totalMarbles += decoration * height
        }

        totalStones += (rowSquares - decoration) * height
        
        base -= 2
        rowSquares = (base ** 2)
        totalSteps++
    }

    let totalGold = rowSquares * height
    let totalHeight = Math.floor(totalSteps * height)

    console.log("Stone required: " + Math.ceil(totalStones))
    console.log("Marble required: " + Math.ceil(totalMarbles))
    console.log("Lapis Lazuli required: " + Math.ceil(totalLapisLazuri))
    console.log("Gold required: " + Math.ceil(totalGold))
    console.log("Final pyramid height: " + totalHeight);
}

// build(11, 0.75)
// build(12, 1)
// build(23, 0.5)