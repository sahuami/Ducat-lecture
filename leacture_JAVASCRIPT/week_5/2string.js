//String: It is set of character(numbers + letters + special symbols) enclosed with single and double quatation marks.
//Examples:

// var username = "rakesh@123"
// var password = "rakesh1234"
// var address = "Sarfabad sector 73 Noida"
// var name = "Rakesh Kumar Gupta"
// var adhaarNumber = "232313242212"
// var accountNumber = "2349234234"
// var ifscCode = "SBIN34232N"
// var pancardNumber = "ATFPY1971H"

//Note: we always keep such data as a string which we don't use for any mathematical operations.

//Note: String also follows 0 based indexing meaning that first element is at index 0 and so on.

// var firstName = "Rakesh"

// console.log(firstName[0])

//if you want to find out the number of character in particular string: using length property

// console.log(firstName.length)

// for(var i=0;i<firstName.length;i++){
//   console.log(firstName[i])
// }

//Note: String is immutable(unchangeable): once you initialized a variable with string value it can be modified or changed but you can replace/reassign the entire value

//Once array is mutable(changebale): you can modifiy the array

//array

// var names = ["Rakesh", "Deepak", "Suresh"]
// names[0] = "Shradha"

// console.log(names)

// //string

// var str = "Tucat"

// //modifiy/change/updation
// str[0] = 'D'

// //replacement/reassignment
// str = "Rakesh"

// console.log(str)

//Why String Immutable: As you know string keeps important and sensitive information that's its immutable so that nobody can't change it.


//Examples: 

var str = "Tucat"
//output: "Ducat"