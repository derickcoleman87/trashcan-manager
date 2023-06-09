const data = [
  { address: "10 Davis Rd. Bangor, Me 04401", trashCanId: "620336996" },
  { address: "12 Davis Rd. Bangor, Me 04401", trashCanId: "620336993" },
  { address: "55 Deer Isle Rd. Bangor, Me 04401", trashCanId: "620336991" },
];
// const fs = require("fs");
// const path = require("path");
// const csv = require("fast-csv");

// const data = [];

// fs.createReadStream(path.resolve(__dirname, "trashcanData.csv"))
//   .pipe(csv.parse({ headers: true }))
//   .on("error", (error) => console.error(error))
//   .on("data", (row) => data.push(row))
//   .on("end", (rowCount) => console.log(data));

let input = document.querySelector("input");

const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", search);

function search() {
  let newArr = [];

  console.log("click");
  console.log(typeof input.value);

  for (let i = 0; i < data.length; i++) {
    if (input.value === data[i].trashCanId || input.value === data[i].address) {
      newArr.push(data[i]);
      console.log(newArr);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    let results = document.createElement("div");
    results.classList.add("results");

    results.innerHTML = `
      <h3>Address: ${newArr[i].address}</h3> 
      <h3>Trashcan ID #: ${newArr[i].trashCanId}</h3> <button>Delete</button>
      <button>Add</button>
    `;
    console.log(results);

    document.querySelector(".results-container").append(results);
  }
}
