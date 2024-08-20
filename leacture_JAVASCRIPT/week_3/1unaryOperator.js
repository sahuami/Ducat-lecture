// //Increment/Decrement Operator: which is used to increase/decrease the value by 1, it is also known unary operator.

// //Note: it works on numeric data type.

// //Without increment/decrement

// //var num = 45

// //increase by 1
// //num = num + 1 //reassignment/replacement
// // console.log(num)

// // //increase by 5
// // num = num + 5
// // console.log(num)


// //Increment/Decrement Operator(++/--): they increase/decrease the value by 1

// //Increment Operator(++): it increases the value by one
// //Syntaxt: variable++

// // var num = 45
// // //num++
// // console.log(num++)  //45

// //Decrement Operator(--): it decreases the value by one
// //Syntaxt: variable--

// //num--
// // console.log(num--) // 46

// //to understand above behavior, there is two type of increment/decrement operator.

// //1. Pre-Increment/Decrement Operator: 
// //in this case, we use increment/decrement operator before variable name.
// //Syntax: var num = 45, ++num, --num

// //Note: it is like lalchi operator, it increases/decreases the value by 1 before handovering to other operation.

// var num = 45

// //pre increment
// console.log(++num) //46, becuase pre-increment opeartor increases the value by one before handovering to console.log for printing.

// //pre decrement
// console.log(--num) //45


// //2. Post-Increment/Decrement Operator: 
// //in this case, we use increment/decrement operator after variable name.
// //Syntax: var num = 45, num++, num--

// //Note: it is like a helper operator, it increases/decreases the value by 1 after handovering to other operation.

// //post increment
// console.log(num++) //45, becuase post-increment opeartor increases the value by one after handovering to console.log for printing.
// console.log(num) //46

// //post decreement

// console.log(num--) //46
// console.log(num) //45


//Examples:

var a=4, b=5, c=3, d=2

var result = a++*--b*2*++c + --d*d++ + a*b*c--

console.log(result)