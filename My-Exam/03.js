function decode(input){
    let startChar = Number(input.shift())
    let endChar = Number(input.shift())
    let word = input.shift()

    let countryRegex = /\b[A-Z][\w]*?[A-Z]\b/g
    
    input = input[0]
    let foundCountries = input.match(countryRegex)
    
    if (foundCountries.length > 1) {

        for (let found of foundCountries) {
            if (endChar > found.length - 1) {
                foundCountries.splice(foundCountries.indexOf(found), 1)
            }
        }        
    }

    let changedCountry = foundCountries[0].split("")

    changedCountry.splice(startChar, (endChar - startChar + 1), word)
    changedCountry[changedCountry.length - 1] = changedCountry[changedCountry.length - 1].toLowerCase()
    changedCountry = changedCountry.join("")
    
    input = input.replace(foundCountries, changedCountry)

    let numberRegex = /[0-9][0-9]{2}(\.[0-9]+)?/g
    let foundNumbers = input.match(numberRegex).map(e => Number(e))
    
    for (let num in foundNumbers) {
        if (foundNumbers[num] % 1 !== 0) {
            foundNumbers[num] = Math.ceil(foundNumbers[num])
        }        
    }    

    let city = []
    for (let num of foundNumbers) {
        city.push(String.fromCharCode(num))
    }

    city[0] = city[0].toUpperCase()
    city = city.join("")

    console.log(changedCountry + " => " + city)
}

decode(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])
decode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])
decode(["5",
    "7",
    "riA",
    "BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he"])