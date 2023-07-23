let numbers = [2,1,3,2,7,2,8,4,3,6,10,9,12];
// 1- Sorting
//----> Ascending
let ascendingSort = numbers.slice().sort((a,b) => a - b);
//----> Descending
let descendingSort = numbers.slice().sort((a,b) => b - a);
console.table({Ascending: ascendingSort, Descending: descendingSort});

// 2- Filter
let largerFive = numbers.filter(item => item > 5);
console.log(largerFive);

// 3- Max - Min
let minNumber = numbers[0];
let maxNumber = numbers[0];
for(let index in numbers) {
  if(numbers[index] > maxNumber) {
    maxNumber = numbers[index];
  } else if(numbers[index] < minNumber) {
    minNumber = numbers[index];
  }
}
console.table({"Min Number": minNumber, "Max Number": maxNumber});

// 4- Multiplied by 5 with Array.from
let multipliedArray = Array.from(numbers, item => item * 5);
console.log(multipliedArray);

// 5- Remove Repeated
console.log(numbers);
numbers = numbers.filter((item,index) => numbers.indexOf(item) === index);
console.log(numbers);