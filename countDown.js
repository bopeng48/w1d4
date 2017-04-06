var countdownGenerator = function (x) {
  var pH = x;
  return function() {if(pH > 0)
  {
    console.log("T-minus "+ pH-- + "...");
  }
  else if ( pH == 0)
  {
    pH--;
    console.log("Blast Off!");
  }
  else
  {
    console.log("Rockets already gone, bub!");
  }
}
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!