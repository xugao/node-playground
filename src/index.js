const csv = require("csv-parser");
const fs = require("fs");

console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
fs.createReadStream("test.csv")
  .pipe(csv())
  .on("data", (row) => {
    console.log(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });
