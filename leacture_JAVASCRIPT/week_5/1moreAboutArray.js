//Array Examples:

//Example 1: given two arrays:

// var names  = ["Rakesh", "Deepak", "Kunal", "Rohan"]
// var ages = [23, 45, 56, 13]

//find out the the age of Deepak
//Approach
//First find out the Deepak index.
//then in that index find out the age in ages array


// var index = -1
// var name = "Ananya"

// for(var i=0;i<names.length;i++){

//     if(names[i]==name){
//       index = i
//       break
//     }
// }

// if(index!=-1){
//     console.log("Age is:",ages[index])
// }
// else{
//   console.log(name+" has not found.")
// }

/*
Conclusions: 
1. Array is best choice for traveresing(visiting each element) meaining that if you're using it for getting and searching data.

2. Array is also best choice for homogenous data not for hatrogenous(because in this case to get the actual data, you need to put some extra efforts like fitering.)

3. Array is not the best choice for deleting and adding element at specific index, because while doing these operations, you're having to do lots of shifting unnecessarly.
*/

//Hatrogenous Example

var person = ["Jyoti", 20, "Uttar Pradesh", false, "Rakesh", 34, "Madhya Pradesh", true, "Rohan", 27, "Bihar", true]

//filteration to get data in multiple array
//Extra Burden

var names = []
var nameIndex = 0

for(var i=0;i<person.length; i = i+4){
    names[nameIndex++] = person[i]
}
console.log(names)

var ages = []
var ageIndex = 0

for(var i=1;i<person.length; i = i+4){
      ages[ageIndex++] = person[i]
}
console.log(ages)

var cities = []
var cityIndex = 0

for(var i=2;i<person.length; i = i+4){
        cities[cityIndex++] = person[i]
}
console.log(cities)

var marriedStatus = []
var marriedIndex = 0

for(var i=3;i<person.length; i = i+4){
          marriedStatus[marriedIndex++] = person[i]
}
console.log(marriedStatus)


//Main Logic

var index = -1
var name = "Rakesh"

for(var i=0;i<names.length;i++){

    if(names[i]==name){
      index = i
      break
    }
}

if(index!=-1){
    console.log("Age is:",ages[index])
}
else{
  console.log(name+" has not found.")
}