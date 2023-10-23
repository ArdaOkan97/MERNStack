console.log(myValue) 
console.log(typeof myValue)
console.log("Before declaration!!!")


var myValue = "This is my first string"

console.log(myValue)
console.log(typeof myValue) //string

//var myValue = "Redeclaring a variable" //possible with var

myValue = 2500 //dynamic type casting - 

console.log(myValue)
console.log(typeof myValue) //number

myValue = 2500.0025 // no other types for numeric number will work

console.log(myValue)
console.log(typeof myValue) //number

myValue = true

console.log(myValue)
console.log(typeof myValue) //boolean

var prsnObject = {
    name : "Arda",
    friend : "Gauri"
}

console.log(prsnObject)

myValue = prsnObject

//console.log(myValue)
console.log(typeof myValue) //object

myValue = {}

console.log(myValue) //empty object
console.log(typeof myValue) //object

myValue = undefined

console.log(myValue) 
console.log(typeof myValue) //undefined

myValue = null

console.log(myValue) //null is a valid value in js
console.log(typeof myValue) //object

//symbol data type is present from ES6 and can be used in own libraries

var mySymBol = Symbol("Symbol Data Type")

console.log(mySymBol) 
console.log(typeof mySymBol) //symbol


//understand and give example of each data type and also try doing dynamic
//typing and accessing before declaration
console.log('-----------------')

console.log('Before declaring')
console.log(testVar)
console.log(typeof testVar)

var testVar = 15
console.log('After declaring')
console.log(testVar)
console.log(typeof testVar)

var testVar = 'Hello'
console.log('After redeclaring to string')
console.log(testVar)
console.log(typeof testVar)

console.log('Declaring object')
var testObj = {
    name: 'A',
    age: 12
}
console.log(testObj)
console.log(typeof testObj)

console.log('Redeclaring testVar to testObj')
testVar = testObj
console.log(testVar)
console.log(typeof testVar)

console.log('Redeclaring to undefined')
testVar = undefined
console.log(testVar)
console.log(typeof testVar)

console.log('Redeclaring to null')
testVar = null
console.log(testVar)
console.log(typeof testVar)

console.log('Redeclaring to Symbol')
testVar = Symbol('symbol')
console.log(testVar)
console.log(typeof testVar)