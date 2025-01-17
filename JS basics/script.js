// 1.word and keywords
// word = not defined 
// like anit, hello, monitor and so on 

// keywords = reserved words 
// like const, var, let, if, else and so on 


// 2.Variable Constant Let
// var = variable -> changeable
// let = constant -> changeable 
// const = constant -> unchangeable

// 3.hoisting
// Hoisting is a JavaScript mechanism where variable and function declarations 
// are moved(or "hoisted") to the top of their containing scope during the compilation phase.
// This allows variables and functions to be used in your code before they are declared.

// console.log(a);
// var a = "anit shrestha";

// if i write console.log(a) before var a = "anit shrestha" it will give me undefined
// but if i write console.log(a) and didn't declare any variable of a, it will give me undefined

// 4.primitive and reference type
// primitive type = string, number, boolean, null, undefined, symbol , have brackets
// reference type = object , array, function, have curly brackets

// 5.conditionals
// if, else, else if
// i.
// var a = 10;
// if (a>5){
//     console.log("a is greatere than 5");
// }
// else{
//     console.log("a is less than 5");
// }

// ii.
// var b = 20;
// if(b > 20){
//     console.log("b is greater than 20");
// }

// else if(b < 20){
//     console.log("b is lesser than 20");
// }

// else{
//     console.log("b is equals to 20");
// }

// 6.Loops

// i.For loop
// syntax:
// for (initialization; condition; increment/decrement) {
    // Code to execute
//   }

// for (var i = 0; i<11; i++){
//     console.log(i);
// }
  
// for (let a = 1; a <= 10; a++){
//     console.log(a);
// }

// Q.Print the number from 25 - 50
// let a = 25;
// for(a=25; a<=50; a++){
//     console.log(a);
// }

// ii.While Loop
// syntax
// while (condition) {
    // Code to execute
//   }
  
// var a = 12;
// while (a<20){
//     a++;
//     console.log(a);

// }

// iii.Do while Loop
// syntax:
// do {
//     // Code to execute
//   } while (condition);

// let input;

// do{
//     input = prompt("Enter a number greater than 5:");
// }
// while(input<=5);
// console.log("You entered $(input)");

// iv.break and continue
// for (let i = 0; i < 5; i++) {
//     if (i === 3) break; // Stops the loop
//     console.log(i);
//   }
  
//   for (let i = 0; i < 5; i++) {
//     if (i === 3) continue; // Skips this iteration
//     console.log(i);
//   }

// for(let a = 0; a<=10; a++){
//     if(a == 5)break;
//     console.log(a);
// }

// for(let a = 0; a<=10; a++){
//     if(a == 5)continue;
//     console.log(a);
// }

// 7.Functions

// A function is a block of reusable code that performs a specific task. 
// Functions allow you to write modular, reusable, and organized code.