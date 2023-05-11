// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/09/2023
  
//import

//Define
var newEntry = document.createElement('li');
var text = document.getElementById("text");
var blank = document.getElementById("blank");

//Function
function Submit() {
  text.innerHTML = "Welcome!"
  newEntry.textContent = "This is my website!"
  blank.appendChild(newEntry);
}




