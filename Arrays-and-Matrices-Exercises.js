// Print an Array with a given Delimiter
function print(arr){
    let delimiter = arr.pop()
    console.log(arr.join(delimiter))    
}

// print(["One", "Two", "Three", "Four", "Five", "-"])

// Print every N-th Element from an Array
function printN(arr){
    let n = arr.pop()

    for (let i = 0; i < arr.length; i++) {
        if (i % n === 0 ) {
            console.log(arr[i])
        }        
    }
}

// printN([5, 20, 31, 4, 20, 2])

// Add and Remove Elements
function addRemove(arr){
    let output = []
    let counter = 0

    for (let command of arr) {
        counter++

        if (command === "add") {
            output.push(counter)
        } else if (command === "remove") {
            output.pop()
        }
    }

    if (output.length > 0) {
        console.log(output.join("\n")) 
    } else {
        console.log("Empty")        
    }
}

// addRemove(["add", "add", "add", "add"])
// addRemove(["add", "add", "remove", "add", "add"])
// addRemove(["remove", "remove", "remove"])

// Rotate Array
function rotate(arr){
    let n = arr.pop() % arr.length

    for (let i = 0; i < n; i++) {
        arr.unshift(arr[arr.length - 1]) 
        arr.pop()       
    }

    console.log(arr.join(" "))    
}

// rotate([1, 2, 3, 4, 2])
// rotate(["Banana", "Orange", "Coconut", "Apple", 15])

// Extract Increasing Subsequence from Array
function extr(arr){
    let output = []
    output.push(Number(arr[0]))

    for (let i = 1; i < arr.length; i++) {
            if (Number(arr[i]) >= output[output.length - 1]) {
            output.push(Number(arr[i]))
        }        
    }

    console.log(output.join("\n"))
}

// extr([1, 3, 8, 4, 10, 12, 3, 2, 24])
// extr([1, 2, 3, 4])
// extr([20, 3, 2, 15, 6, 1])

// Sort Array
function sortArr(arr){
    function sortBy2Criteria (a, b){
        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return - 1
        } else {
            if (a[0] > b[0]) {
                return 1
            } else{
                return -1
            }
        }
    }

    arr = arr.sort((a, b) => sortBy2Criteria(a, b))
    console.log(arr.join("\n"))    
}

// sortArr(["alpha", "beta", "gamma"])
// sortArr(["Isacc", "Theodor", "Jack", "Harrison", "George"])
// sortArr(["test", "Deny", "omen", "Default"])

// Magic Matrices
function checkMatrix(arr){
    let rowSum = 0
    let colSum = 0
    let bool = true

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0) {
                rowSum += arr[i][j]
            }            

            if (j === 0) {
                colSum += arr[i][j]
            }
        }        
    }

    let currentRow = 0
    let currentCol = 0

    for (let n = 1; n < arr.length; n++) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (i === n) {
                    currentRow += arr[i][j]
                }            
            }        
        }
        
        if (currentRow !== rowSum) {
            bool = false
            break
        }

        currentRow = 0
    }
   
    for (let n = 1; n < arr[0].length; n++) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (j === n) {
                    currentCol += arr[i][j]
                }            
            }        
        }
        
        if (currentCol !== colSum) {
            bool = false
            break
        }

        currentCol = 0
    }

    console.log(bool)
}

// checkMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
// checkMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
// checkMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]])

// Spiral Matrix
function generateSpiralMatrix(row, col) {
    let rows = row
    let cols = col
 
    let matrix = []

    for (let row = 0; row < rows; row++) {
        matrix[row] = []

        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0
        }
    }
 
    let topLimit = 0
    let bottomLimit = rows - 1
    let leftLimit = 0
    let rightLimit = cols - 1
 
    let index = 1
    let direction = "forward"

    while (topLimit <= bottomLimit && leftLimit <= rightLimit) {
        switch (direction) {
            case "forward":
                for (let col = leftLimit; col <= rightLimit; col++) {
                    matrix[topLimit][col] = index++
                }

                topLimit++
                direction = "downward"
                break;
            case "downward":
                for (let row = topLimit; row <= bottomLimit; row++) {
                    matrix[row][rightLimit] = index++
                }

                rightLimit--
                direction = "backward"
                break
            case "backward":
                for (let col = rightLimit; col >= leftLimit; col--) {
                    matrix[bottomLimit][col] = index++
                }
                
                bottomLimit--
                direction = "upward"
                break;
            case "upward":
                for (let row = bottomLimit; row >= topLimit; row--) {
                    matrix[row][leftLimit] = index++
                }

                leftLimit++
                direction = "forward"
                break
        }
    }
 
    console.log(matrix.map(r => r.join(' ')).join('\n'))
}

// generateSpiralMatrix(5, 5)

// Diagonal Attack
function attack(input){
    let arr =[]

    for (let i = 0; i < input.length; i++) {
        arr.push(input[i].split(" "))        
    }

    function diaSum(arr){
        let primeDia = 0
        let secondaryDia = 0
    
        for (let i = 0; i < arr.length; i++) {
            primeDia += Number(arr[i][i]) 
            secondaryDia += Number(arr[i][[arr.length - 1 - i]])     
        }
    
        return [primeDia, secondaryDia]    
    }

    let primeDia = diaSum(arr)[0]
    let secondaryDia = diaSum(arr)[1]

    if (primeDia === secondaryDia) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (i !== j && i !== arr.length - 1 - j) {
                    arr[i][j] = primeDia
                }                
            }            
        }        
    }

    console.log(arr.map(r => r.join(" ")).join("\n"))    
}

// attack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'])
// attack(['1 1 1', '1 1 1', '1 1 0'])

// Orbit
function goOrbit([width, height, x, y]){
    let matrix = []

    for (let row = 0; row < width; row++) {
        matrix[row] = []

        for (let col = 0; col < height; col++) {
            matrix[row][col] = 0
        }
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(x - row), Math.abs(y - col)) + 1
        }
    }

    console.log(matrix.map(r => r.join(" ")).join("\n"));
}

// goOrbit([4, 3, 3, 2])