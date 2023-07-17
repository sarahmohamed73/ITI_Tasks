// Q1:
let localVar = 90;
const printVariables = function(value1=1, value2=2, value3=3,...args) {
  console.log(localVar); // undefined 90
  localVar = 3;
  testingVar = 5;
  console.log("Variables: ", value1, value2, value3,...args);
  // return `Value 1 Is ${value1} , Value 2 Is ${value2} And Value 3 Is ${value3}`;
}

// Q2
const getName = function(username = prompt("Please Enter Your Username")) {
  if(username === "") {
    getName();
  } else {
    console.log(username);
  }
}