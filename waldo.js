// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }

  arr.forEach(found);
}

function actionWhenFound(currVal,index) {
  if(currVal == "Waldo")
  console.log("Found him at "+index,"!");
console.log(" done from within actionWHenFound");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// change
// more change
