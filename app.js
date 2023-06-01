const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

const data = [];

fs.createReadStream(path.resolve(__dirname, "trashcanData.csv"))
  .pipe(csv.parse({ headers: true }))
  .on("error", (error) => console.error(error))
  .on("data", (row) => data.push(row))
  .on("end", (rowCount) => console.log(data));

let input = document.querySelector("input");

function search() {
  let searchResults = [];

  for (i = 0; i < data.length; i++) {
    if (input.value === data.Address || input.value === data.trashCanId) {
      searchResults.push(data[i]);
      console.log(searchResults);
    }
  }
}
