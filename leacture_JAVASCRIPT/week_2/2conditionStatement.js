//Conditional Statement: So that on the basis of condition, we can provide user understandable statement/msg to the user.

//There are following types of conditional statement: 
//1. if statement
//2. if else statement
//3. if else if else statement


//1. if statement: in the case if statement- if the condition is true then code inside if block will execute otherwise code inside if block skips.
/*
syntax: 
if(condition)
{
   //code if condition is true, some statement you can 
   provide.
}
*/

//Examples: check number is negative

// var num = -10
// var condition = num < 0

// if(condition){
//   console.log("Number is negative")
// }

//var atmPin = "12346"

//var condition = atmPin==="12345"

// if(atmPin==="12345"){
//   console.log("Welcome to SBI ATM!")
// }

// var age = 18

// if(age >= 21){
//   console.log("Eligible for marriage.")
// }

//Note: in the case if statement, you're able to provide statement only if the condition is true, not providing any statement if the condition is false, which can hamper the user exeprience.

//Solution- if else statement:
//2. if else statement: in this case if the condition is true then code inside if block will execute otherwise code inside else block will exectute.

/*
syntax:
if(condition){
  if the condition is true
}
else{
  if the condition is false
}

*/

// var age = 34

// if(age >= 21){
//   console.log("You're eligible for marriage")
// }
// else{
//   console.log("Sorry!, You're still chhotu")
// }


var atmPin = "12347"

if(atmPin === "12345"){
  console.log("Welcome to SBI ATM!")
}
else{
  console.log("Invalid ATM pin, kindly try again.")
}













//if else statement: 
//if block: when condition is true
//else block: when condition is false

//Example: 
// var username = "rakesh@gmail.com"

// if(username=="rakesh@gmail.com"){
//   console.log("Logged in successfully")
// }
// else{
//   console.log("Invalid username.")
// }

//Limitation: once you've more than one condition, then if else statement is not the best choice.

//Solution: 
//if else if else statement: 
//1. it is the best choice once you've more than one conditon.
//2. Among many condition whichever the condition is true then code inside that block will execute and if none of conditions are true then code inside else block will execute.

/*
if(condition1){
   if condition is true
}
else if(condition2){
  if conditino2 is true
}
else if(condition3){
 if condition3 is true
}
else{
   if none of above condtions are true.
}

*/

//Examples: check a number is negative, positive, zero

// var num = 45

// if(num==0){
//   console.log("Number is Zero")
// }
// else if(num>0){
//   console.log("Number is positive")
// }
// else if(num<0){
//   console.log("Number is negative")
// }
// else{
//    console.log("Invalid Number")
// }

//Note: use else block always for hendling invalid data.

//Examples: print dayName on the behalf dayNumber where first day is Monday

// var dayNumber = 2

// if(dayNumber==1){
//   console.log("Its Monday")
// }
// else if(dayNumber==2){
//   console.log("Its Tuesday")
// }
// else if(dayNumber==3){
//   console.log("Its Wednesday")
// }
// else if(dayNumber==4){
//   console.log("Its Thursday")
// }
// else if(dayNumber==5){
//   console.log("Its Friday")
// }
// else if(dayNumber==6){
//   console.log("Its Saturday")
// }
// else if(dayNumber==7){
//   console.log("Its Sunday")
// }
// else{
//   console.log("Invalid Day Number")
// }

//Print Job Lag Gai! if degree is MCA and percentage >= 80

//Nested if else statement: when one condition is connected to another condition, in this you can use nested if else statement(if inside if).
/*

//outer if
if(condition){

    //inner if
    if(subCondtion){
        
    }
    else{
    
    }
}
else{

}
*/

//Example: Print "Job Lag Gai!" if degree is MCA and percentage >= 80

//process: degree is MCA
//                  true
//            percentage >= 80
//                  true
//                    Job Lag Gai?
//Degree is MCA ---> percentage>=80 ---> FullStackCertificate
//Degree is BTECH ---> percentage>=80

// var degree = "MCA"
// var percentage = 80
// var isFullStack = false

// if(degree =="MCA"){
//     console.log("Degree varified successfullly.")
  
//     if(percentage>=80){
//       console.log("Percentage varified successfully.")
      
//        if(isFullStack){
//          console.log("Full Stack Certificate varified successfully.")
//          console.log("Congratualation! Job Lag Gai")
//        }
//       else{
//         console.log("Don't have Full Stack Certificate, do from Ducat!")
//       }
//     }
//     else{
//       console.log("You have not met percentage criteria")
//     }
// }
// else if(degree =="BTECH") {

//   console.log("Degree varified successfullly.")

//   if(percentage>=80){
//     console.log("Percentage varified successfully.")
//     console.log("Congratualation! Job Lag Gai")
//   }
//   else{
//     console.log("You have not met percentage criteria")
//   }
     
// }
// else{
//    console.log("Don't have MCA and BTECH Degree.")
// }

//Conclusion: 
//1. in the case of nested if else statement(when one condition is depended on another condtion).
//2. it makes code less readable and harder to maintain, and every time. 
//3. for each condition, you're having to write seperate if else statement, in this way you're also writing duplicate code which is not recommended as a developer.

//Note: if you want to give msg/statement to users at every level/condition then this nested if else is the best choice.