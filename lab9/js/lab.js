// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/09/2023
  
//import

//Define
let newEntry = document.createElement('li');
let text = document.getElementById("text");
let blank = document.getElementById("blank");

//Function
function Submit() {
  text.innerHTML = "Welcome!"
  newEntry.textContent = "This is my website!"
  blank.appendChild(newEntry);
}




