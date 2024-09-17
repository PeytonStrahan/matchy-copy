/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Function takes in an array of objects (represents animals array) and a string (represents animal name)
O: Returns an animal object from the animals array if it's name property matches the inputted name
C: N/A
E: Returns null if no animal object has the inputted name
*/

// function takes in an animal array and an animal name
function search(animals, name) {
    // loop through the animals array
    for (let i = 0; i < animals.length; i++){
        // determine if the current animal's name property is equal to the inputted name
        if (animals[i].name === name){
            // return the current animal object if so
            return animals[i];
        }
    }

    // return null if the loop fails to find a match
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Function takes in an array of objects (represents animals array), a string (represents animal name), and an object (represents the replacement animal)
O: N/A (returns nothing, but mutates the inputted animals array to replace any animal object with a name that matches the inputted name with the inputted object)
C: N/A
E: Does nothing if no animal object has the inputted name
*/

// function takes in an animal array, an animal name, and a replacement animal object
function replace(animals, name, replacement) {
    // loop through the animals array
    for (let i = 0; i < animals.length; i++){
        // determine if the current animal's name property is equal to the inputted name
        if (animals[i].name === name){
            // replace the current animal object with the replacement animal object if so
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Function takes in an array of objects (represents animals array) and a string (represents animal name)
O: N/A (returns nothing, but mutates the inputted animals array to remove any animal object with a name that matches the inputted name)
C: N/A
E: N/A
*/

// function takes in an animal array and an animal name
function remove(animals, name) {
    // loop through the animals array
    for (let i = 0; i < animals.length; i++){
        // determine if the current animal's name property is equal to the inputted name
        if (animals[i].name === name){
            // remove the current animal object if so
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Function takes in an array of objects (represents animals array) and an object (represents new animal)
O: N/A (returns nothing, but mutates the inputted animals array to add the inputted new animal object to it)
C: N/A
E: The new animal object must have a name property length > 0, a species property length > 0, and a name not the same as any other animal object's name in the animals array. The function does nothing if at least one of these requirements are not met.
*/

// function takes in an animal array and an animal name
function add(animals, animal) {
    // determine if the new animal object's name has a length less than or equal to zero
    if (animal.name <= 0){
        // end the function early if so
        return;
    }
    // determine if the new animal object's species has a length less than or equal to zero
    if (animal.species <= 0){
        // end the function early if so
        return;
    }

    // loop through the animals array
    for (let i = 0; i < animals.length; i++){
        // determine if the current animal's name property is equal to the inputted name
        if (animals[i].name === animal.name){
            // end the function early if so
            return;
        }
    }

    // add the inputted new animal object to the animals array if none of the conditionals caused the function to end early
    animals.push(animal);
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}