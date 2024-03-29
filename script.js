const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

/*-In programming, it is standard practice to practice to prefix a variable 
    with is or has to indicate that the variable is boolean. 
-Using let so as to reassign a variable*/

let isError = false;

//Function to clean the string value and ensure you have a value
// The split() method splits a string into an array of substrings and returns the new array

/*
function cleanInputString(str) {
    const strArray = str.split('');
    const cleanStrArray = []; //for storing valid number characters
    // A for loop to itterate through each character in your strArray array
    //The .includes() method returns true if the array contains the character,
    //and false if not.
    //The logical NOT operator (!) will return the opposite of the value of the .includes() method. 
    //Regular expressions are patterns used to match character combinations in strings.In js they are also objects 
    for (let i = 0; i < strArray.length; i++){
        if(!["+", "-", " "].includes(strArray[i])) {
            strArray.push(strArray[i]);
        }

    }

} 
*/

 // Removed the existing code within the cleanInputString function and replaced it with the following.
 // whitespace refers to characters which are used to provide horizontal or vertical space between other characters.
 //Flag is a special variable that can only take two values: true and false
 
    /* /+-\s/ looks for +,-, and a space in order */
   //You want to look for plus and minus characters...Using the \ to escape the +, because it has a special meaning in regular expression.
  //To tell the pattern to match each of above characters individually, you wrap them in brackets to turn them into character class
  //The character class \s will match any whitespace character
  //The g flag will tell the pattern to continue looking after it has found a match
  //The i flag makes your pattern case-insensitive
  function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
 }

 function isInvalidInput(str) {
    const regex = /[\d]+e[\d]+/i;
    return result = str.match(regex);

 }

 // Function to allow users to add entries to the calorie counter
 function addEntry() {
    const targetId = '#' + entryDropdown.value;
    const targetInputContainer = document.querySelector(targetId + ' .input-container');

 }
