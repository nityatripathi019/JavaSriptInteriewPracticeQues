// wap to return the longest word from a string if there are multiple word than return the first one encountered
 
// let str = "welcome to javascript proggramming";

// function findLongestWord(str){
// if(str.trim().length==0){
//     return false;
// }
//   let longest ="";
//     word = str.split(" ");
//     // console.log(word);
//     for(word of word){
//       if(word.length>longest.length){  
//         longest = word ;
//       }
//     }
//     console.log(longest);
// }
// console.log(findLongestWord(str));

// function findLongestWord(str){
//   if(str.trim().length==0){
//     return false;
//   }

//  else{
//   word = str.split(" ");
//   console.log(word);
//   word = word.sort((a,b)=> b.length-a.length);
//      return word[0];
//  }
// }
  
// hash tag generator
// we need to implement a function that generate a hash tag from a given input string
// input string should be converted to a hash tag where each word is capitalized and cocatenated together without spaces
// if input string is more than 280 character and if string is empty or contains white spaces than it returns false
// input: my name is thapa technical
// output:#MyNmaeIsThapaTechnical

let str1="welcome to world of coding";

// function generateHash(str){
//     if(str.length>200||str.trim()===0){
//         return false;

//     }

//     str = str.split(" ");
//     // console.log(str);
//   word =  str.map((value)=>value.replace(value[0],value[0].toUpperCase()));
//    return `#${word.join("")}`;
 
// }
  
// console.log(generateHash(str1));
