//Why array?

/*
Note: Variable and Array both are data structure which is used to store data.

Once Variable is data structure like array then why are we learning about Array?

Because there are following limitations in the case of variable.
1. it can store one value at a time then if anyone want to store 10 values then what would be the solution?

solution: then we need to take 10 different variables

Example:
var x1 = 34
var x2 = 34
var x3 = 34
var x4 = 34
var x5 = 34
var x6 = 34
var x7 = 34
var x8 = 34
var x9 = 34
var x10 = 34

According to above solution, it is increasing following things in javascript:
a. duplicacy/redundancy
b. it will also make your code less readable and harder to maintain.

Suggestion: variable is the best choice if you want to store different type of data with less requirement.

Example:
  var name = "rakesh"
  var age = 34
  var isMarried = true

2. variable doesn't utilize memory in the correct way, its support random memory allocation.

What is the solution: 
Array: It is used to store homogenous(same type) and hatrogenous(different type) in a single variable.

It utilizes the memory in the better way as it stores data in the momery in the sequence/continous manner(one after the other)
*/

//Declaration of array: 

// var names = [] //delcared an array with names

// console.log(names)

//how to store data to the array?
//Note: array follows 0 based indexing meaning that first element/item/member will store at index 0 and so on.

//Therefore to store data to the array, we can do this with the help of indexing only.

//Initialization of an array

//names[0] = "Kavita"
//names[1] = "Divya"

//console.log(names) //["Kavita", "Divya"]

//store 1 to 20 number to array


// var nums = []

// for(var i=1;i<=20;i++){
//     nums[i-1] = i
// }

// console.log(nums)

//push(data): it is like a tool which is used to store at the end of the array.
//Examples: array_name.push(data)

// var nums = []

// // nums.push(10) //[10]
// // nums.push(20) //[10, 20]

// // console.log(nums)

// for(var i=1;i<=20;i++){
//     nums.push(i)
// }

// console.log(nums)


//How to check number of element or size of the array?
//Note: there is length property in array which is used to get number of element or size of the array.

//Initialization at the time of Declaration

// var langs = ["Java", "Javascript", "Python", "C" ]

// let size = langs.length
// console.log("Total Element", size)


//How to access data from the array: using index.

// var langs = ["Java", "Javascript", "Python", "C" ]

// // console.log(langs[0])
// // console.log(langs[3])
// // console.log(langs[4]) //undefined.

// for(var i=0;i<langs.length;i++){
//   console.log(langs[i])
// }


// var nums = [12,32,15,34,65,34,67,56,45]
// //console.log(nums.length)

// //find out the sum of array element

// // var sum = 0

// // for(var i=0;i<nums.length;i++){
// //    sum = sum + nums[i]
// // }
// // console.log("Sum of Nums Array:", sum)
// // console.log("Average of Nums Array:", sum/nums.length)

// //print the even only

// for(var i=0;i<nums.length;i++){

//   //check for even number
//   if(nums[i]%2==0){
//     console.log(nums[i])
//   }
  
//}