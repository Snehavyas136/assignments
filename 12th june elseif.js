//1. Even or Odd Checker

let number = 7; // you can change this value

if (number % 2 === 0) {
  console.log(`${number} is Even.`);
} else if (number % 2 !== 0) {
  console.log(`${number} is Odd.`);
} else {
  console.log("Invalid input.");
}

//2. Positive, Negative, or Zero
let num = ("Enter a number:");
num = Number(num);

if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

//3. Age-based Eligibility

let age = ("Enter your age:");
age = Number(age);

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}

// 4. Number Range Validator
// Ask the user to input a number. Use if-else to check whether the number lies within the range 10 to 20, inclusive. Display "In range" or "Out of range".

let x = ("Enter a number:");
number = Number(number);

if (number >= 10 && number <= 20) {
  console.log("In range");
} else {
  console.log("Out of range");
}
// 5. Check Number Equality
// Take two numbers from the user. Use if-else to check if both numbers are equal or not. If they are not equal, indicate which one is larger.
let a = ("Enter first number:");
let b = ("Enter second number:");
a = Number(a);
b = Number(b);

if (a === b) {
  console.log("Numbers are equal");
} else if (a > b) {
  console.log(a + " is bigger");
} else {
  console.log(b + " is bigger");
}
// 6. Simple Grading System
// Write a program that takes a score (0–100) as input and assigns a grade based on the following:

// 90 and above → Grade A

// 75–89 → Grade B

// 50–74 → Grade C

// Below 50 → Fail

// Use nested or chained if-else statements.


let score = ("Enter your score:");
score = Number(score);

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// 7. Divisibility Checker (5 and 11)
// Prompt the user to input a number. Use if-else to check if it is divisible by both 5 and 11. Show a message based on the result.

let n = ("Enter a number:");
n = Number(n);

if (n % 5 === 0 && n % 11 === 0) {
  console.log("Divisible by 5 and 11");
} else {
  console.log("Not divisible by 5 and 11");
}
// 8. Find the Largest of Three Numbers
// Take three numbers as input. Use multiple if-else statements to find and print the largest number among them.

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}


// 9. Leap Year Validator
// Ask the user to enter a year. Use conditions to check whether it is a leap year or not, using the correct logic:

// Leap year if divisible by 4, but not by 100, unless also divisible by 400.


let year = ("Enter a year:");
year = Number(year);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
// 10. Vowel or Consonant
// Take a single alphabet character as input from the user. Use if-else to check whether it's a vowel (a, e, i, o, u) or consonant.

let ch =("Enter a single letter:").toLowerCase();

if ("aeiou".includes(ch)) {
  console.log(ch + " is a vowel");
} else {
  console.log(ch + " is a consonant");
}