//Mathematical Operator: it is used to perform mathematical operation in javascript.

//there are following mathematical operator:
//1. addition(+)
//2. subtraction(-)
//3. multiplication(*)
//4. division(/)
//5. remainder/modulus(%)

//Note: operator(+, -, /, *, %) operates operands(data variable)
//other words: operator perform particular operation according to the sign/operator between data variables(operands) 

//Examples: 

//var a = 20, b = 10

//addition(+)
//data variables: a and b
//operator: +

//var add = a + b //here + operator performing addition between a and b and returns resultant value.
//console.log(add)
//console.log(a + b)
//var msg = "Total is"
//console.log(msg, add)
//console.log("Total is", a+b)

//subtraction
//data variables(operands): a and b
//operator: -
//var sub = a - b
//console.log(sub) // 10
//console.log(a - b)
//console.log("Difference is", a-b)

//multiplication
//data variables(operands): a and b
//operator: *
//var mul = a * b
//console.log(mul) // 200
//console.log(a * b)
//console.log("Product", a*b)

//division
//data variables(operands): a and b
//operator: /
//var divide = a / b
//console.log(divide) // 2
//console.log(a / b)
//console.log("Result is", divide)

//modulus/remainder
//data variables(operands): a and b
//operator: %
// var remain = a % b
// //console.log(remain) // 0
// //console.log(a % b)
// console.log("Remainder is", remain)


//Good Example: how to find out any power of any power

//var num = 4
//3 power of 4: 4*4*4
//log(num*num*num) //64
//what if 10 power of 4: 4*4*4*4*4*4*4*4*4*4
//Solution: exponent operator: **(any power of any number)
/*
syntax: 
number ** power

*/
//console.log(num ** 3) //64

//Good Example: mathematical expression

// var a=5, b=4, c=3, d=5

// //bodmas rule
// var result = a**c + 2*a*b/c + b*b*c + d*c/a - b**c
// console.log(result)

//Good Example: addition with different data type: marging not addition

// var data1 = "hello"
// var data2 = 34
// var data3 = false
// //true: 1, false: 0

// var result = data2 + data1
// console.log(result) //hello34

//Note: above process of marging different data is also known as concatition.
//after marging, marged data will become string.

//Good Example: let's say there is 30% discount going on flipkart if you buy any three product with atleast 2 qunatity.

//product price
// var product1 = 500
// var product2 = 100
// var product3 = 200

//product quantity
// var product1Quantity = 3
// var product2Quantity = 4
// var product3Qunatity = 2

// var totalAmount = product1 * product1Quantity + product2 * product2Quantity + product3 * product3Qunatity

// console.log("Total Amount: ", totalAmount)

// var discount = totalAmount * 30/100
// console.log("Discount",discount)

// var payableAmount = totalAmount - discount

// console.log("Total Payable Amount:",payableAmount)