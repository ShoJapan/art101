// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/18/2023
  
function fizzBuzzBoom() {
  var maxNums = parseInt(document.getElementById("max").value);
  var num0 = parseInt(document.getElementById("num0").value);
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var text0 = document.getElementById("text0").value;
  var text1 = document.getElementById("text1").value;
  var text2 = document.getElementById("text2").value;
  var text3 = document.getElementById("text3").value;

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  for (var i = 1; i <= maxNums; i++) {
    var output = "";

    if (i % num0 === 0) {
      output += text0;
    }
    if (i % num1 === 0) {
      output += text1;
    }
    if (i % num2 === 0) {
      output += text2;
    }
    if (i % num3 === 0) {
      output += text3;
    }

    var paragraph = document.createElement("p");
    paragraph.textContent = i + " " + output;
    outputDiv.appendChild(paragraph);
  }
}