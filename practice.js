
// difference btw let ,var and const
// /the diff btw let ,var and const is that ,first of all these are used to declare and initialize the variable so difference in them is that with const only once we can declare the variable and initialise the value in if we do so again than it will generate an  error
// for ex:
// const a = 10;
// console.log(a);
// a = 5
// console.log(a);
// and if we talk about var and let so var is used in early js and let is used in ES6 js in var we can redeclare a variable and even reitiliase it but in let we can declare it once but we can reintilise it
//for ex:
// let a = 10;
// console.log(a);
// a = 5;
// console.log(5);

// var b = 40;
// console.log(b);
// var b = "diya tripathi"
// console.log(b);

// ans first ended it here
// write a function to check if no is even or odd
function checkEvenOrOdd(number) {
  if (number % 2 == 0) {
    console.log(`${number} is  an even number`);
  }
  else {
    console.log(`${number} is an odd number`);
  }
}

// checkEvenOrOdd(246);

//output of following code
console.log(2 + '3');
//output is 23 bcz in javascript if no added with string no than concatenation of no is occur js convert the no in string and than concat it

console.log(2 - '3')
//output is -1 js explicitly convert string into no so perform subtract operation on it

//declartion of an array in js and to find first and last elemnt and print it

let arr = [1, 23, 45, 67, 78, 90];
console.log('print first element of an array')
console.log(arr[0]);
console.log('print last element of an array')
console.log(arr[arr.length - 1])

//declartation of an array can also be done 
let arr1 = new Array();
arr1.push(23);
arr1.push(33);
console.log(arr1);

//hoisting dont know this ans plz explain this
//wap to reverse a string without using built-in fn
let string = "Apna College";
console.log("string in reverse order");
for (let i = string.length - 1; i >= 0; i--) {
  console.log(string[i]);
}

//diff btw == and === is that == only check the value whether they are equal or not do not check its type so it is loosly in nature while === not only check the value but also check ite data type too for ex

console.log(5 == '5')//it will return true as values are equl
console.log(10 === '10'); // it will return false as values are equal but there datatype is diff

//ques 8 closure in js
// i can explain this with ex in closure in this we can call an inner fn without calling parent function and also inner fn can access the property of outer fn this can happens  due to lexical scope for ex:
function outer() {
  let name = "Shradha ";
  return function inner() {
    console.log(`Hello ${name}`);
  }
}

let output = outer();
output();
//but i want plzz explain this topic in more clear way and want easy explanation with ex

let number = [10, 34, 56, 7, 9, 23, 13, 45, 67, 88];
function oddNoFromArray(number) {
  let output = number.filter((element) => element % 2 != 0)
  console.log(output);
}
console.log("all odd number from array are:")
oddNoFromArray(number);

//accessing value of name from object are:
const person = {
  name: 'John',
  age: 25
};
// console.log(person.name);

//Advance Question
//Promises in js is something that is used to handling asynchronoums data or we more often used it to handle api's calls as prmises consist of two para that is fulffiled or rejected so it retur wether our promise is fulfilled or rejected it also return pending which shows our promise is in pending state

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      console.log(num);
      resolve()
    }, 4000) //4ms
  })
}

let result = async () => {
  await getNum();

}

// console.log(result());

//please explain the concept of this keyword and also it behaviour

//dont now ques 13

//async/await

//async await basically used to deal with asynchronomus code this is the where we wait for some response from server or apis until there res not coming we can wait and once the res come we can move on further as our whole code depend on those calls they might give appropriate ans and may thorw error

//we can take previous ex where our output depend on the promise we waited until output has come we can other ex too

function printName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello shraddha ");

    }, 2000)
    resolve()
  })
}


async function Name() {
  await printName();
}
// console.log(Name());

//dont know about delegation plz explain this concept


//Hoisting explanation

// Hoisting means variable and function declarations are moved to the top of their scope during the execution phase.
// console.log(a); // undefined due to hoisting
var a = 10;

foo(); // Works because function declarations are hoisted
function foo() {
  console.log("Hello");
}

// `let` and `const` are not accessible before initialization.
// console.log(b); // ReferenceError
// let b = 20;
//Key point: Variables declared with var are hoisted with an initial value of undefined, while let and const are hoisted but cannot be accessed until initialized.


//closure:a closure is created when an inner function remebers and contionues to acess the variable of its outer fn even after outer fn has finshed its execution.this happens bcz of lexical scoping and how js handles function excution

//practical use of closure 
function counter() {
  let count = 0;
  return function incCount() {
    count++;
    return count;
  }
}

let incCounter = counter();
console.log("increament")
console.log(incCounter());
console.log(incCounter());
console.log(incCounter());
console.log(incCounter());