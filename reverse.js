const sentence = 'I am learning JavaScript';
let reverse = ' ';
// for (let letter of sentence) {
//     // console.log(letter);

//     reverse  = letter + reverse;
// }

// console.log(reverse);

for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    reverse = letter + reverse;
}
console.log(reverse);


