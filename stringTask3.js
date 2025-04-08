/*Task-3:
Check whether a string contains all the vowels a, e, i, o, u*/
let myString = ['i', 'm', 'l', 'j', 'k'];
let flag = 0;
for (let i = 0; i < myString.length; i++) {
    if (myString[i] == 'a' || myString[i] == 'e' ||
        myString[i] == 'i' || myString[i] == 'o' ||
        myString[i] == 'u') {
        flag = 1;
    }
}
if (flag == 1) {
    console.log("Yes the string has the vowels");
}
else {
    console.log("the string has no vowel");
}