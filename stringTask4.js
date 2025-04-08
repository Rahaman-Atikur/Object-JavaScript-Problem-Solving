/*Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.*/
let myString = 'Xxyy';
let result;
for(let i=0;i<myString.length;i++){
    if(myString[i]=='x'){
        result = myString.replace('x','y');
    }

    if(myString[i]=='X'){
        //replace it by Y
        result = myString.replace('X','Y');
    }

}
console.log(result);
