
//more practice ques on js
//wap to find the largest of three numbers using a function

function findLargestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest num`)
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest num`)
  } else {
    console.log(`${num3} is the largest number`);
  }
}

findLargestNumber(110, 23, 12);

// function countVowel(str) {
//   let cVowels = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
//       cVowels++;
//     }
//   }
//   console.log(`total no of vowels in string ${cVowels}`);
// }
// countVowel("India");

//or 

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let cVowel = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      cVowel++;
    }
  }
  console.log(`total vowels in string is ${cVowel}`);
}
countVowels("Hello my name is diya");

function checkPrimeNumber(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    console.log('number is prime');
  } else {
    console.log('number is not prime');
  }
}

checkPrimeNumber(343);

let arr = [1, 2, 3, 2, 4, 5, 2, 6];

function sortArray(arr) {

  for (let i = 0; i < arr.length; i++) {
    let temp;
    if (arr[i++] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[i++];
      arr[i++] = temp;
    }
  }
  printArray(arr);
}

function printArray(arr) {
  let newArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}
console.log("array after sorting");
sortArray(arr);

//wap to reverse the digits of a given number

function reverseNumber(number) {
  let rev = 0;
  while (number != 0) {
    let rem = number % 10;
    rev = rev * 10 + rem;
    number = Math.floor(number / 10);

  }
  console.log(`reverse number is ${rev}`);
}

reverseNumber(12345);