const data = [
  { address: "10 Davis Rd. Bangor,Me 04401", trashCanId: 620336996 },
  { address: "12 Davis Rd. Bangor,Me 04401", trashCanId: 620336993 },
  { address: "55 Deer Isle Rd. Bangor,Me 04401", trashCanId: 620336991 },
];

console.log(data);

let input = document.querySelector("input");

const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", search);

function search() {
  const newArr = [];
  console.log("click");
  console.log(input.value);
  if (input.value.toLocaleLowerCase === data.address.toLocaleLowerCase) {
    newArr.push(data.address);
    console.log(newArr);
  }
}

// const fs = require("fs");
// const path = require("path");
// const csv = require("fast-csv");

// const data = [];

// fs.createReadStream(path.resolve(__dirname, "trashcanData.csv"))
//   .pipe(csv.parse({ headers: true }))
//   .on("error", (error) => console.error(error))
//   .on("data", (row) => data.push(row))
//   .on("end", (rowCount) => console.log(data));
