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
  var inputdate = d3.select("#datetime");
  var inputcity = d3.select("#city");
  var inputstate = d3.select("#state");
  var inputcountry = d3.select("#country");
  var inputshape = d3.select("#shape");

  // Get the value property of the input element
  var valuedate = inputdate.property("value");
  var valuecity = inputcity.property("value");
  var valuestate = inputstate.property("value");
  var valuecountry = inputcountry.property("value");
  var valueshape = inputshape.property("value");
  
  console.log(valuedate, valuecity, valuestate, valuecountry, valueshape);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => 
    ufo.datetime === valuedate ||
    ufo.city === valuecity ||
    ufo.state === valuestate ||
    ufo.country === valuecountry ||
    ufo.shape === valueshape );

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

