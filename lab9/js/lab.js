// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/09/2023

//Function
function Submit() {
  var text = document.getElementById("text");
  var newEntry = document.createElement('li');
  
  if (text.innerHTML === "Welcome!") {
    text.innerHTML = "";
    newEntry.textContent = "Initial text";
  } else {
    text.innerHTML = "Welcome!";
    newEntry.textContent = "This is my website!";
  }
  
  var blank = document.getElementById("blank");
  blank.innerHTML = ""; 
  
  if (text.innerHTML === "Welcome!") {
    blank.appendChild(newEntry);
  }
}






