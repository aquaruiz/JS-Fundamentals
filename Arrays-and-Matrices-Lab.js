// Sum First Last
function sum (arr) {
    arr = arr.map(Number)
    console.log(arr[0] + arr[arr.length - 1])
}

// sum(['20', '30', '40'])
// sum(['5', '10'])

// Even Position Elements
function findEven(arr){
    let output = ""

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            output += arr[i] + " "
        }        
    }

    console.log(output)    
}

// findEven(['20', '30', '40'])
// findEven(['5', '10'])

// Negative / Positive Numbers
function shuffle(arr){
    let output = []

    for (let num of arr) {
        if (num < 0) {
            output.unshift(num)
        } else {
            output.push(num)
        }
    }

    console.log("\n" + output.join("\n"))  
}

// shuffle([7, -2, 8, 9])
// shuffle([3, -2, 0, -1])

//  First and Last K Numbers
function countKNumbers(arr){
    let firstK = []
    let lastK = []
    let k = arr.shift()

    for (let i = 0; i < k; i++) {
        firstK.push(arr[i])        
    }

    for (let j = 0; j < k; j++) {
        lastK.unshift(arr[arr.length - 1 - j])
    }

    console.log(firstK.join(" "))
    console.log(lastK.join(" "))    
}

// countKNumbers([2, 7, 8, 9])
// countKNumbers([3, 6, 7, 8, 9])

// Last K Numbers Sequence
function makeFibonacci(length, k){
    let fRow = [1]

    for (let i = 0; i < length - 1; i++) {
        let sum = 0

        for (let j = 0; j < k; j++) {
            if (!isNaN(fRow[i - j])) {
                sum += fRow[i - j]
            }            
        }
        
        fRow.push(sum)
    }

    console.log(fRow)    
}

// makeFibonacci(6, 3)
// makeFibonacci(8, 2)

// Process Odd Numbers
function odd(arr){
    let output = []

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            output.unshift(arr[i] * 2)
        }        
    }

    console.log(output.join(" "))    
}

// odd([10, 15, 20, 25])
// odd([3, 0, 10, 4, 7, 3])

function doSmallest(arr){
    arr = arr.sort((a , b) => a - b)
    console.log(arr[0] + " " + arr[1])    
}

// doSmallest([30, 15, 50, 5])
// doSmallest([3, 0, 10, 4, 7, 3])

function doBiggest(arr){
    let output = []

    for (let key in arr) {
        arr[key] = arr[key].sort((a , b) => a - b)
        output.push(arr[key][arr[key].length - 1])
    }
    
    console.log(output.sort((a , b) => b - a)[0])    
}

// doBiggest([[20, 50, 10], [8, 33, 145]])
// doBiggest([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])
// doBiggest([[3, 5, 17, 12, 91, 5], [-1, 7, 4, 33, 6, 22], [1, 8, 99, 3, 10, 43]])

// Diagonal Sums
function diaSum(arr){
    let primeDia = 0
    let secondaryDia = 0

    for (let i = 0; i < arr.length; i++) {
        primeDia += arr[i][i] 
        secondaryDia += arr[i][[arr.length - 1 - i]]     
    }

    console.log(primeDia, secondaryDia)    
}

// diaSum([[20, 40], [10, 60]])
// diaSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])

// Equal Neighbors
function findNeighbours(arr){
    let founds = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j + 1 < arr[i].length && arr[i][j] === arr[i][j + 1]) {
                founds++
            }

            if (i + 1 < arr.length && arr[i][j] === arr[i + 1][j]) {
                founds++
            }
        }        
    }

    console.log(founds)
}

// findNeighbours([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']])
// findNeighbours([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']])
findNeighbours([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]])