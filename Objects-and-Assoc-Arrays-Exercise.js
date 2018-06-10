// Heroic Inventory
function storeHeros(input){
    let storage = []

    for (const row of input) {
        let [heroName, heroLevel, itemsCollection] = row.split(" / ")

        if (itemsCollection) {
            itemsCollection = itemsCollection.split(", ")
        }else{
            itemsCollection = []
        }

        let hero = {name:heroName, level:Number(heroLevel), items:itemsCollection}
        storage.push(hero)
    }

    console.log(JSON.stringify(storage))
}

// storeHeros(["Isacc / 25"])

// JSON's Table
function parseTable(input){
    let output = "<table>\n"

    for (const row of input) {
        let data = JSON.parse(row)
        
        output += "	<tr>\n"

        for (const kvp in data) {
            if (isNaN(data[kvp])) {
                output += `		<td>${htmlEscape(data[kvp])}</td>\n`
            } else{
                output += `		<td>${data[kvp]}</td>\n`
            }
        }

        output += "	</tr>\n"
    }

    output += "</table>"
    
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

    console.log(output)    
}

// parseTable([`{"name":"Pesho","position":"Promenliva","salary":100000}`,
// `{"name":"Teo","position":"Lecturer","salary":1000}`,
// `{"name":"Georgi","position":"Lecturer","salary":1000}`])

// Cappy Juice
function drinkCappy(input){
    let juices = {}
    let bottles = {}

    for (const row of input) {
        let data = row.split(" => ")

        if (!juices.hasOwnProperty(data[0])) {
            juices[data[0]] = 0
        }

        juices[data[0]] += Number(data[1])

        if(juices[data[0]] >= 1000)
        {
            bottles[data[0]]= parseInt(juices[data[0]] / 1000)
        }
    }

    for(let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }    
}

// drinkCappy(["Orange => 2000",
//     "Peach => 1432",
//     "Banana => 450",
//     "Peach => 600",
//     "Strawberry => 549"])
// drinkCappy(["Kiwi => 234",
//     "Pear => 2345",
//     "Watermelon => 3456",
//     "Kiwi => 4567",
//     "Pear => 5678",
//     "Watermelon => 6789"])

// Store Catalogue
function store(input){
    let products = {}

    for (let row of input) {
        let [productName, productPrice] = row.split(" : ")
        
        products[productName] = Number(productPrice)
    }

    let sortedKeys = Array.from(Object.keys(products)).sort()
    let sortedKeysMap = new Set()

    for (const key of sortedKeys) {
        sortedKeysMap.add(key[0])
    }

    for (const char of sortedKeysMap) {
        console.log(char)
        
        for (const key of    sortedKeys) {
            if (key.startsWith(char)) {
                console.log(key + ": " + products[key]);
            }
        }
    }
}

// store(["Appricot : 20.4",
//     "Fridge : 1500",
//     "TV : 1499",
//     "Deodorant : 10",
//     "Boiler : 300",
//     "Apple : 1.25",
//     "Anti-Bug Spray : 15",
//     "T-Shirt : 10"])

// Auto-Engineering Company
function carIt(input){
    let cars = new Map()

    for (let row of input) {
        let [brand, model, number] = row.split(" | ")

        if (!cars.has(brand)) {
            cars.set(brand, new Map())
        }

        if (!cars.get(brand).has(model))     {
            cars.get(brand).set(model, 0)
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + Number(number))   
    }

    for (const row of cars) {
        console.log(row[0])

        for (const col of row[1]) {
            console.log("###" + col[0] + " -> " + col[1])
        }
    }
}

// carIt(["Audi | Q7 | 1000",
//     "Audi | Q6 | 100",
//     "BMW | X5 | 1000",
//     "BMW | X6 | 100",
//     "Citroen | C4 | 123",
//     "Volga | GAZ-24 | 1000000",
//     "Lada | Niva | 1000000",
//     "Lada | Jigula | 1000000",
//     "Citroen | C4 | 22",
//     "Citroen | C5 | 10"])

// System Components
function systemIt(input){
        let systems = new Map();
    
        for(let line of input) {
            let tokens = line.split(/\s*\|\s*/);
            let system = tokens[0];
            let component = tokens[1];
            let subcomponent = tokens[2];
    
            if(! systems.get(system)){
                systems.set(system, new Map());
            }
            if(! systems.get(system).get(component)){
                systems.get(system).set(component, [])
            }
            systems.get(system).get(component).push(subcomponent);
        }
    
        let systemsSorted = Array.from(systems.keys()).sort((s1, s2) => sortSystems(s1, s2));
    
        for(let system of systemsSorted) {
            console.log(system);
            let componentsSorted = Array.from(systems.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));
    
            for(let component of componentsSorted) {
                console.log(`|||${component}`);
                systems.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
            }
        }
    
        function sortSystems(s1, s2) {
            if(systems.get(s1).size != systems.get(s2).size) {
                return systems.get(s2).size - systems.get(s1).size;
            } else {
                return s1.toLowerCase().localeCompare(s2.toLowerCase());
            }
        }
    
        function sortComponents(system, c1, c2) {
            return systems.get(system).get(c2).length - systems.get(system).get(c1).length;
        }
    }

// systemIt(["SULS | Main Site | Home Page",
//     "SULS | Main Site | Login Page",
//     "SULS | Main Site | Register Page",
//     "SULS | Judge Site | Login Page",
//     "SULS | Judge Site | Submittion Page",
//     "Lambda | CoreA | A23",
//     "SULS | Digital Site | Login Page",
//     "Lambda | CoreB | B24",
//     "Lambda | CoreA | A24",
//     "Lambda | CoreA | A25",
//     "Lambda | CoreC | C4",
//     "Indice | Session | Default Storage",
//     "Indice | Session | Default Security"])


function usernames(input) {
    let usernames = new Set();

    for(let username of input){
        usernames.add(username);
    }

    Array.from(usernames.keys()).sort((a, b) => sortUsernames(a, b)).forEach(u => console.log(u));

    function sortUsernames(a, b) {
        if(a.length !== b.length) {
            return(a.length - b.length);
        } else {
            return a.localeCompare(b);
        }
    }
}

function uniqueSequences(input) {
    let arraysSet = [];

    for(let line of input) {
        let arr = JSON.parse(line);
        arraysSet.push(arr.map(Number).sort((a, b) => b - a));
    }

    let uniqueArrays = [];

    for(let i=0; i<arraysSet.length; i++) {
        let haveEqual = false;

        for(let j= i+1; j<arraysSet.length; j++) {
            if(compareArrays(arraysSet[i], arraysSet[j])){
                arraysSet.splice(j, 1);
                j--;
            }
        }
    }

    arraysSet.sort((a, b) => a.length - b.length);
    arraysSet.forEach(a => console.log("[" + a.join(", ") + "]"));

    function compareArrays(arr1, arr2) {
        if(arr1.length !== arr2.length) {
            return false;
        } else {
            for(let i=0; i<arr1.length; i++) {
                if(arr1[i] != arr2[i]){
                    return false;
                }
            }

            return true;
        }
    }
}