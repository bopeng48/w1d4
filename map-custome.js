var words = ["ground", "control", "to", "major", "tom"];



map(words, function(word) {
  return word.length;
});


function map(words,func)
{
  var holder = []
  for(var i = 0; i < words.length; i++)
  {
      holder.push(func(words[i]));
  }
  console.log(holder);
}


// console.log(words.forEach( function(word) {
//   return word.length;
// }
//   ));

// console.log("testing");
// words.forEach( function(word) {
//   console.log( word.length);});
// // above code works

// var testfunc = function(word) {
//   console.log( word.length);}


// console.log("**testing");
// words.forEach(testfunc );

// words.forEach(function(ele){console.log(ele);}) // works