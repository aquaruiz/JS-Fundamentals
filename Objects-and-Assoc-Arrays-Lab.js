// Towns to JSON
function makeJson(text){
    let headers = text.shift().split("|").map(e => e.trim()).filter(e => e !== "")
    let output = []

    for (const row of text) {
        let [town, latitude, longitude] = row.split("|").map(e => e.trim()).filter(e => e !== "")
        let obj = {Town:town, Latitude: Number(latitude), Longitude: Number(longitude)}
        output.push(obj)
    }

    console.log(JSON.stringify(output))
}

// makeJson(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |'])
// makeJson(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |'])

// Score to HTML
function score(input){
    input = JSON.parse(input)

    let output = `<table>
  <tr><th>name</th><th>score</th></tr>\n`

    for (const obj of input) {
        output += `  <tr>`
        for (const key in obj) {
            if (isNaN(obj[key])) {
                output += `<td>${htmlEscape(obj[key])}</td>`
            } else{
                output += `<td>${obj[key]}</td>`
            }
        }
        output += `</tr>\n`
    }
    
    output += `</table>`
    console.log(output)
    
    
    function htmlEscape(text){
        let output = text.split("")
        
        let escapes = {
            "<":"&lt;",
            ">":"&gt;",        
            "\"":"&quot;",
            "'":"&#39;"
        }
    
        for (let index in output) {
            
            if (output[index] === "&") {
                output[index] = "&amp;"
            }
    
            for (let esc in escapes) {
                
                if (output[index] === esc) {
                    output[index] = escapes[esc]
                }
            }
        }
    
        return output.join("")
    }
}

// score('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')
// score('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')

// JSON to HTML Table
function fromJSONToHTMLTable(text){
    let input = JSON.parse(text)
    let output = `<table>\n`
    output += `  <tr>`
        
        for (const key in input[0]) {
            output += `<th>${key}</th>`
        }

    output += `</tr>\n`

    for (const obj of input) {
        output += `  <tr>`
        for (const key in obj) {
            if (isNaN(obj[key])) {
                output += `<td>${htmlEscape(obj[key])}</td>`
            } else{
                output += `<td>${obj[key]}</td>`
            }
        }
        
        output += `</tr>\n`
    }
      
    output += `</table>`
    console.log(output)
      
    function htmlEscape(text){
        let output = text.split("")
          
        let escapes = {
            "<":"&lt;",
            ">":"&gt;",        
            "\"":"&quot;",
            "'":"&#39;"
        }
      
        for (let index in output) {
              
            if (output[index] === "&") {
                output[index] = "&amp;"
            }
      
            for (let esc in escapes) {
                  
                if (output[index] === esc) {
                    output[index] = escapes[esc]
                }
                  
            }
        }
      
        return output.join("")
    } 
}

// fromJSONToHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')

// Sum by Town
function sumIt(input){
    let towns= {}
    for (let i = 0; i < input.length; i += 2) {
        if (!towns.hasOwnProperty(input[i])) {
            towns[input[i]] = 0
        }
        
        towns[input[i]] += Number(input[i + 1])
    }

    console.log(JSON.stringify(towns))    
}

// sumIt(["Sofia","20","Varna","3","Sofia","5","Varna","4"])
// sumIt(["Sofia","20","Varna","3","sofia","5","varna","4"])

// Count Words in a Text
function countWords(text){
    text = text.join('\n');
    input = text.split(/\W/).filter(e => e!=="")
    let words = {}

    for (let i = 0; i < input.length; i++) {
        if (!words.hasOwnProperty(input[i])) {
            words[input[i]] = 0
        }
        
        words[input[i]]++
    }

    console.log(JSON.stringify(words))
}

// countWords([`Far too slow, you're far too slow.`])
// countWords([`JS devs use Node.js for server-side JS.-- JS for devs`])

//  Count Words with Maps
function countWords(text){
    text = text.join('\n');
    input = text.split(/\W/).filter(e => e!=="").map(e => e.toLowerCase())
    let words = new Map()

    for (let i = 0; i < input.length; i++) {
        if (!words.has(input[i])) {
            words.set(input[i], 0)
        }
        
        words.set(input[i], words.get(input[i]) + 1)
    }

    for (const word of Array.from(words.keys()).sort()) {
        console.log(`'${word}' -> ${words.get(word)} times`);
    }
}

