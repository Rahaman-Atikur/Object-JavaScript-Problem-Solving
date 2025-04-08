/*Task-1:
Count how many times a string has the letter a
*/
let myString = 'aaaaa';
let cnt = 0;
for(let i =0;i<myString.length;i++){
    if(myString[i]=='a'){
        cnt++;
    }
}
console.log(cnt);
