// const csvtojson = require('csvtojson');
// const fs = require('fs');

import csvtojson from 'csvtojson'
import fs from 'fs'

const csvFilePath = './train_schedule.csv'; // Replace with your CSV file path
const jsonFilePath = './data.json'; // Replace with your desired JSON file path

csvtojson()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // Save the JSON data to a file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 4), 'utf-8');
    console.log(`CSV data has been converted to JSON and saved to ${jsonFilePath}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
