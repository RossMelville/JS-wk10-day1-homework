// Section 1

// What types are these?

/* 1.1 */ 1;
number
/* 1.2 */ "cat";
string
/* 1.3 */ true;
boolean
/* 1.4 */ [];
array
/* 1.5 */ {};
hash
/* 1.6 */ 1.1;
number
/* 1.7 */ var myVariable;
variable


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;
truthy
/* 2.2 */ "cat";
truthy
/* 2.3 */ true;
truthy
/* 2.4 */ NaN;
falsy
/* 2.5 */ [];
truthy
/* 2.6 */ {};
truthy
/* 2.7 */ undefined;
falsy
/* 2.8 */ "";
falsy
/* 2.9 */ 0;
falsy


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var price = 123.45
// 3.2 Assign a variable that is a string
var name = "Ross"
// 3.3 Assign a variable that is a boolean
var successful = true
// 3.4 Assign a variable that is an object
var animals = ["Lion", "Elephant", "Panda"]


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

console.log( x === true ? "hello" : "bye");


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var firstAnimal = animals[0];
// 5.2. Assign the last element to a variable
var lastAnimal = animals[animals.length-1];
// 5.3. Assign the length of an array to a variable
var animalSize = animals.length();
// 5.4. Add an item to the end of the array
animals.push("goat");
// 5.5. Add an item to the start of the array
animals.unshift("ferret");
// 5.6. Assign the index of hedgehog to a variable
var hedgehogVariable = animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = ["carrot", "cabbage", "sprouts", "potato", "sweetcorn"];
// 6.2 Loop over the array and write to the console using a "while"

var x = 0

while (x < vegetables.length) {
  console.log(vegetables[x]);
  x++;
}

// 6.3 Loop again using a "for" with a counter

for(var i = 0; i < vegetables.length; i++){
  console.log(vegetables[i])
}

// 6.4 Loop again using a "for of"

for(var vegetable of vegetables){
  console.log(vegetable)
}

// Section 7

var accounts = [50.00, 30.00, 10000.00, 50.76, 1.00];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
var totalBalance = function(){
  var totalCash = 0;
  for (var account of accounts){
    totalCash = totalCash + account
  }
  return totalCash
}
// 7.2 Find the index of the account with the largest balance
var largestBalanceIndex = function(){
  var max = Math.max.apply( Math, accounts);
  var largestIndex = accounts.indexOf(max);
  return largestIndex;
}
// 7.3 Find the index of the account with the smallest balance
var smallestBalanceIndex = function(){
  var min = Math.min.apply( Math, accounts);
  var smallestIndex = accounts.indexOf(min);
  return smallestIndex;
}
// 7.4 Calculate the average bank account value
var averageBalance = function(){
  totalCash = totalBalance();
  average = totalCash / accounts.length;
  return average;
}