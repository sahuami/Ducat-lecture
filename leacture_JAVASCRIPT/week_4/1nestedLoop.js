//Nested Loop: when each iteration/round is having some set of iteration/round then it forms nested loop(loop inside loop).
/*
syntax:
outer loop
for(){

inner
 for(){
 
 }
}
*/


//Example: golgappe anology

//outer loop
// for(var chintu=1;chintu<=3;chintu++){
//   console.log("Chintu has done with his panipuri no",chintu)

//   //inner loop
//   for(var brother=1;brother<=3;brother++){
//     console.log("Brother "+brother+" has done with panipuri no",chintu)
//   }
  
// }

//Example: Father-Son Analogy

// //outer loop
// for(var father=1;father<=3;father++){
//   console.log("Father has started his round",father)

//   //inner loop
//   for(var son=1;son<=5;son++){
//     console.log("Son Round "+son+" has completed")
//   }
//   console.log("Father has completed his round",father)
// }

/*
Print:
Father Round 1 : Son Rounds: 1 2 3 4 5
Father Round 2 : Son Rounds: 1 2 3 4 5

*/

//outer loop
// for(var father=1;father<=2;father++){

//   var bag = ""

//   //inner loop
//   for(var son=1;son<=5;son++){
//     bag = bag + son+" "
//   }
//   console.log("Father Round",father,": Son Rounds :", bag)
 
// }

/*
Notes:
outerloop: rows
inner loop:  columns

1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/

// //outer loop: rows
// for(var father=1;father<=5;father++){

//   var bag = ""

//   //inner loop: columns
//   for(var son=1;son<=5;son++){
//     bag = bag + son+" "
//   }
//   console.log(bag)

// }

/*

5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
*/

//outer loop: rows
// for(var father=1;father<=5;father++){

//   var bag = ""

//   //inner loop: columns
//   for(var son=5;son>=1;son--){
//     bag = bag + son+" "
//   }
//   console.log(bag)

// }

/*

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

// for(var father=1;father<=5;father++){

//   var bag = ""

//   //inner loop: columns
//   for(var son=5;son>=1;son--){
//     bag = bag + "* "
//   }
//   console.log(bag)

// }

/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

// for(var father=1;father<=5;father++){

//   var bag = ""

//   //inner loop: columns
//   for(var son=1;son<=father;son++){
//     bag = bag + son+" "
//   }
//   console.log(bag)

// }

/*

*
* * 
* * *
* * * *
* * * * *
*/

// for(var father=1;father<=5;father++){

//   var bag = ""

//   //inner loop: columns
//   for(var son=1;son<=father;son++){
//     bag = bag + "* "
//   }
//   console.log(bag)

// }


/*

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1


*/

// for(var father=5;father>=1;father--){

//   var bag = ""

//   for(var son=1;son<=father;son++){
//     bag = bag + son+" "
//   }
//   console.log(bag)

// }