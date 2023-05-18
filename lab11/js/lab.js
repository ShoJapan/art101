// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/09/2023
  
//Define
var hidden1 = document.querySelector(".hidden1")
var hidden2 = document.querySelector(".hidden2")
var hidden3 = document.querySelector(".hidden3")
var button1 = document.querySelector(".button1")
var button2 = document.querySelector(".button2")
var textRed = document.getElementById("textRed")
var textBlue = document.getElementById("textBlue")
var textGreen = document.getElementById("textGreen")

//Function
function colorChallenge() {
  if (hidden1.classList.color = "red") {
    hidden1.classList.toggle("hidden1");
  };
  hidden1.classList.toggle("redText");
};
function colorProblems() {
  if (hidden2.classList.color = "blue") {
    hidden2.classList.toggle("hidden2");
  };
  hidden2.classList.toggle("blueText");
};
function colorResults() {
  if (hidden3.classList.color = "green") {
    hidden3.classList.toggle("hidden3");
  };
  hidden3.classList.toggle("greenText");
};
function colorButton1() {
  button1.style.backgroundColor = "blue";
  button2.style.backgroundColor = "blue";
};
function colorButton2() {
  button1.style.backgroundColor = "coral";
  button2.style.backgroundColor = "coral";
};
function resetColors() {
  button1.style.backgroundColor = "blue";
  button2.style.backgroundColor = "coral";
}

//Output
textRed.addEventListener("click", colorChallenge)
textBlue.addEventListener("click", colorProblems)
textGreen.addEventListener("click", colorResults)