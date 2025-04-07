/*Task-4
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
*/
let cnt = 0;
let student = {
    name: 'Atikur Rahaman',
    age: 22,
    city: 'Dhaka',
    isStudent: true,
    isItOkay: false
}
for (let key in student) {
    cnt++;
}
console.log(cnt);

