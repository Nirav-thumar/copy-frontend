import db from './dummy_db.json' assert { type: "json" }
// const db = require('./dummy_db.json')
import fs from 'fs'
// console.log(db.trainInfo)
// const fs = require('fs')
const trainSchedule = db.trainSchedule;

trainSchedule.forEach((element,index) => {
    element.id = index + 1
});

fs.writeFile('db.json',JSON.stringify(trainSchedule),()=>{})