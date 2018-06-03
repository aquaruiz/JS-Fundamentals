// Print Letters
function spellIt(text){
    for (let i = 0; i < text.length; i++) {
        console.log("str[" + i + "] -> " + text[i])                
    }
}

// spellIt('Hello, World!')

//  Concatenate and Reverse
function  concatenateReverse(textArr){
    let output = textArr.join("").split("").reverse()
    console.log(output.join(""))    
}

// concatenateReverse(['I', 'am', 'student'])
// concatenateReverse(['race', 'car', 1])

// Count Occurences
function countWords(word, text){
    let counter = 0
    let index = text.indexOf(word)
    while (index > -1) {
        index = text.indexOf(word, index + 1)        
        counter++
   }

   console.log(counter)   
}

// countWords('the', 'The quick brown fox jumps over the lay dog.')
// countWords('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')

// Extract Text
function extract(text){
    let output = []
    let index = text.indexOf("(")
    let index2 = text.indexOf(")", index)

    while (index > -1 && index2 > -1) {
        let start = index
        let end = index2
        output.push(text.substring(start + 1, end))
        index = text.indexOf("(", index2)
        index2 = text.indexOf(")", index)
    }

    console.log(output.join(", "));
}

// extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')

// Aggregate Table
function sumIncome(input){
    let towns = []
    let sum = 0

    for (let row of input) {
        let townIncome = row.split("|").filter(x => x !== "").map(e => e.trim())
        towns.push(townIncome[0])
        sum += Number(townIncome[1])
    }

    console.log(towns.join(", "))
    console.log(sum)    
}

sumIncome(['| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275'])