// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();


// Expect the output to be "My name is Keith" as name is a global variable.



// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
console.log(score);

// Expect the result to be 3 as the var score is assigned a value within the result function so it would not look for the variable outwith the function and score would remain as 5.




// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
console.log(myAnimals);

// Expect the result to be 0: Ducks, 1: Dogs, 2: Lions as the myAnimals array is reassigned within the listAnimals function and so the global variable myAnimals would now be the array specified within the function.




// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// Expect the result to be "Suspects include: Jay, Val, Harvey, Rick"   "Suspect three is: Keith" as the suspectThree is only assigned in the function it doesn't change the global variable suspectThree.





// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// Expect result would be "Poirot" as the function detectiveInfo is acalled which changes the detective name and the passes the detective into the printName function which returns his name.





// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// The result would be "the murderer is rick" as it is set within the outerFunction as "marc" then changed by the innerFunction to "valerie" but neither of these affect the global variable.