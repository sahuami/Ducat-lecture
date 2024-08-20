//Recap: we discussed about relational operator
//relational operator: to create condition, it is only applicable for number data type.
//relation operators: >, >=, <, <=


//comparison Operator: to create condition, it is applicable for any type of data, and it returns boolean value(true or false)
//operators: ==, !=. ===, !==

//==(double equal to): it checks the equality wheather two values are equal to each other or not, and return boolean value(true or false)
//true: if condition is matching/correct
//false: if condition is not matching/correct

// var num1 = 50
// var num2 = 50

//var result = num1 == num2
//console.log(result)
//console.log(num1 == num2) //false

// var userCity = "Noida"

// var value = userCity == "Noida"
// //true: user belongs to Noida
// //false: user doesn't belong to Noida
// console.log(value)


// var num1 = 45
// var num2 = "45"
// console.log(num1 == num2) //false or true

//Note: in the case ==, and !=, they perform type convertion interanally automatically.

//!=: it checks not equality two value must not be equal to each then only it returns true otherwise it returns false.

// var username = "user"

// console.log(username!="admin") //false


// var num1 = 45
// //var num2 = "45"
// var num2 = "454"

// console.log(num1!=num2) //false
// console.log(num1!=num2) //true

//Do you any solution so that ==, and != can't perform type convertion automatically?
//solution: ===(triple equal to), and !==(not double equal to)

//===(triple equal to): it checks both data and data type in terms of equality, then only it returns true otherwise it will return false.

//!==(not double equal to): it checks both data and type in term of inequality.


// var num1 = 45 //number
// var num2 = "45" //string

// console.log(num1 === num2)

// console.log(num1 !== num2)