// countWords([`Far too slow, you're far too slow.`])
// countWords([`JS devs use Node.js for server-side JS.-- JS for devs`])

// Population in Towns
function calcPopulation(input){
    let stats= new Map()

    for (const townData of input) {
        let data = townData.split(" <-> ")
        if (!stats.has(data[0])) {
            stats.set(data[0], 0)
        }
        
        stats.set(data[0], stats.get(data[0]) + Number(data[1]))
    }

    for (const key of stats) {
        console.log(key[0] + " : " + key[1])
    }
}

// calcPopulation(["Sofia <-> 1200000",
//     "Montana <-> 20000",
//     "New York <-> 10000000",
//     "Washington <-> 2345000",
//     "Las Vegas <-> 1000000"])
// calcPopulation(["Istanbul <-> 100000",
//     "Honk Kong <-> 2100004",
//     "Jerusalem <-> 2352344",
//     "Mexico City <-> 23401925",
//     "Istanbul <-> 1000"])

// City Markets
function sales(input){
    let soldItems = new Map()

    for (const row of input) {
        let [city, product, amountOfSales, priceForOneUnit] = row.split(/ -> | : /)
        
        if (!soldItems.has(city)){
            soldItems.set(city, new Map());
        }

        if (!soldItems.get(city).has(product)) {
            soldItems.get(city).set(product, 0)
        }

        soldItems.get(city).set(product, soldItems.get(city).get(product) + amountOfSales * priceForOneUnit);
    }

    for (const item of soldItems) {
        console.log("Town - " + item[0])
        
        for (const prod of item[1]) {
            console.log("$$$" + prod[0] + " : " + prod[1])
        }
    }
}

// sales(["Sofia -> Laptops HP -> 200 : 2000",
//     "Sofia -> Raspberry -> 200000 : 1500",
//     "Sofia -> Audi Q7 -> 200 : 100000",
//     "Montana -> Portokals -> 200000 : 1",
//     "Montana -> Qgodas -> 20000 : 0.2",
//     "Montana -> Chereshas -> 1000 : 0.3"])

// Lowest Prices in Cities
function findLowestPrices(input){
    let pricesPerCity = new Map()

    for (const row of input) {
        let [city, product, price] = row.split(" | ")
        
        if (!pricesPerCity.has(product)){
            pricesPerCity.set(product, new Map());
        }

        pricesPerCity.get(product).set(city, Number(price))
    }

    for(let [product, insideMap] of pricesPerCity) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let cityWithLowestPrice = "";
        
        for(let [city, price] of insideMap) {
            if(price < lowestPrice) {
                lowestPrice = price;
                cityWithLowestPrice = city;
            }
        }

        
        console.log(`${product} -> ${lowestPrice} (${cityWithLowestPrice})`);
    }    
}

// findLowestPrices(["Sample Town | Sample Product | 1000",
//     "Sample Town | Orange | 2",
//     "Sample Town | Peach | 10",
//     "Sofia | Orange | 3",
//     "Sofia | Peach | 2",
//     "Sofia | Peach | 1.5",
//     "New York | Peach | 1",
// //     "New York | Sample Product | 1000.1",
// //     "New York | Burger | 10"])
// findLowestPrices(["Sofia City | Audi | 100000",
//     "Sofia City | BMW | 100000",
//     "Sofia City | Mitsubishi | 10000",
//     "Sofia City | Mercedes | 10000",
//     "Sofia City | NoOffenseToCarLovers | 0",
//     "Mexico City | Audi | 1000",
//     "Mexico City | BMW | 99999",
//     "New York City | Mitsubishi | 10000",
//     "New York City | Mitsubishi | 1000",
//     "Mexico City | Audi | 100000",
//     "Washington City | Mercedes | 1000"])

// Extract Unique Words
function extrWords(input){
    let founds = []
    for (const row of input) {
        let words = row.split(/\W/).filter(e => e !== "")

        for (const word of words) {
            if (!founds.includes(word.toLowerCase())) {
                founds.push(word.toLowerCase())
            }
        }
    }

    console.log(founds.join(", "))    
}

// extrWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
//     "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
//     "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.", 
//     "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.", 
//     "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
//     "Integer ac turpis commodo, varius nulla sed, elementum lectus.", 
//     "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."])
// extrWords(["Lorem ipsum Lorem ipsum Lorem ipsum "])
    