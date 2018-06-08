// AJAX Request Validator
function validateRequest(req){
    let hashPattern = req.pop()
    let authenticationTokenRegex = /(Basic|Bearer) ([a-zA-Z0-9]+)/
    let contentRegex = /^[a-zA-Z0-9\.]+$/
    let hashArr = []

    for (let i = 0; i < hashPattern.length; i += 2) {
        hashArr.push([hashPattern[i + 1], Number(hashPattern[i])])
    }

    for (let i = 0; i < req.length; i += 3) {
        let output = ""
        
        let method = req[i].split(": ")[1]
        let authenticationToken = req[i + 1].split(": ")[1]
        let authenticationType = authenticationToken.split(" ")[0]
        let requestHeader = authenticationToken.split(" ")[1]
        let content = req[i + 2].split(": ")[1]
        
        if (!authenticationTokenRegex.test(authenticationToken) || !contentRegex.test(content)) {
            output = `Response-Code:400`
            console.log(output)
            continue
        }
        
        switch (method) {
            case "GET":
                if(validateToken(hashArr, requestHeader)) {
                    output = `Response–Method:${method}&Code:200&Header:${requestHeader}`
                    break                
                } else{
                    output = `Response–Method:${method}&Code:403`
                    break
                }
            case "POST":
            case "PUT":
            case "DELETE":
                if (authenticationType === "Basic") {
                    output = `Response–Method:${method}&Code:401`
                    break
                }
               
                if(validateToken(hashArr, requestHeader)) {
                    output = `Response–Method:${method}&Code:200&Header:${requestHeader}`
                    break                
                } else{
                    output = `Response–Method:${method}&Code:403`
                    break
                }
        }

        console.log(output)
    }

    function validateToken(hashArr, requestHeader) {
        let bool = false
        
        for (let item of hashArr) {
            let index = requestHeader.indexOf(item[0])

            if (index > -1) {
                let counter = 0
                while (index > -1) {
                    index = requestHeader.indexOf(item[0], index + 1)
                    counter++
                }

                if (counter === item[1]) {
                    bool = true
                } 
            } 
        }

        return bool
    }
}

// validateRequest(["Method: GET",
//     "Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJA",
//     "Content: users.asd.1782452.278asd",
//     "Method: POST",
//     "Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas",
//     "Content: Johnathan",
//     "2q"])

// validateRequest(["Method: PUT",
//     "Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB",
//     "Content: users.asd/1782452$278///**asd123",
//     "Method: POST",
//     "Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas",
//     "Content: Johnathan",
//     "Method: DELETE",
//     "Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx",
//     "Content: This.is.a.sample.content",
//     "2e5g"])

// Format Helper
function formatText(text){
    text = text.replace(/(\.|,|;|:|\?|!)\s*(.)/g, "$1 $2")
    text = text.replace(/(.)\s+(\.|,|;|:|\?|!)/g, "$1$2")
    text = text.replace(/\s*(\.|,|;|:|\?|!)/g, "$1")  
    text = text.replace(/\. ([0-9]+)/g, ".$1")
    text = text.replace(/"\s*(.+?)\s*"/g, `"$1"`)
    
    console.log(text)
}

// formatText(`Terribly formatted text . . . .! With chaotic spacings." Terrible quoting "! Also
// this date is pretty confusing : 20 . 12.16 .`)

// formatText("Make,sure to give:proper spacing where is needed... !")

// Lost
function decrypt(keyword, text){
    let latitudeRegex = /(north).*?([0-9]{2})[^,]*,[^,]*?([0-9]{6})/gmi
    let longitudeRegex = /(east).*?([0-9]{2})[^,]*,[^,]*?([0-9]{6})/gmi
    
    let latitude = text.match(latitudeRegex)[text.match(latitudeRegex).length - 1]
    let latitudeCoordinatesMatch = latitudeRegex.exec(latitude)
    console.log(`${latitudeCoordinatesMatch[2]}.${latitudeCoordinatesMatch[3]} N`);
    
    let longitude = text.match(longitudeRegex)[0]
    let longitudeCoordinatesMatch = longitudeRegex.exec(longitude)
    console.log(`${longitudeCoordinatesMatch[2]}.${longitudeCoordinatesMatch[3]} E`);
    
    let messageRegex = new RegExp(keyword + "(.+?)" + keyword)   
    let message = messageRegex.exec(text)
    console.log(`Message: ${message[1]}`)    
}

