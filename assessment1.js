//Q1. Create a file with name basics and show all the features that you know about javascript

var age = 26; // Number
var name = "Arda"; // String
var isStudent = true; // Boolean
var cities = ["Los Angeles", "San Francisco", "Las Vegas"]; // Array
var person = {name: "Arda", age: 26}; // Object

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
console.log("Q2:")
var val = "Robert "
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = .0266
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = false
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = {myname : "Test Me"}
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = 25166665
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = undefined
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = true
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = "Robert Jr."
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = null
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = {}
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = undefined
console.log(val)
console.log(typeof val)
console.log("-----------------------")

val = -32767
console.log(val)
console.log(typeof val)
console.log("-----------------------")

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
console.log("Q3")
function showUserInfo(firstname, lastname, age) {
    console.log("First Name: " + firstname);
    console.log("Last Name: " + lastname);
    console.log("Age: " + age);
}

showUserInfo("Arda", "Okan", 26);
console.log("-----------------------")

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
console.log("Q4")
function doaddition(a, b, c) {
    return a + b + c;
}
  
console.log(doaddition(2, 3, 4));         // Output: 9
console.log(doaddition(2));               // Output: NaN, other params are undefined
console.log(doaddition(2.3, 3));          // Output: NaN, last param is undefined
console.log(doaddition("first", 2, "three")); // Output: "first2three", concats strings
console.log("-----------------------")

//Q5. Print the topics you have done so far exporting it from one file and printing in another
console.log("Q5")
// import {message, greet} from './a1export.js';

// console.log(message); //exported var
// console.log(greet('Arda')); //exported function
console.log("-----------------------")

//Q6. Give me an example of your choice on closure, objects, prototype, each.

//closure:
console.log("Q6 - closure")
function outerFunction() {
    var outerVar = "out";
  
    function innerFunction() {
      console.log(outerVar); // innerFunction can access outerVar
    }
  
    return innerFunction;
}
  
var closureExample = outerFunction();
closureExample(); // This will log "out"
console.log("-----------------------")

//objects
console.log("Q6 - objects")
var person = {
    firstName: "Arda",
    lastName: "Okan",
    age: 26,
    info: function () {
      console.log("Full Name: " + this.firstName + " " + this.lastName);
    }
};
  
console.log(person.firstName); // object properties
person.info(); // object methods

console.log("-----------------------")

//prototype
console.log("Q6 - prototype")

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
  
  Person.prototype.info = function () {
    console.log("Full Name: " + this.firstName + " " + this.lastName);
};
  
  var person1 = new Person("A", "B");
  var person2 = new Person("C", "D");
  
  person1.info();
  person2.info();

console.log("-----------------------")

//each
console.log("Q6 - each")

var nums = [1, 2, 3];

nums.forEach(function (num) {
  console.log(num);
});

console.log("-----------------------")

//Q7. Create an object without prototype chain or i do not want it to be inherited further
console.log("Q7")
var objWithoutPrototype = Object.create(null); //objWithoutPrototype has no prototype chain

console.log(objWithoutPrototype.toString); // undefined
console.log("-----------------------")

//Q8. what will the following code output? why?
console.log("Q8")
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

//The output will be:
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined

//The loop will complete its iteration during the timeout execution.
//Because of how closures work, i=4 and there are no elements in the array with index 4.
console.log("-----------------------")