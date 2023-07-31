// Exercise 1

function triangle (height) {
  for(let row = 1; row <= height; row++) {
    let result = "";
    for(let col = 1; col < row; col++) {
      result += col + " ";
    }
    console.log(result);
  }
}

triangle(5);
console.log("");
console.log("");

// Exercise 2

function fizzBuzz(n) {

  for(let i = 1; i <= n; i++) {
  
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
  }
}

fizzBuzz(45);
console.log("");
console.log("");

// Exercise 3
function calculateBmi(weight, height) {
  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    return "Less Weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    return "Very Overweight";
  } else (bmi > 39.9); {
    return "Obesity";
  }
}

const result = calculateBmi(96, 176);
console.log(result);
console.log(" ");
console.log(" ");

//Exercise 4
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(function(e) {
//   return e % 2 === 0;
// });

// console.log(evenNumbers);

function resultNumber() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenNumbers = numbers.filter(function(e) {
    return e % 2 === 0;
  });
    return evenNumbers;
}
console.log(resultNumber());
console.log(" ");
console.log(" ");

//Exercise 5
function separator() {
  let word = "Hello World";
  let arrayWord = word.split(" ");
  return arrayWord;
}

console.log(separator());