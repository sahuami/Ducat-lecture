//Logical Operator: 
//it is just shortcut and best version of nested if else, or you can say it is replace of nested if else in much more concise way.

//Logical Operator replace of Nested if else statement: one condition is connected to another set of condition.

//there are following types of logical operator: 
//1. AND Operator(&&)
//2. OR Operator(||)
//3. NOT Operator(!)

//1. AND Operator(&&): 
//why: once you have multiple condtions connected to each other then AND operator is the best choice.
//when all conditions are true then only AND(&&) return true, and if any of the condtion is false then it will return false.

/*
syntax:
if(conditino1 && condition2 && condtion3){
    if all conditions are true
}
else{
 if any of ther condtion is false
}

Table: 
A      B      C        A && B && C
TRUE   TRUE   TRUE         TRUE
FALSE  TRUE   FALSE        FALSE
TRUE   FALSE  TRUE         FALSE
FALSE  FALSE  FALSE        FALSE
TRUE   TRUE   FALSE        FASLE

Note: AND Operator searches for next true, it finds false anywhere then it makes entire expression false.
*/

//Example: age marriage eligibility for male and female

// var gender = "male"
// var age = 45

//without logical operator

// if(gender=="female"){

//   if(age >= 18){
//         if(age <= 35){
//           console.log("Congratulations Lady!, You're eligible for marriage.")
//         }
//        else{
//          console.log("Sorry, You're getting old soon.")
//        }
//   }
//   else{
//     console.log("Sorry, You're still chhoti.")
//   }
  
// }
// else if(gender =="male"){

//   if(age >= 21){
//     if(age <= 40){
//       console.log("Congratulations Man!, You're eligible for marriage.")
//     }
//    else{
//      console.log("Sorry, You're getting old soon.")
//    }
//   }
//   else{
//   console.log("Sorry, You're still chhota.")
//   }
  
// }
// else{
//   console.log("Invalid Gender, Please try again.")
// }

//using logical AND operator

// var gender = "female"
// var age = 21

// if(gender=="female" && age >= 18 && age <= 35){
//   console.log("Congratulations Lady!, You're eligible for marriage.")
// }
// else if(gender=="male" && age >= 21 && age <= 40){
//   console.log("Congratulations Man!, You're eligible for marriage.")
// }
// else{
//   console.log("Sorry, You haven't met the criteria")
// }

//Examples: 

// var correctUsername = "admin"
// var correctPassword = "12345"

// var enteredUsername = "admin"
// var enteredPassword = "12345"

// if(correctUsername == enteredUsername && correctPassword == enteredPassword){
//     console.log("Logged In Successfully")
// }
// else{
//   console.log("Invalid username and password")
// }


//2. Logical OR(||) Operator: Among Many conditions if any of the condition is true then it will return true otherwise it will return false.

/*
syntax:
if(condition1 || condition2 || condition3 || condtion4){
    if any of the condition is true
}
else{
  if none of above conditions are true.
}

Table:

A       B       C         A || B || C
TRUE   TRUE    TRUE           TRUE
FALSE  FALSE   FASLE          FALSE
TRUE   FALSE   TRUE           TRUE
FALSE  FALSE   TRUE           TRUE
TRUE   TRUE    FALSE          TRUE

Note: OR Operator finds first true, if any conditions are not returning true then it will make entire expression as false
*/


//Example: check a character is vowel or consonant

// var char = 't'

// if(char=='a' || char =='e' || char=='u' || char =="o" || char =="i"){
//     console.log(char,"is vowel")
// }
// else{
//     console.log(char,"is consonant")
// }

//Example: do party on following situation
//if days are monday, wednesday, and friday
//if amount >= 500

// var dayName = "monday"
// var amount = 400

// if((dayName =="monday" || dayName =="wednesday" || dayName =="friday") && amount >= 500){
//   console.log("Let's do party")
// }
// else{
//   console.log("No Party")
// }

//3. Not Operator(!): if given condition is true then it make false and vice versa

// var isFriday = false
// var isRaining = true

// if(!isFriday && !isRaining){
//   console.log("Will do Bhajan")
// }
// else{
//   console.log("No Bhajan, Only Party")
// }