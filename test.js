let arr = []
let rows = 5
let cols = 5
let element = 0

for (let i = 0; i < rows; i++) {
    let row = ("0").repeat(cols).split("").map(Number)
    arr.push(row)        
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (i === rows - 1) {
            console.log(i, cols - 1 - j);
            arr[i][cols - 1 - j] = ++element                                                      
        }
    }        
}
console.log(arr.join("\n"));
