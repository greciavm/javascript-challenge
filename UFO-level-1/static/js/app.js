// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

console.log(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", enterdate);
form.on("submit",enterdate);

// Complete the event handler function for the form
function enterdate() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  tbody.html("");

  // filterdata.forEach(function(enterdate) {
  //   console.log(enterdate);
  //   var row = tbody.append("tr");
  //   Object.entries(enterdate).forEach(function([key, value]) {
  //     console.log(key, value);
  //     // Append a cell to the row for each value
  //     // in the data object
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
  
  filteredData.forEach((enterdate) => {
    var row = tbody.append("tr");
    Object.entries(enterdate).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

