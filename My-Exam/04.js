function calcTime(input){
    let data = new Map()

    for (const row of input) {
        let [country, city, costs] = row.split(" > ").filter(e => e !== "").map(e => e.trim())
        if (!data.has(country)) {
            data.set(country, new Map())
        }

        let firstCityChar = city[0]
        city = city.split("")
        
        if (firstCityChar >= "a" && firstCityChar <= "z") {
            city.splice(0, 1)
            firstCityChar = firstCityChar.toUpperCase()
            city.unshift(firstCityChar)
        }

        city = city.join("")
        
        if (!data.get(country).has(city)) {
            data.get(country).set(city, costs)
        } else{
            let currentCosts = data.get(country).get(city)
            
            if (costs < currentCosts) {
                data.get(country).set(city, costs)
            }
        }
    }

        let sortedKeys = Array.from(data.keys()).sort((s1, s2) => s1.toLowerCase().localeCompare(s2.toLowerCase()));
    
    for (const country of sortedKeys) {
        let output = ""
        output += country + " -> "

        let citiesSorted = Array.from(data.get(country).keys()).sort((c1, c2) => sortCities(country, c1, c2));
        for(let city of citiesSorted) {
            output +=  city + " -> " + data.get(country).get(city) + " "
        }

        console.log(output);
    }
    
    function sortCities(country, c1, c2) {
        return data.get(country).get(c1) - data.get(country).get(c2)
    }
}

calcTime(["Bulgaria > sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200" ])

let a = "B"
console.log(a > "a");
