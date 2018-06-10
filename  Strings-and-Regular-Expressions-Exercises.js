// Split a String with a Delimiter
function splitString(string, delimiter){
    console.log(string.split(delimiter).join("\n"))    
}

// splitString("One-Two-Three-Four-Five", "-")

// Repeat a String N Times
function repeatN(string, times) {
    console.log(string.repeat(times))    
}

// repeatN("repeat", 5)

//  Starts With
function isStartingWith(text, word) {
    if (text.indexOf(word) === 0) {
        console.log(true)
    } else {
        console.log(false)        
    }
}

// isStartingWith("How have you been?", "how")
// isStartingWith("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta")

// Ends With
function isEndingWith(text, word) {
    text = text.split("").reverse().join("")
    word = word.split("").reverse().join("")

    if (text.indexOf(word) === 0) {
        console.log(true)
    } else {
        console.log(false)        
    }
}

// isEndingWith("This sentence ends with fun?", "fun?")

// Capitalize the Words
function capitalizeIt(text){
    text = text.toLowerCase()
    text = text.split("")
    text[0] = text[0].toUpperCase()

    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            text[i + 1] = text[i + 1].toUpperCase()
        }
    }

    console.log(text.join(""))    
}

// capitalizeIt("Capitalize these words")
// capitalizeIt("Was that Easy? tRY thIs onE for SiZe!")

// Capture the Numbers
function findAllNumbers(text){
    let numRegex = /\d+/g
    let output = []

    for (const row of text) {
        let matches = row.match(numRegex)
        if (matches) {
            for (const match of matches) {
                output.push(match)
            }
        }
    }
    
    console.log(output.join(" "))
}

// findAllNumbers(["The300",
//     "What is that?",
//     "I think it’s the 3rd movie.",
//     "Lets watch it at 22:45"])
// findAllNumbers(["123a456",
//     "789b987",
//     "654c321",
//     "0"])
// findAllNumbers(["Let’s go11!!!11!",
//     "Okey!1!"])

// Find Variable Names in Sentences
function findVariables(input){
    let variabkeRegex = /\b(?:_)([a-zA-Z0-9]+)\b/g
    let variable = variabkeRegex.exec(input)
    let output = []
    while(variable){
        output.push(variable[1])
        
        variable = variabkeRegex.exec(input)        
    }

    console.log(output.join(","))    
}

// findVariables("The _id and _age variables are both integers.")
// findVariables("Calculate the _area of the _perfectRectangle object.")
// findVariables("__invalidVariable _evenMoreInvalidVariable_ _validVariable")

// Word Occurences
function findWord(text, word){
    let wordRegex = new RegExp("\\b" + word + "\\b", "gi")
    let counter = 0
    
    let occurences = text.match(wordRegex)

    if (occurences) {
        counter = occurences.length
    }

    console.log(counter)    
}

// findWord("The waterfall was so high, that the child couldn’t see its peak.", "the")
// findWord("How do you plan on achieving that? How? How can you even think of that?", "how")
// findWord("There was one. Therefore I bought it. I wouldn’t buy it otherwise.", "there")

// Extract Links
function findLinks(input){
    let linkRegex = /(www)\.([a-z0-9-]+)\.([a-z]+(\.[a-z]+)*)/gi

    for (const row of input) {
        let links = row.match(linkRegex)
        
        if (links) {
            console.log(links.join("\n"))            
        }
    }
}

// findLinks(["Join WebStars now for free, at www.web-stars.com",
//     "You can also support our partners:",
//     "Internet - www.internet.com",
//     "WebSpiders - www.webspiders101.com",
//     "Sentinel - www.sentinel.-ko "])
// findLinks(["Need information about cheap hotels in London?",
//     "You can check us at www.london-hotels.co.uk!",
//     "We provide the best services in London.",
//     "Here are some reviews in some blogs:",
//     '"London Hotels are awesome!" - www.indigo.bloggers.com',
//     '"I am very satisfied with their services" - ww.ivan.bg',
//     '"Best Hotel Services!" - www.rebel21.sedecrem.moc '])

// Secret Data
function findSecretData(data){
    let nameRegex = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)/g
    let phoneRegex = /(\+[0-9-]{10})(?= |\t|$)/g
    let idRegex = /(![a-zA-Z0-9]+)(?= |\t|$)/g
    let secretBaseRegex = /(_[a-zA-Z0-9]+)(?= |\t|$)/g

    for (let rowIndex in data) {
        data[rowIndex]  = data[rowIndex].replace(nameRegex, m => '|'.repeat(m.length))
        data[rowIndex]  = data[rowIndex].replace(phoneRegex, m => '|'.repeat(m.length))  
        data[rowIndex]  = data[rowIndex].replace(idRegex, m => '|'.repeat(m.length))    
        data[rowIndex]  = data[rowIndex].replace(secretBaseRegex, m => '|'.repeat(m.length))                
        
        console.log(data[rowIndex])        
    }
}

// findSecretData(["Agent *Ivankov was in the room when it all happened *Ivankov",
//    "The person in the room was heavily armed.",
//     "Agent *Ivankov had to act quick in order.",
//     "He picked up his phone and called some unknown number. ",
//     "I think it was +555-49-796",
//     "I can't really remember...",
//     'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
//     "Then after that he disappeared from my sight.",
//     "As if he vanished in the shadows.",
//     "A moment, shorter than a second, later, I saw the person flying off the top floor.",
//     "I really don't know what happened there.",
//     "This is all I saw, that night.",
//     "I cannot explain it myself..."])