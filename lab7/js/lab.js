// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/04/2023

//Function
function sortUser() {
  var userName = window.prompt("Hi. Please tell me your name so I can sort it propertly.");
  console.log("userName =");
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArroySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//Output
document.writeln("Here's your sorted name: ",
  sortUser(), "</br>")
