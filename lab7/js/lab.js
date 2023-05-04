// Author: Sho Serrano <shlserra@ucsc.edu>
// Date: 5/02/2023

//Define Variables
myTransport = ["Toyota Prius", "Bus"];

// create an object fore my main ride
myMainRide = {
  make: "Tyota",
  model: "Prius",
  color: "Black",
  year: 2014,
  age: function(){
    return 2023 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");