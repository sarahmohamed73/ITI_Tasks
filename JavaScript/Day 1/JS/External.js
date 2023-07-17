// console.log(number1); 
/*
  With Var : Undefined
  Without Var : Error number1 is not defined
*/
number1 = 3;
// console.log(number1); 
var number2 = 2.9;
var number3 = 0xff;
var firstName = "Sarah";
var middleName = 'Mohamed';
var lastName = `Abdelrahman`;
var flag = true;
console.log("This is the External JavaScript file");
/*
  When I Change The Value of Variable in Console tool It Will Change And I can Use The New Value Until I Refresh The Website
*/
firstName[3] = 'A';
console.log(firstName); // Not Change Because It Is Primitive
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);