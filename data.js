/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty object
var animal = {};

// give object a property via dot notation
animal.species = "spinosaurus";

// give object a property via bracket notation
animal["name"] = "Henry";

// give object an empty array as a property
animal.noises = [];

// log animal to the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty array
var noises = [];

// give the array a string
noises[0] = "Hiiiiiish"

// give the array a string
noises.push("Grah");

// give the array a string
noises.unshift("Rawr");

// give the array a string
noises[noises.length] = "Oi Govna"

// log the length of the noises array
console.log(noises.length);

// log the last element in the noises array
console.log(noises[noises.length - 1])

// log the noises array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign the noises array to animal.noises
animal["noises"] = noises;

// add another property to animal.noises
animal.noises.push("*Gargling");

// log the animal object
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * A: dot notation and bracket notation
 *
 * 2. What are the different ways of accessing elements on arrays?
 * A: zero-indexed bracket notation (you can access the array's length property via dot notation)
 * 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty animals array
var animals = [];

// push the animal object to the animals array
animals.push(animal);

// log the animals array
console.log(animals);

// create the duck variable and assign it an object
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}

// add the duck object to the animals array
animals.push(duck);

// log the animals array
console.log(animals);

// create two more object and then add them to the animals array
var bear = {
  species: 'bear',
  name: 'Cheeseburger',
  noises: ['growl', 'rawr', 'sneeze', 'raaagh']
}

animals.push(bear);

var fish = {
  species: 'fish',
  name: 'Philip',
  noises: ['blip', 'bloop']
}

animals.push(fish);

// log animals and animals.length
console.log(animals + "\nLength: " + animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}