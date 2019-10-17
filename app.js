//Retreive from data.js
var tableData = data;
console.log(tableData);

//Reference to table body
var tbody = d3.select("tbody");
console.log(tbody)

//Console log data from data.js
var dataFilter = 0;
ufos = data
console.log(data)

data.forEach((UFOsighting) => {
    console.log(UFOsighting);
	var row = tbody.append("tr");
	Object.entries(UFOsighting).forEach(([key, value]) => {
        console.log(key, value);
		var cell = tbody.append("td");
		cell.text(value);
	});
});

//Enact filter submit button
var submit = d3.select("#submit");
submit.on("click", function() {
    //prevents refresh
    d3.event.preventDefault();
    d3.select(".summary");

    //datetime input
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    
    //filter
    var filteredData = ufos.filter(ufos => ufos.datetime === inputValue);
    buildTable(filteredData);
});

//looping
data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

