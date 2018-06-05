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

// sumIncome(['| Sofia           | 300',
// '| Veliko Tarnovo  | 500',
// '| Yambol          | 275'])

// Restaurant Bill
function giveBill(order){
    let bill = ""
    let totalPrice = 0

    for (let i = 0; i < order.length; i += 2) {
        if (i === 0) {
            bill += "You purchased " + order[i]
        } else {
            bill += ", " + order[i]
        }

        totalPrice +=Number(order[i+1])
    }

    bill += " for a total sum of " + totalPrice
    console.log(bill)   
}

// giveBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])
// giveBill(['Cola', '1.35', 'Pancakes', '2.88'])

// Usernames
function makeUsename(emails){
    let usernames = []
    for (const email of emails) {
        let username = ""
        
        let indexAt = email.indexOf("@")
        username += email.substring(0, indexAt) + "."
        username += email[indexAt + 1]  
        
        let idnexDot = email.indexOf(".", indexAt)

        while (idnexDot > -1) {
            username += email[idnexDot + 1]  
            idnexDot = email.indexOf(".", idnexDot + 1)                  
        }

        usernames.push(username)
    }

    console.log(usernames.join(", "))    
}

// makeUsename(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])

// Censorship
function censorIt(text, bans){
    for (let ban of bans) {
        let indexBan = text.indexOf(ban)

        while (indexBan > -1) {
           text = text.replace(ban, "-".repeat(ban.length))
            indexBan = text.indexOf(ban, indexBan + 1)       
        }
    }

    console.log(text)    
}

// censorIt('roses are red, violets are blue', [', violets are', 'red'])

// Escaping
function htmlEscape(text){
    let output = "<ul>\n"

    let escapes = {
        "<":"&lt;",
        ">":"&gt;",        
        "\"":"&quot;"
    }

    for (let index in text) {
        if (text[index].indexOf("&") !== -1) {
            text[index] = text[index].split("")
            
            for (let i = 0; i < text[index].length; i++) {
                if (text[index][i] === "&") {
                    text[index][i] = "&amp;"
                }                
            }

            text[index] = text[index].join("")
        }

        for (let esc in escapes) {
            let indexBan = text[index].indexOf(esc)

            while (indexBan > -1) {
                text[index] = text[index].replace(esc, escapes[esc])
                indexBan = text[index].indexOf(esc, indexBan)
            }
        }

        output += "  <li>"+text[index]+"</li>\n"
    }

    output+="</ul>\n"
    return output 
}

// htmlEscape(['<b>unescaped text</b>', 'normal text'])
// htmlEscape(["&&&"])

// Match All Words
function matchAllWords(text){
    let regex = /\W+/g
    text = text.split(regex).filter(x => x !== "")
    console.log(text.join("|"))    
}

// matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')
// matchAllWords('_(Underscores) are also word characters ')

// Email Validation
function validateEmail(email){
    let emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/

    if (emailRegex.test(email)) {
        console.log("Valid")
        return        
    }

    console.log("Invalid")    
}

// validateEmail("valid@email.bg")
// validateEmail("valid@email1.bg")

// Expression Split
function split(expression){
    let splitRegex = /[\s;.(),]/g

    expression = expression.split(splitRegex).filter(x => x !== "")
    console.log(expression.join("\n"))    
}

// split('let sum = 4 * 4,b = "wow";')
// split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')

// Match the Dates
function matchDates(examples){
    let dateRegex = /\b[0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4}\b/g
    let output = []

    for (let ex of examples) {
        let result = ex.match(dateRegex)
        if (result !== null) {
            for (let inp of result) {
                output.push(inp.split("-"))                                    
            }
        }
    }

    for (const date of output) {
        console.log(date.join("-") + ` (Day: ${date[0]}, Month: ${date[1]}, Year: ${date[2]})`)       
    }
}

// matchDates(['I am born on 30-Dec-1994.',
// 'This is not date: 512-Jan-1996.',
// 'My father is born on the 29-Jul-1955.'])

// Employee Data
function parseEmployee(data){
    let employeeRegex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/
    for (let empl of data) {
        let match = employeeRegex.exec(empl)

        if (match !== null) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);           
        } 
    }
}

// parseEmployee(['Isacc - 1000 - CEO*',
// 'Ivan - 500 - Employee',
// 'Peter - 500 - Employee'])

// Form Filler
function fillForm(name, email, phoneNumber, text){
    let nameRegex = /<![A-Za-z]+!>/g
    let emailRegex = /<@[A-Za-z]+@>/g
    let phoneNumberRegex = /<\+[A-Za-z]+\+>/g

    for (let index in text) {
        let foundNames = text[index].match(nameRegex)
        
        if (foundNames !== null && foundNames.length > 0) {
            for (let i = 0; i < foundNames.length; i++) {
                text[index] = text[index].replace(foundNames[i], name)
            }
        }

        let foundEmails = text[index].match(emailRegex)
        
        if (foundEmails !== null && foundEmails.length > 0) {
            for (let i = 0; i < foundEmails.length; i++) {
                text[index] = text[index].replace(foundEmails[i], email)
            }
        }

        let foundPhones = text[index].match(phoneNumberRegex)
        
        if (foundPhones !== null && foundPhones.length > 0) {
            for (let i = 0; i < foundPhones.length; i++) {
                text[index] = text[index].replace(foundPhones[i], phoneNumber)
            }
        }
    }

    console.log(text)    
}

// fillForm('Pesho',
// 'pesho@softuni.bg',
// '90-60-90',
// ['Hello, <!username!>!',
//  'Welcome to your Personal profile.',
//  'Here you can modify your profile freely.',
//  'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//  'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//  'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'])

// Match Multiplication
function makeMatch(input){
    let numsRegex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g

    let output = ""

    let found = numsRegex.exec(input)
        
    while (found !== null) {
        input = input.replace(found[0], Number(found[1]) * Number(found[2]))
        found = numsRegex.exec(input)
    }    

    console.log(input)    
}

// makeMatch("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).")