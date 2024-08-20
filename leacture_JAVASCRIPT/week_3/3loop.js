//Why Loop?

//if i ask you to print Welcome to Ducat 10 times?
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")
// console.log("Welcome to Ducat")

//there is following issues while writing code like above:
//1. you're repeating the same line of code which means you're writing duplicate code.
//2. your program becomes lenghty. less readable, and harder to maintain.

//Loop: it is a control statement which is used to execute same line until the given condition is true.

//in the case of loop three things are important:
//startingPoint: decides from where you need to start your loop
//EndingPoint: How many times you need to run your code.
//Condition: it is used to control/stop/start your loop

//there are following types of loop in javascript
//while loop:
//do-while loop:
//for loop:

//loop: something is in running condition.

//while loop: Used to execute same lines of code until the given condition is true.
/*
syntax: 

while(condtion){
   //lines of code if condition is true.
}

*/

//Examples: Infinte Loop

// console.log("Before Loop")

// var count = 0

// while(true){
//   console.log("Welcome to Ducat", ++count)
// }

// console.log("After Loop")


//How to save your self from infinite loop?
//Solution: Condition

// var num = 1

// console.log("Before Loop")

// while(num <= 40){
//   console.log("Welcome To Ducat")
//   num = num + 1
// }

// console.log("After Loop")

//Note: every round of loop is know as iteration.

//Examples: print even number between 1 to 20 including 1 and 20

// var sp = 1
// var ep = 20

// while(sp <= ep){

//   //logic to print only even number
//   if(sp%2==0){
//     console.log("Even Number", sp)
//   }
//   else{
//     console.log("Odd Number",sp)
//   }
  
//   sp++
// }

//Example: find out the total sum, average between 1 to 10 including 1 and 10

// var sp = 1

// var sum = 0

// while(sp <= 10){

//   sum = sum + sp
  
//   sp++
// }

// console.log("Total:", sum)
// console.log("Average:",sum/10)


//find out the product

// var sp = 1

// var product = 1

// while(sp <= 10){

//     product = product * sp

//   sp++
// }

// console.log("Product:", product)

//1*2*3*4*5*6*7*8*9*10 = 3628800


//find out the factorial of 5










//while loop examples:


//Example: print table of 2

// var sp = 1

// while(sp<=10){
//   console.log(2*sp++)
// }

//Example:table of any number

// var sp = 1
// var num = 5

// while(sp<=10){
//   console.log(num,"*",sp,":",num*sp++)
// }

//Example: print 1 to 10 in one line

// var bag = ""

// var sp =1

// while(sp <= 10){

//   bag = bag + sp+" "

//   sp++
// }

// console.log(bag)