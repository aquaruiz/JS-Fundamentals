function investigate(input){
    let companies = input.shift()
    let delimiter = input.shift()

    let valid = []
    let invalid = []

    companies = companies.split(delimiter).filter(e => e!== "").map(e => e.trim())
    
    for (const sentence of input) {
        let validSentence = true
        for (const company of companies) {
            let companyRegex = new RegExp(company, "i")     
            let hasCompany = companyRegex.test(sentence) 

            if(!hasCompany){
                validSentence = false
                break
            }
        }        

        if(validSentence){
            valid.push(sentence.toLowerCase())
        } else{
            invalid.push(sentence.toLowerCase())
        }
    }

    if (valid.length > 0) {
        console.log("ValidSentences")
        for (let i = 1; i <= valid.length; i++) {
            console.log(`${i}. ${valid[i - 1]}`);
        }
    }

    if (valid.length > 0 && invalid.length > 0) {
        console.log("==============================")
    }
    
    if (invalid.length > 0) {
        console.log("InvalidSentences")
        for (let i = 1; i <= invalid.length; i++) {
            console.log(`${i}. ${invalid[i - 1]}`);
        }
    }
}

investigate(["bulgariatour@, minkatrans@, koftipochivkaltd",
"@, ",
"Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
"dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
"someone continues as no "])