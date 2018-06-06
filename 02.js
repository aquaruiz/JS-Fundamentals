// Air Pollution
function mapIt(MapOfSofia, forces){
    for (let i = 0; i < MapOfSofia.length; i++) {
        let numbers = MapOfSofia[i].split(" ").map(Number)
        MapOfSofia[i] = numbers
    }

    for (let force of forces) {
        let command = force.split(" ")[0]
        let index = Number(force.split(" ")[1])
        
        switch (command){
            case "breeze":
                for (let i = 0; i < MapOfSofia.length; i++) {
                    for (let j = 0; j < MapOfSofia.length; j++) {
                        if (i == index) {
                            MapOfSofia[i][j] -= 15 
                            
                            if (MapOfSofia[i][j] < 0) {
                                MapOfSofia[i][j] = 0
                            }
                        }                        
                    }
                }
                break
            case "gale":
                for (let i = 0; i < MapOfSofia.length; i++) {
                    for (let j = 0; j < MapOfSofia.length; j++) {
                        if (j === index) {
                            MapOfSofia[i][j] -= 20 

                            if (MapOfSofia[i][j] < 0) {
                                MapOfSofia[i][j] = 0
                            }
                        }                        
                    }
                }
                break
            case "smog":
                for (let i = 0; i < MapOfSofia.length; i++) {
                    for (let j = 0; j < MapOfSofia.length; j++) {
                        MapOfSofia[i][j] += index  
                    }
                }
                break
        }
    } 
    
    let pollutedAreas = []

    for (let i = 0; i < MapOfSofia.length; i++) {
        for (let j = 0; j < MapOfSofia.length; j++) {
            if (MapOfSofia[i][j] >= 50) {
                pollutedAreas.push(`[${i}-${j}]`)
            }                        
        }
    }

    if (pollutedAreas.length > 0) {
        console.log("Polluted areas: " + pollutedAreas.join(", "))
    } else {
        console.log("No polluted areas")
    }
}

// mapIt(["5 7 72 14 4",
//     "41 35 37 27 33",
//     "23 16 27 42 12",
//     "2 20 28 39 14",
//     "16 34 31 10 24"],
//   ["breeze 1", "gale 2", "smog 25"])
// mapIt(["5 7 3 28 32",
//     "41 12 49 30 33",
//     "3 16 20 42 12",
//     "2 20 10 39 14",
//     "7 34 4 27 24",],
// //   ["smog 11", "gale 3", "breeze 1", "smog 2"])
// mapIt(["5 7 2 14 4",
//     "21 14 2 5 3",
//     "3 16 7 42 12",
//     "2 20 8 39 14",
//     "7 34 1 10 24",],
//   ["breeze 1", "gale 2", "smog 35"])

// Build a Wall
function build(initialSectionsHeights){
    for (let i = 0; i < initialSectionsHeights.length; i++) {
        initialSectionsHeights[i] = Number(initialSectionsHeights[i])        
    }
    
    let usedConcretePerDay = []
    let concretePerFoot = 195
    let pesosPerConcrete = 1900
    let counter = 0

    for (let i = 0; i < initialSectionsHeights.length; i++) {
        let concrete = 0

        while(initialSectionsHeights[i] < 30){
            if (isNaN(usedConcretePerDay[counter])) {
                usedConcretePerDay[counter] = 0
            }

            usedConcretePerDay[counter] += concretePerFoot
            initialSectionsHeights[i]++
            counter++
        }  
        
        counter = 0
    }

    console.log(usedConcretePerDay.join(", "))

    let totalAmountConcrete = 0

    for (const concrete of usedConcretePerDay) {
        totalAmountConcrete += concrete
    }

    console.log(totalAmountConcrete * pesosPerConcrete + " pesos")
}

// build([21, 25, 28])
// build([17])
// build([17, 22, 17, 19, 17])

