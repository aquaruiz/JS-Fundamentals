function planTravel(input){
    let specializedProfessions = [
        "Programming",
        "Hardware maintenance",
        "Cooking",
        "Translating",
        "Designing"
    ]

    let  averageProfessions = [
        "Driving", 
        "Managing", 
        "Fishing", 
        "Gardening"
    ]

    let clumsyProfessions = [
        "Singing", 
        "Accounting", 
        "Teaching", 
        "Exam-Making", 
        "Acting", 
        "Writing", 
        "Lecturing", 
        "Modeling", 
        "Nursing"
    ]

    let earnedGold = 0
    let specializedCustomers = 0
    let clumsyCustomers = 0

    for (const row of input) {
        if (row === "") {
            continue
        }

        let [profession, offeredGold] = row.split(":").map(e => e.trim())
        offeredGold = Number(offeredGold)
        let gold = 0
        
        if (specializedProfessions.includes(profession) && offeredGold < 200) {
            continue
        }    

        if (specializedProfessions.includes(profession)) {
            specializedCustomers++
            // spend for candies
            gold = 0.8 * offeredGold

            if (specializedCustomers % 2 === 0) {
                gold += 200
            }
        }

 		if (averageProfessions.includes(profession)) {
            gold = offeredGold
        }
        
        if (clumsyProfessions.includes(profession)) {
            clumsyCustomers++

            // if (clumsyCustomers % 2 === 0 && clumsyCustomers % 3 === 0){
            //     gold = 0.85 * offeredGold               
            // } else 
            if (clumsyCustomers % 2 === 0) {
                gold = 0.95 * offeredGold
            } else if (clumsyCustomers % 3 === 0) {
                gold = 0.9 * offeredGold
            } else {
                gold = offeredGold
            }
        }

        earnedGold += gold
    }    

    if (earnedGold < 1000) {
        console.log(`Final sum: ${earnedGold.toFixed(2)}`)
        console.log(`Mariyka need to earn ${(1000 - earnedGold).toFixed(2)} gold more to continue in the next task.`)
    } else {
        console.log(`Final sum: ${earnedGold.toFixed(2)}`)
        console.log(`Mariyka earned ${Math.abs(1000 - earnedGold).toFixed(2)} gold more.`)
    }
}

// planTravel(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"])
// planTravel(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])
// planTravel(["Programming : 300", "Cooking : 75", "Hardware maintenance : 50"])

// planTravel(["Programming : 500",
//     "Driving : 243.55",
//     "Acting : 200",
//     "Singing : 100",
//     "Cooking : 199",
//     "Hardware maintenance : 800",
//     "Gardening : 700",
//     "Programming : 500",
//     ''])
planTravel(["Programming : 500",
    "Driving : 243",
    "Singing : 100",
    "Cooking : 199"
])