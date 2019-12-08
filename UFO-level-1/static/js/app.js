///////////////////////////////////// Add Data to HTML Table 

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through to append table with data
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

///////////////////////////////////// Add Filter using Button Click Event 

// Get a reference to the button
var button = d3.select("#filter-btn");

// Attach event 
button.on("click", () => {

    // Select the input element
    var inputElement = d3.select("#datetime");

    // Get the value of the element
    var inputValue = inputElement.property("value");
 
    // Clear out current data in table 
    tbody.html("");
    
    // Filter function 
    function dateSelection(dateval){
        return dateval.datetime == inputValue;
    }

    // Apply our filter
    var tableData = data.filter(dateSelection);
    
    // Loop through to append table with New Data
    tableData.forEach((newData) => {
        var row = tbody.append("tr");
        Object.entries(newData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});

///////////////////////////////////// Clear Filter and Fill Table with All Data 

// Get a reference to the button
var button = d3.select("#clr-filter");

// Attach event 
button.on("click", () => {

  var tbody = d3.select("tbody");

  // Clear out current data in table 
  tbody.html("");
  // Loop through to append table with data
  data.forEach((ufoData) => {
      var row = tbody.append("tr");
      Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

});