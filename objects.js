//Create an object with name Person and have some properties in it
var Person = {
    firstName: "Arda",
    lastName: "Okan",
    age: 26,
    email: "arda@example.com",
};

Person.displayInfo = function() {
    console.log("Person Information:");
    console.log("First Name: " + this.firstName);
    console.log("Last Name: " + this.lastName);
    console.log("Age: " + this.age);
    console.log("Email: " + this.email);
};

Person.displayInfo();
console.log("------------------");

// inherit person object to create new object Student - this should have two properties additional and one method
var Student = Object.create(Person);

Student.studentID = "12345";
Student.grade = "A";

Student.displayInfo = function() {
    console.log("Student Information:");
    console.log("First Name: " + this.firstName);
    console.log("Last Name: " + this.lastName);
    console.log("Age: " + this.age);
    console.log("Email: " + this.email);
    console.log("Student ID: " + this.studentID);
    console.log("Grade: " + this.grade);
};

Student.displayInfo();
console.log("------------------");

// create one object Jobs - (JobTitle, Salary, Location) and one object Student with salary
var Job = {
    JobTitle: "Software Engineer",
    Salary: 100000,
    Location: "Los Angeles"
};

var Student = {
    Name: "Arda",
    Age: 26,
    Salary: 40000
};

// Merge person and Salary so that Salary comes from Jobs Object
var MergedPerson = Object.assign({}, Person, { Salary: Job.Salary });

MergedPerson.displayInfo = function() {
    console.log("Person Information:");
    console.log("First Name: " + this.firstName);
    console.log("Last Name: " + this.lastName);
    console.log("Age: " + this.age);
    console.log("Email: " + this.email);
    console.log("Salary: " + this.Salary)
};

MergedPerson.displayInfo();

// Create a null - prototype object

var nullPrototypeObject = Object.create(null);