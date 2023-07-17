// Q1 (a):
// console.log(value1, value2, value3);
// Not Defined Because It Is Local Variable

// Q1 (c):
  let result = printVariables(3,7,9);
  console.log(result); 

// Q1 (d):
printVariables(3,5); // 3 5 undefined
printVariables(3,5); 

// Q1 (e):
printVariables(3,5,7,9,1); 

// Q1 (f):
console.log(localVar); // Not Defined
console.log(testingVar); // Not Defined

// Q1 (g):
printVariables();
console.log(localVar); // Not Defined
console.log(testingVar); // 5

// Q1 (h):
console.log(localVar); // 90 - 90 - 90 - 90
printVariables();
console.log(localVar); // 90 - 90 - 90 - 3

// Q2
getName();