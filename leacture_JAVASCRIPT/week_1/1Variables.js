// DAY 1: introductionToJavascriptVariables

//Javascript Variable: it is like a container/box which is used to store technical data(numbers, strings)

//numbers: integer number(negative(-1,-34), and postive(1,2,3,4)), decimal number(point numebr: 3459.34, 19982.99)
//words(strings): set of characters(numbers + letter + special symbols) enclosed with single and double quatation marks. 
//Examples of string: "rakesh", 'r', "8700459092", "201301", "rakesh1234", "Hey, I'm anand from jhansi, actually i have some questions regarding your frontend courses."

//Note: Declaration is also known as creating/making something.

//Decalartion of variable: 'var' keyword - it is used to create variable in javascript

var pictures
var age 
var name
var pincode

//you've created some variable above with names: pictures, age, name and pincode, once you've not given any value to above variables then by default your compiler give them undefined(you've not defined value, no value) as value.

//how to check what above variables are containing: console.log(variableName): it is like a tool which is used to print data inside particular variable.

//console.log(pictures) //undefined
//console.log(age) //undefined
//console.log(name) //undefined
//console.log(pincode) //undefined

//how to add data to the created variable: = (assignment operator/sign): assign/add values to the variable.

//Note: Initialization is also known as adding/inserting something.

//Intialization of variable.

/*
syntax: how to use paticular thing in javascript
varibleName = value
*/

//below you're initializing/inserting/adding the value to the created variable.
//console.log(pictures) //undefined

pictures = "Nature Picture"
age = 34
name = "Ducat"
pincode = "201307"

console.log(age, name, pincode)



// variablesInJavascriptExample

//Initialization at the time Declaration

// var name = "Rakesh"
// var age = 45
// var password = "1234"

// console.log(name, age, password)

//Mutiple variable declaration: by comma seperated.

// var a, b, c //declared variable with names: a, b, c
// a = 45
// b = 67

// console.log(a, b, c)


//Multiple variable initialization at the time declaration.

// var a = 45, b, c = 67

// console.log(a, b, c)


//Rules for having correct variable name:
//1. Start with a letter, underscore (_), or dollar sign ($).

//var 1stSemester // invalid variable name as it is starting with number.

//var #myname //invalid variable name as it is starting with special symbol #

//var $name //valid varibale name as it is starting with dollar sign.

//var _name // valid variable name as it is starting with underscore(_)

//var fathername // valid variable name as it is starting with letter.


//2. Can contain letters, numbers, underscores, and dollar signs.

//var integer-numbers //invalid variable name as it is containing special symbol -

//var my1name //valid variable name

//var father_name //valid variable name

//var father$name //valid variable name

//3. Case-sensitive, myVar, and myvar are considered different variables.

// var myVar
// var myvar

//4. Avoid using JavaScript-reserved/pre-defined/keywords words as variable names like for, while, if, class

//var class //invalid variable name as it is pre-defined keyword of javascript which some specific functionality.

//var if //invalid variable name as it is pre-defined keyword of javascript which some specific functionality.

var If //valid variable name because it is not reservered words.

//Varibles namingConvention:
//Note: below convetion is only allowed once you've more than one word.

//1. camelCaseNamingConvention: 

var fatherName
var myClassTeacherName
var childhoodName
var firstName
var lastName
var residentalAddress
var permanentAddress

//2. snake_case_naming_convention: 

var first_name
var last_name
var my_class_teacher_name
  