// Bunny Kill
function kill(input){
    map = input.split("\n")
    let bombCoordinates = map.pop().split(" ")

    let changedMap = input.split("\n")
    changedMap.pop()
    
    for (let i = 0; i < changedMap.length; i++) {
        changedMap[i] = changedMap[i].split(" ").map(Number)
    }

    for (let i = 0; i < bombCoordinates.length; i++) {
        bombCoordinates[i] = bombCoordinates[i].split(",").map(Number)        
    }

    for (let i = 0; i < map.length; i++) {
        map[i] = map[i].split(" ").map(Number)      
    }

    let totalDamagesDoneBySnowball = 0
    let killedBunnies = 0
    
    for (let i = 0; i < bombCoordinates.length; i++) {
        let row = bombCoordinates[i][0]
        let col = bombCoordinates[i][1]
        let index = map[row][col]

        if (changedMap[row][col] === "Boom!") {
            continue
        }

        totalDamagesDoneBySnowball += index
        killedBunnies++

        map[row][col] = 0
        changedMap[row][col] = "Boom!"

        if (row > 0 && row < map[row].length - 1) {
            map[row - 1][col] = map[row - 1][col] - index <= 0 ? 0 : map[row - 1][col] - index
            changedMap[row - 1][col] = "Boom!"
            map[row + 1][col] = map[row + 1][col] - index <= 0 ? 0 : map[row + 1][col] - index
            changedMap[row + 1][col] = "Boom!"
        } else if (row === 0){
            map[row + 1][col] = map[row + 1][col] - index <= 0 ? 0 : map[row + 1][col] - index 
            changedMap[row + 1][col] = "Boom!"                   
        } else if (row === map[row].length - 1){
            map[row - 1][col] = map[row - 1][col] - index <= 0 ? 0 : map[row - 1][col] - index  
            changedMap[row - 1][col] = "Boom!"                  
        }

        if (col > 0 && col < map.length - 1){
            map[row][col - 1] = map[row][col - 1] - index <= 0 ? 0 : map[row][col - 1] - index
            changedMap[row][col - 1] = "Boom!"
            map[row][col + 1] = map[row][col + 1] - index <= 0 ? 0 : map[row][col + 1] - index   
            changedMap[row][col + 1] = "Boom!"
        } else if (col === 0){
            map[row][col + 1] = map[row][col + 1] - index <= 0 ? 0 : map[row][col + 1] - index 
            changedMap[row][col + 1] = "Boom!"
        } else if (col === map.length - 1){
            map[row][col - 1] = map[row][col - 1] - index <= 0 ? 0 : map[row][col - 1] - index  
            changedMap[row][col - 1] = "Boom!"
        }

        if (row === 0 && col === 0) {
            map[row + 1][col + 1] = map[row + 1][col + 1] - index <= 0 ? 0 : map[row + 1][col + 1] - index
            changedMap[row + 1][col + 1] = "Boom!"
        } else if (row === map[row].length -1 && col === map.length - 1) {
            map[row - 1][col - 1] = map[row - 1][col - 1] - index <= 0 ? 0 : map[row - 1][col - 1] - index
            changedMap[row - 1][col - 1] = "Boom!"
        } else if (row === 0 && col === map.length - 1) {
            map[row + 1][col - 1] = map[row + 1][col - 1] - index <= 0 ? 0 : map[row + 1][col - 1] - index
            changedMap[row + 1][col - 1] = "Boom!"
        } else if (row === map[row].length -1 && col === 0) {
            map[row - 1][col + 1] = map[row - 1][col + 1] - index <= 0 ? 0 : map[row - 1][col + 1] - index
            changedMap[row - 1][col + 1] = "Boom!"
        } else if (row === 0) {
            map[row + 1][col - 1] = map[row + 1][col - 1] - index <= 0 ? 0 : map[row + 1][col - 1] - index
            changedMap[row + 1][col - 1] = "Boom!"
            map[row + 1][col + 1] = map[row + 1][col + 1] - index <= 0 ? 0 : map[row + 1][col + 1] - index
            changedMap[row + 1][col + 1] = "Boom!"
        } else if (col === map.length - 1){
            map[row + 1][col - 1] = map[row + 1][col - 1] - index <= 0 ? 0 : map[row + 1][col - 1] - index            
            changedMap[row + 1][col - 1] = "Boom!"
            map[row - 1][col - 1] = map[row - 1][col - 1] - index <= 0 ? 0 : map[row - 1][col - 1] - index            
            changedMap[row - 1][col - 1] = "Boom!"
        } else if (row === map[row].length - 1) {
            map[row - 1][col - 1] = map[row - 1][col - 1] - index <= 0 ? 0 : map[row - 1][col - 1] - index            
            changedMap[row - 1][col - 1] = "Boom!"
            map[row - 1][col + 1] = map[row - 1][col + 1] - index <= 0 ? 0 : map[row - 1][col + 1] - index            
            changedMap[row - 1][col + 1] = "Boom!"
        } else if (col === 0) {
            map[row + 1][col + 1] = map[row + 1][col + 1] - index <= 0 ? 0 : map[row + 1][col + 1] - index
            changedMap[row + 1][col + 1] = "Boom!"
            map[row - 1][col + 1] = map[row - 1][col + 1] - index <= 0 ? 0 : map[row - 1][col + 1] - index
            changedMap[row - 1][col + 1] = "Boom!"
        } else {
            map[row + 1][col + 1] = map[row + 1][col + 1] - index <= 0 ? 0 : map[row + 1][col + 1] - index
            changedMap[row + 1][col + 1] = "Boom!"
            map[row - 1][col + 1] = map[row - 1][col + 1] - index <= 0 ? 0 : map[row - 1][col + 1] - index
            changedMap[row - 1][col + 1] = "Boom!"
            map[row - 1][col - 1] = map[row - 1][col - 1] - index <= 0 ? 0 : map[row - 1][col - 1] - index            
            changedMap[row - 1][col - 1] = "Boom!"
            map[row + 1][col - 1] = map[row + 1][col - 1] - index <= 0 ? 0 : map[row + 1][col - 1] - index                
            changedMap[row + 1][col - 1] = "Boom!"
        }
    }
    
    for (let bunny of map) {
        for (const bun of bunny) {
            if (bun > 0) {
                totalDamagesDoneBySnowball += bun
                killedBunnies++
            }    
        }        
    }

    console.log(totalDamagesDoneBySnowball + "\n" + killedBunnies);
}

