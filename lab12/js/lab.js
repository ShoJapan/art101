// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/18/2023
  
//Define
var button = document.getElementById("button");
var output = document.getElementById("output");

//Function
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor";
  }
  else if (mod == 1){
    return "Ravenclaw";
  }
  else if (mod == 2){
    return "Slytherin";
  }
  else if (mod == 3){
    return "Hufflepuff";
  }
};


//Output
button.addEventListener("click", function() {
  name = document.getElementById("input").value;
  house = sortingHat(name)
  newText = "<p>The Sorting Hat has sorted you into "+ house +"</p>";
  output.innerHTML = newText;
});