// decrypt("<>",
//     "o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b")
// decrypt("4ds",
//     "eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532")

// Query Mess
function fixMess(input){
    let regex = /(\?|&|^)*?(.+?)=(.+?)(&|$)/g

    for (const row of input) {
        let output = {}

        let vkp = regex.exec(row)
        while (vkp) {
            let value = vkp[2]
            let number = vkp[3]

            if (value.includes("+")) {
                value = value.replace(/\+/g , " ").trim()
            }

            if (value.includes("%20")) {
                value = value.replace(/%20/g, " ").trim()
            }

            if (/\s{2,}/.test(value)) {
                value = value.replace(/\s{2,}/g, " ").trim()
            }
            
            if (number.includes("+")) {
                number = number.replace(/\+/g , " ").trim()
            }

            if (number.includes("%20")) {
                number = number.replace(/%20/g , " ").trim()
            }

            if (/\s{2,}/.test(number)) {
                 number = number.replace(/\s{2,}/g, " ").trim()
            }

            if (value.includes("?")) {
                value = value.split("?")[value.split("?").length - 1]
            }
            
            if (!output.hasOwnProperty(value)) {
                output[value] = []
            }

            output[value].push(number)                        
            vkp = regex.exec(row)
        }    

        let print = ""
        for (const key in output) {
            print += key + "=[" + output[key].join(", ") + "]"
        }        

        console.log(print)        
    }
}

// fixMess(["field=value1&field=value2&field=value3",
//     "http://example.com/over/there?name=ferret"])
// fixMess(["login=student&password=student"])
// fixMess(["foo=%20foo&value=+val&foo+=5+%20+203",
//     "foo=poo%20&value=valley&dog=wow+",
//     "url=https://softuni.bg/trainings/coursesinstances/details/1070",
//     "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php"])