// kill("5 10 15 20\n10 10 10 10\n10 15 10 10\n10 10 10 10\n2,2 0,1")
// kill("10 10 10\n10 10 10\n10 10 10\n0,0")

// Expedition
function findYourself(map, codingTemplate, overlayCoordinats, startCoordinates){
    for (let coordinates of overlayCoordinats) {
        let startRow = coordinates[0]
        let startCol = coordinates[1]

        for (let i = 0; i < codingTemplate.length; i++) {
            for (let j = 0; j < codingTemplate[i].length; j++) {
                if (codingTemplate[i][j] === 1 && (map.length - 1 >= startRow + i && map[startRow + i].length - 1 >= startCol + j)) {
                    map[startRow + i][startCol + j] = map[startRow + i][startCol + j] === 1 ? 0 : 1
                }                                
            }                        
        }
    }

    let startRow = startCoordinates[0]
    let startCol = startCoordinates[1]
    let row = startRow
    let col = startCol
    let counter = 1
    let path = [0, 0]
    path.push([startRow, startCol])    

    while(row >= 0 && row <= map.length - 1 && col >= 0 && col <= map[map.length - 1].length - 1){
        if(col > 0 && map[row][col - 1] === 0 && (path[path.length - 2][0] !== [row, col - 1][0] || path[path.length - 2][1] !== [row, col - 1][1])){
            col = col - 1
            path.push([row, col])
            counter++
        } else if (row > 0 && map[row - 1][col] === 0 && path[path.length - 2][0] !== [row - 1, col][0] && path[path.length - 2][1] !== [row - 1, col][1]){
            row = row - 1
            path.push([row, col])
            counter++
        } else if (col < map[map.length - 1].length - 1 && map[row][col + 1] === 0 && (path[path.length - 2][0] !== [row, col + 1][0] || path[path.length - 2][1] !== [row, col + 1][1])){
            col = col + 1
            path.push([row, col])
            counter++
        } else if(row < map.length - 1 && map[row + 1][col] === 0 && (path[path.length - 2][0] !== [row + 1, col][0] || path[path.length - 2][1] !== [row + 1, col][1])){
            row = row + 1
            path.push([row, col])
            counter++
        } else{
            break          
        }        
    }

    console.log(counter)
        if (row === 0) {
            console.log("top")
        } else if (row === map.length - 1){
            console.log("Bottom")
        } else if (col === 0) {
            console.log("Left")
        } else if (col === map[row].length - 1){
            console.log("Right")
        } else {
            let quadrant = ""
            if (row <= map[row].length / 2 && col <= map.length / 2) {
                quadrant = 1
            } else if (row >= map[row].length / 2 && col >= map.length / 2){
                quadrant = 4
            } else if (row <= map[row].length / 2 && col >= map.length / 2){
                quadrant = 2
            } else if (row >= map[row].length / 2 && col <= map.length / 2){
                quadrant = 3
            }
            
            console.log("Dead end " + quadrant)  
        }
}

// findYourself([
//     [1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 0, 0, 1],
//     [1, 0, 0, 1, 0, 0, 0, 1],
//     [0, 0, 0, 1, 1, 0, 0, 1],
//     [1, 0, 0, 1, 1, 1, 1, 1],
//     [1, 0, 1, 1, 0, 1, 0, 0]
// ],
// [
//     [0, 1, 1],
//     [0, 1, 0],
//     [1, 1, 0]
// ],
// [
//     [1, 1],
//     [2, 3],
//     [5, 3]
// ],
// [0, 2])
// findYourself([[1, 1, 0, 1],
//     [0, 1, 1, 0],
//     [0, 0, 1, 0],
//     [1, 0, 1, 0]],
//    [[0, 0, 1, 0, 1],
//     [1, 0, 0, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1]],
//    [[0, 0],
//     [2, 1],
//     [1, 0]],
//    [2, 0])

