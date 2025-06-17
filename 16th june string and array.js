 //STRING QUESTIONS 

//1. **Reverse a String**  
  // Write a function `reverseString(str)` that takes a string and returns it reversed.  
   //Example: `"hello" → "olleh"`

   let  originalString = "vyas";
let reversedString = originalString.split('').reverse().join('');
console.log("Reversed string:", reversedString);

//2. **Check Palindrome**  
   //Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
   //Example: `"Madam" → true

   function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Example usage
console.log(isPalindrome("Madam")); // Output: true

   //3. **Count Vowels**  
   //Write a function `countVowels(str)` to count the number of vowels in the given string.  
  // Example: `"JavaScript" → 3`

  function countVowels(str) {
  str = str.toLowerCase();
  const vowels = 'aeiou';
 
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
const input = "vyas sneha";
console.log(`Vowel count in "${input}":`, countVowels(input)); // Output: 3

//4. **Capitalize First Letter of Each Word**  
  // Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
  // Example: `"hello world" → "Hello World"`

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeWords("my favorite"));

//5. **Character Frequency**  
   //Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
   //Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`

function charFrequency(str) {
  let freq = {};

  for (let char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}
console.log(charFrequency("bbccdd"));



//ARRAY QUESTIONS (5)

//1. **Remove Duplicates**  
  // Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
   //Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

//2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`

function flattenArray(arr) {
  return arr.flat();
}
console.log(flattenArray([[1, 2], [3, 4], [5]]));

// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }

function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}
console.log(findMaxMin([4, 1, 9, -2]));

// 4. **Sum of Even Numbers**  
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`

function sumEven(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumEven([1, 2, 3, 4, 5, 6]));

// 5. **Group by Type**  
//    Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`

function groupByType(arr) {
  let result = {};

  for (let item of arr) {
    let type = typeof item;
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(item);
  }

  return result;
}
console.log(groupByType([1, 'a', true, 2, 'b']));