const data = [
  { address: "10 Davis Rd. Bangor, Me 04401", trashCanId: "620336996" },
  { address: "12 Davis Rd. Bangor, Me 04401", trashCanId: "620336993" },
  { address: "55 Deer Isle Rd. Bangor, Me 04401", trashCanId: "620336991" },
  { address: "35 Deer Isle Rd. Bangor, Me 04401", trashCanId: "620336997" },
  { address: "23 Fort Knox Ave. Bangor, Me 04401", trashCanId: "620336983" },
  { address: "605 Finson Road. Bangor, Me 04401", trashCanId: "620336987" },
  { address: "27 Blue Hill East. Bangor, Me 04401", trashCanId: "620336990" },
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

const input = document.querySelector("input");

const searchButton = document.querySelector("#search-btn");

searchButton.addEventListener("click", search);

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    // console.log("Enter");
    search();
  }
});

function search() {
  clearResults();
  console.log("Searching...");
  let newArr = [];

  for (let i = 0; i < data.length; i++) {
    const address = data[i].address.toUpperCase();
    const searchInput = input.value.toUpperCase();

    if (address.indexOf(searchInput) > -1) {
      newArr.push(data[i]);
    }

    if (searchInput === data[i].trashCanId || searchInput === address) {
      newArr.push(data[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    let results = document.createElement("div");
    results.classList.add("results");

    results.innerHTML = `
      <h3 id="address">Address: ${newArr[i].address}</h3> 
      <h3 id="trashcanId">Trashcan ID #: ${newArr[i].trashCanId}</h3> <button id="delete" >Delete</button>
      <button id="add">Add</button>
    `;

    document.querySelector(".results-container").append(results);
  }
}

function clearResults() {
  const resultsContainer = document.querySelector(".results-container");
  while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
  }
  console.log("Clear results");
}