// Spy Master
function encodeMessage(key, text){
    let keyRegex = new RegExp("(?:" + key + ")\\s+(.+?)[\\s+\\.,]", "gmi")
    
    let encodeRegex = /^[A-Z!%$#]{8,}$/
    let catches = keyRegex.exec(text)
    while(catches){
        if (encodeRegex.test(catches[1])) {
            let changedWord = catches[1]
            changedWord = changedWord.toLocaleLowerCase()
            changedWord = changedWord.replace(/!/g, "1")
            changedWord = changedWord.replace(/%/g, "2")
            changedWord = changedWord.replace(/#/g, "3")
            changedWord = changedWord.replace(/[$]/g, "4")
                        
            text = text.replace(catches[1], changedWord)            
        }
        
        catches = keyRegex.exec(text)
    }

    console.log(text)
}

// encodeMessage("specialKey",
//     `In this text the specialKey HELLOWORLD! is correct, but
// the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while
// SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`)

// encodeMessage("enCode",
//     `Some messages are just not encoded what can you do?
// RE - ENCODE THEMNOW! - he said.
// Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.`)

// Survey Parser
function parse(input){
    let catcheSvgRegex = /(?:<svg>)(.*)(?:<\/svg>)/
    let svg = catcheSvgRegex.exec(input)

    if (!svg) {
        console.log("No survey found")
        return
    }

    svg = catcheSvgRegex.exec(input)[1]
    
    let catchesCatRegex = /(?:<cat>)(.*?)(?:<\/cat>)/gm
    let cats = svg.match(catchesCatRegex)
    
    let catchLabelRegex = /<text>.*\[(.*)\]<\/text>/
    let labelCat = cats[0]
    let label = catchLabelRegex.exec(labelCat)

    if (!label) {
        console.log("Invalid format")
        return
    }
    
    label = label[1]

    let ratings = cats[1]
    let ratingsRegex = /<g>(.*?)<\/g>/gm

    let values = ratings.match(ratingsRegex)

    if (!values) {
        console.log("Invalid format")
        return
    }

    let valueRegex = /<val>([1-9]|10)<\/val>([0-9]+)/
    
    let sum = 0
    let count = 0

    for (const value of values) {
        let currentRating = valueRegex.exec(value)
        sum +=  Number(currentRating[1]) * Number(currentRating[2])   
        count +=  Number(currentRating[2])
    }    
    
    let average = (Math.round((sum / count) * 100))/100
    console.log(label + ": " + average);
}

// parse("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>")
// parse("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>")
// parse("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>")
// parse("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>")

// XML Messenger
function validateXml(input){
    input = input.split("\n").join("/n")
    let messageRegex = /^<message.*?>(.*?)<\/message>$/

    let message = messageRegex.exec(input)
    if (!message) {
        console.log("Invalid message format")
        return
    }    

    input = input.replace(message[1], "")
    let attributeRegex = /<message\s+(\s*[a-z]+="[a-zA-Z0-9\. ]+"\s*)+>/
    let attributes = input.match(attributeRegex)

    if (!attributes) {
        console.log("Invalid message format")
        return
    }    

    let recipientRegex = /to="([a-zA-Z0-9\. ]+)"/
    let recipient = input.match(recipientRegex)
    let senderRegex = /from="([a-zA-Z0-9\. ]+)"/
    let sender = input.match(senderRegex)
    
    if (!recipient || !sender) {
        console.log("Missing attributes")
        return
    } 

    let output = `<article>
    <div>From: <span class="sender">${sender[1]}</span></div>
    <div>To: <span class="recipient">${recipient[1]}</span></div>
    <div>\n`

    message = message[1].split("/n")
    
    for (const row of message) {
        output += `      <p>${row}</p>\n`
    }

    output += `    </div>
</article>`

    console.log(output);
}

// validateXml(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`)
// validateXml(`<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>`)
// validateXml(`<message from="Alice" timestamp="1497254112">Same old, same old</message>`)
// validateXml(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
// Let's go out for a beer</message>`)
// validateXml(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>`)
// validateXml(`<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>`)

// SoftUni Forum
function banUsers(input){
    let listBannedUsers = input.pop().split(" ")
    input = input.join("/n")
    let codeRegex = /(.*)<code>.*\/code>(.*)/gm
    let outsideCode = codeRegex.exec(input)
    let firstPart = outsideCode[1]
    let secondPart = outsideCode[2]
    
    let userRegex = /#([a-zA-Z][\w-]+[a-zA-Z0-9]?)/g
    
    let users = firstPart.match(userRegex)
    
    if (users) {
        for (const user of users) {
            for (const ban of listBannedUsers) {
                if (user.replace("#", "") !== ban) {
                    input = input.replace(user, `<a href="/users/profile/show/${user.replace("#", "")}">${user.replace("#", "")}</a>`)
                } else{
                    input = input.replace(user, "*".repeat((user.replace("#", "")).length))
                }
            }
        }
    }

    //secondpart
    users = secondPart.match(userRegex)
    
    if(users){
        for (const user of users) {
            for (const ban of listBannedUsers) {
                if (user.replace("#", "") !== ban) {
                    input = input.replace(user, `<a href="/users/profile/show/${user.replace("#", "")}">${user.replace("#", "")}</a>`)
                } else{
                    input = input.replace(user, "*".repeat((user.replace("#", "")).length))
                }
            }
        }
    }

    console.log(input.split("/n").join("\n"))
}

// banUsers(["#RoYaL: I'm not sure what you mean,",
// "but I am confident that I've written",
// "everything correctly. Ask #iordan_93",
// "and #pesho if you don't believe me",
// `<code>`,
// "#trying to print stuff",
// `print("yoo")`,
// "</code>",
// "pesho gosho"])