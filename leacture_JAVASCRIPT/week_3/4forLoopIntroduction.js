//for loop: 
//it keeps on executing block of code until the condition is true.

//why for loop: there are following reason.
//1. as compare while and do-while loop, for loop is more concise and short syntactically

//2. in the case of while and do-while loop, you're having to write three importants statement of every loop at different places but using for loop you're gonna write these thing in the same line so that you can focus on main logic.

//in case of continue statement in while loop, we'are having to take care about special condition so that we can save ourself from infinite loop

/*
stynax:
for(startingPoint;condition;incre/decre){

  //block of code.

}
*/

//Examples: print 1 to 10

//using while loop
// var sp = 1

// while(sp<=10){
  
//   console.log(sp)

//   sp++
// }

//using do while loop

// var sp = 1

// do{

//   console.log(sp)

//   sp++
// }
// while(sp<=10)


//using for loop
// for(var sp=1; sp <= 10; sp++){
//   console.log(sp)
// }

//Exmape: print even numbers between 1 to 100

// var sum = 0

// for(var sp=2; sp<100; sp++){

//   //logic for printing only even number
//   if(sp%2==0){
//     //console.log(sp)
//     sum = sum + sp
//   }
// }

// console.log(sum)