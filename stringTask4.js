/*Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.*/
let myString = 'Xxxxxxxxx';
for (let i = 0; i < myString.length; i++) {
    if (myString.includes('x')) {
        myString = myString.replaceAll('x', 'y');
    }
    if (myString.includes('X')) {
        myString = myString.replaceAll('X', 'Y');
    }
}

console.log(myString);
