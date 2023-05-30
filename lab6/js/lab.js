// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/02/2023

document.addEventListener('DOMContentLoaded', function() {
  // Define Variables
  var myTransport = ["Toyota Prius", "Bus"];

  // Create an object for my main ride
  var myMainRide = {
    make: "Toyota",
    model: "Prius",
    color: "Black",
    year: 2014,
    age: function() {
      return 2023 - this.year;
    }
  };

  // Get the output element 
  var outputElement = document.getElementById("output");

  // Build the output content
  var outputContent = "";
  outputContent += "Kinds of transportation I use: " + myTransport.join(", ") + "<br>";
  outputContent += "My Main Ride: <pre>" + JSON.stringify(myMainRide, null, '\t') + "</pre>";

  // Append the output to the output element
  outputElement.innerHTML = outputContent;
});