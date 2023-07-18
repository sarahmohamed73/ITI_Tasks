// Q(1)
const pascalCase = sentence => {
  let result = sentence[0].toUpperCase();
  for(let i = 1; i < sentence.length; i++) {
    if(sentence[i] == " ") {
    result += sentence[i];
    result += sentence[++i].toUpperCase();
    } else {
    result += sentence[i];
    }
  }
  return result;
}

// Q(2)
const findLongestWord = sentence => {
  let word = sentence.split(" ");
  let longestWord = word[0];
  for(let i = 1; i < word.length ; i++) {
    if(word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}

// Q(3)
const alphabeticalOrder1 = sentence => {
  let lowerSentence = sentence.toLowerCase();
  let alphaOrder = lowerSentence.split("").sort().join("");
  let upperLetter = [];
  let spaces = []
  let result = "";
  for(let i = 0; i < sentence.length ; i++) {
    if (sentence[i] == " ") {
      spaces.push(i);
    } else if (sentence[i] == sentence[i].toUpperCase()) {
      upperLetter.push(sentence[i].toLowerCase());
    }
  }
  for(let i = 0; i < alphaOrder.length ; i++) {
    if(alphaOrder[i] == " ") {
      continue;
    } else if (upperLetter.indexOf(alphaOrder[i]) != -1) {
      result += alphaOrder[i].toUpperCase();
      upperLetter.splice(upperLetter.indexOf(alphaOrder[i]),1);
    } else {
      result += alphaOrder[i]
    }
  }
  let resultArr = result.split("");
  for(let i = 0; i < spaces.length; i++) {
    resultArr.splice(spaces[i],0," ");
  }
  result = resultArr.join("");
  return result;
}

const alphabeticalOrder2 = sentence => {
  let spaces = [];
  let str = "";
  for(let i = 0; i < sentence.length ; i++) {
    if (sentence[i] == " ") {
      spaces.push(i);
    } else {
      str += sentence[i];
    }
  }
  let result = str.split("").sort(function(a, b) {
    return a.localeCompare(b);
  });
  
  for(let i = 0; i < spaces.length; i++) {
    result.splice(spaces[i],0," ");
  }
  return result.join("");
}

// Q(4)
const getMonthName = () => {
  let date = new Date();
  // let month = date.getMonth();
  // let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let month = date.toLocaleString("default", {month: "long"});
  // return months[month];
  return month;
}

// Q(5)
const randomArray = () => {
  let result = [];
  let randomNumber;
  while(result.length < 5) {
    randomNumber = Math.floor(1 + Math.random() * 10);
    if(result.indexOf(randomNumber) !== -1) {
      continue;
    } else {
      result.push(randomNumber);
    }
  }
  return result;
}

const checkNumber = (number) => {
  while(isNaN(number) || number == 0) {
    number = Number(prompt("Please Enter A Number!"));
  }
  return number;
}

// Q(6)
const twoNumers = () => {
  let number1 = Number(prompt("Please Enter The First Number"));
  let number2 = Number(prompt("Please Enter The Second Number"));
  console.log(checkNumber(number1));
  console.log(checkNumber(number2));
}

// Q(7)
const sumNumbers = () => {
  let numOfNumber = checkNumber(Number(prompt("Please Enter How Many Number You Want To Sum")));
  let sum = 0;
  for(let i = 1; i <= numOfNumber; i++) {
    sum += checkNumber(Number(prompt(`Enter Number ${i}`)));
  }
  return sum;
}