//Ternary Operator: it is concise and shortcut of if else statement.
/*
syntax:
condition?true:false
*/

//Example: check number is negative or positive

// var num = 45

// //using if else statement

// if(num>0){
//   console.log("Number is postive")
// }
// else{
//   console.log("Number is Negative")
// }

// console.log("------------------")

//using ternary Operator:
// num>0 ? console.log("Number is postive") : console.log("Number is Negative")

// var num = 45

// var result = num > 0 ? "Number is postive" : "Number is Negative"

//console.log(result)

// console.log(num > 0 ? "Number is postive" : "Number is Negative")

//Once you've nested condtion-

//gender=male ---> age >=21 --->Bhai Sadi Karle

// var gender = "famle"
// var age = 20

//var result = gender == "male"? age >= 21 ? "Bhai Sadi Karle": "Tu Chhota Hai" : "You're not male"

//console.log(result)

// console.log(gender == "male"? age >= 21 ? "Bhai Sadi Karle": "Tu Chhota Hai" : "You're not male")

//using logical Operator: 

var gender = "male"
var age = 22

console.log(gender == "male" && age >= 21 ? "Bhai Sadi Karle" : "You're not Elibible."
)