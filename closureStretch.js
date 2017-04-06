var wrapLog = function (callback, name) {
  /* your code here */
  return function(val1, val2) {
    const sum = callback(val1,val2);
    const finalLog = `${name}(${val1}, ${val2}), => ${sum}`;
    console.log(finalLog);
    // console.log(name+"("+val1+","+val2+")"," => "+callback(val1,val2));
  }
};

const wrapLog = (callback, name) => (val1, val2) => {
  const sum = callback(val1,val2);
  const finalLog = `${name}(${val1}, ${val2}), => ${sum}`;
  console.log(finalLog);
}

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5

// function greeting({name: firstname, job, city}) {
//   const greetString = `hello ${firs} from ${city}`;
//   console.log(greetString);
// }

// const person = {
//   name: 'ali',
//   job: 'software',
//   city: 'vancouver'
// }

// greeting(person);




