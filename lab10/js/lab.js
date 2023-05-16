// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/09/2023
  
//import

//Define
let submitExample = document.querySelector("#submitExample")
let textExample = document.querySelector("#testExample")
let Text = document.getElementById("textExample")
let newEntry = document.createElement('li')
let list = document.getElementById("list")

//Function
submitExample.addEventListener("submit", function(e) {
  e.preventDefault();
  newEntry.textContent = sortUser()
  console.log(sortUser())
  list.appendChild(newEntry);
});


function sortUser() {
  var userName = Text.value;
  console.log("userName =");
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArroySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}


