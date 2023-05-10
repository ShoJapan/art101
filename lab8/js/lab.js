// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/09/2023

//Function
function isEven(x) {
  return (x % 2 == 0);
}

//Define
array = [10, 81, 4, 16, 42, 144, 10000]

//Console Log
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

//Output
console.log("The array: ", array, "</br>");
document.writeln("The array: ", array, "</br>");

var result = array.map(isEven);
console.log("Evennesss of array: ", result);
document.writeln("Evennesss of array: ", result);

document.writeln("                                                                                                                                                                                                                                                 ", "</br>");


var result = array.map(function(x) {
  return x ** 0.5;
})
console.log("Squareroot of array: ", result);
document.writeln("Squareroot of array: ", result);