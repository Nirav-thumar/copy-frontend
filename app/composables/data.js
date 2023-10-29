export function useTrainInfo(){

const info = {
    trainNo: null,
   trainName: "",
   sourceStationName: "",
   destinationStationName: "",
   days: "",
   id: null
}
    const data = useState("info",()=>info)
    return {data} 
}

export function useTrainSchedule(){
    const schedule = {
        sn:"",
        trainNo:null,
        stationCode:"",
        a1: null,
        a2: null,
        a3: null,
        sl: null,
        stationName: "",
        routeNumber: "",
        arrivalTime: "",
        departureTime: "",
        distance: "",
        id: null
    }

    const data = useState("schedule",()=>schedule)
    return {data} 

}

export function useEmptyObjectProperties(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = null; // Set properties to null or an appropriate empty value
      }
    }
  }
 