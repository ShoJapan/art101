/* Author: Sho Serrano
 * Created: 04-27-2023
 * License: Public Domain
 */

document.addEventListener('DOMContentLoaded', function() {
    // Define Variables
    var make = "Ford";
    var model = "Toyota";
    var color = "Black";
    var year = 2014;
    var age = 2023 - year;
  
    // Get the output element
    var outputElement = document.getElementById("output");
  
    // Set the content of the element
    outputElement.innerHTML = "Make: " + make + "<br>" +
      "Model: " + model + "<br>" +
      "Color: " + color + "<br>" +
      "Year: " + year + "<br>" +
      "Age: " + age + "<br>";
  });