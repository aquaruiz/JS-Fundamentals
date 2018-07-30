// Airport Statistics
function aggregate(input){
    let towns = {} // planes : [planeIDs] 
    let planes = {}  // planeId : {town: dep arr}
    let people = {} // town departPeople : 0.00 arrivalPeople : 0.00
    for (const row of input) {
        let [planeId, town, passengersCount, action] = row.split(" ")
        if (action === "land") {
          if (!planes.hasOwnProperty(planeId)) {
            planes[planeId] = []
          }

          if (!planes[planeId].hasOwnProperty(town)) {
            planes[planeId].push({[town]: "Arrived"})
            
            if (!towns.hasOwnProperty(town)) {
                towns[town] = []
            }
            
            towns[town].push(planeId)

            if (!people.hasOwnProperty(town)) {
                people[town] = [{Arrivals: 0}, {Departures: 0}]
            }

            people[town][0].Arrivals += Number(passengersCount)
          } 

          if (planes[planeId][town] === "Departured") {
            planes[planeId][town] === "Arrived"
            towns[town].push(planeId)
            people[town][0].Arrivals += Number(passengersCount)
          } 
        } else if (action === "depart"){
            if (!planes.hasOwnProperty(planeId)) {
                continue
            }

            if (!planes[planeId].includes({[town] : "Arrived"})) {
                continue    
            }

            
            if (planes[planeId][town] === "Arrived") {
                planes[planeId][town] === "Departured"
                towns[town].splice(indexOf(planeId), 1)
                people[town][1].Departures += Number(passengersCount)
              } 
        }
    }

    console.log((planes));
    console.log(towns);
    console.log(people);
        
    
}


aggregate([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"])