// Jan’s Notation
function calculate(input){
    let numbers = []
    for (let number of input) {
        if (!isNaN(number)) {
            numbers.push(Number(number))
        } else {
            let operator = number
            let result = ""

            if (numbers.length >= 2) {
                let b = numbers.pop()
                let a = numbers.pop()
                
                switch (operator) {
                    case "+":
                        result = a + b                        
                        break
                    case "-":
                        result = a - b
                        break
                    case "*":
                        result = a * b
                        break
                    case "/":
                        result = a / b
                        break
                }

                numbers.push(result)
            } else {
                console.log("Error: not enough operands!")
                return
            }
        }
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(numbers[0]);
    }
}

// calculate([5, 3, 4, '*' , "-"])
// calculate([3, 4, '+'])
// calculate([7, 33, 8, '-'])
// calculate([15, '/'])
// calculate([31, 2, '+', 11, '/'])
// calculate([-1, 1, '+', 101, '*', 18, '+', 3, '/'])

// Rosetta Stone
function decode(input){
    let n = Number(input.shift())
    let decodingMatrix = []

    for (let i = 0; i < n; i++) {
        decodingMatrix.push(input.shift().split(" ").map(Number))        
    }

    let message = input.map(row => row.split(" ").map(Number))
    
    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < message[i].length; j++) {
            message[i][j] = message[i][j] + decodingMatrix[i % decodingMatrix.length][j % decodingMatrix[0].length] 
            // message[i][j] = message[i][j] % 27
        }        
    }

    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < message[i].length; j++) {
            if (message[i][j] % 27 === 0) {
                message[i][j] = " "
            } else {
                message[i][j] = String.fromCharCode(64 + message[i][j] % 27)
            }
            // message[i][j] = message[i][j] + decodingMatrix[i % decodingMatrix.length][j % decodingMatrix[0].length] 
            // message[i][j] = message[i][j] % 27
        }        
    }
    console.log(message.map(row => row.join("")).join(""))
}

// decode([ '2',
// '59 36',
// '82 52',
// '4 18 25 19 8',
// '4 2 8 2 18',
// '23 14 22 0 22',
// '2 17 13 19 20',
// '0 9 0 22 22' ])

// decode([ '2',
// '31 32',
// '74 37',
// '19 0 23 25',
// '22 3 12 17',
// '5 9 23 11',
// '12 18 10 22' ])

// X-Removal
function removeX(letters){
    letters = letters.map(row => row.split(""))
    let input = letters.map(row => row.map(l => l.toLowerCase()))
    
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length - 1; j++) {
            if(input[i][j] === input[i - 1][j - 1]
            && input[i][j] === input[i - 1][j + 1]
            && input[i][j] === input[i + 1][j - 1]
            && input[i][j] === input[i + 1][j + 1]
            ) {
                letters[i - 1][j - 1] = false
                letters[i - 1][j + 1] = false
                letters[i][j] = false
                letters[i + 1][j - 1] = false
                letters[i + 1][j + 1] = false
            }            
        }        
    }    

    console.log(letters.map(row => row.filter(l => l !== false).join("")).join("\n"))
}

// removeX(["abnbjs",
//     "xoBab",
//     "Abmbh",
//     "aabab",
//     "ababvvvv"])
// removeX(["8888888",
//     "08*8*80",
//     "808*888",
//     "0**8*8?"])

// Filtered Matrix
function filter(matrix){
    let sequenceLength = Number(matrix.pop())
    matrix = matrix.map(row => row.split(" ").map(n => Number(n)))
    let original = []
    for (const row of matrix) {
        original.push(row)
    }        
    
    matrix = matrix.map(row => row.join(" ")).join(" ").split(" ")
    
    let counter = 1

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] === matrix[i + 1]) {
            counter++
        } else{ 
            counter = 1
        }
    
        if (counter === sequenceLength) {
            for (let j = counter - 1; j >= 0; j--) {
                matrix[i + 1 - j] = false            
            }
    
            counter = 1
        }
    }

    let output = []
    counter = 0
    
    for (let i = 0; i < original.length; i++) {
        let row = []
        for (let j = 0; j < original[i].length; j++) {
            if (matrix[counter]) {
                row.push(matrix[counter])
            }

            counter++
        }        

        if (row.length > 0) {
            output.push(row)
        } else {
            output.push(["(empty)"])
        }
    }

    // console.log(output);
    
    console.log(output.map(row => row.join(" ")).join("\n"))
}

// filter(["3 3 3 2 5 9 9 9 9 1 2",
//     "1 1 1 1 1 2 5 8 1 1 7",
//     "7 7 1 2 3 5 7 4 4 1 2",
//     "2"])

// filter(["1 2 3 3",
//     "3 5 7 8",
//     "3 2 2 1",
//     "3"])

// filter(["2 1 1 1",
//     "1 1 1", 
//     "3 7 3 3 1",
//     "2"])

// filter(["1 2 3 3 2 1", 
//     "5 2 2 1 1 0",
//     "3 3 1 3 3",
//     "2"])