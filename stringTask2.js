/*Task-2:
Count how many times a string has the letter a or A
*/
let myString ='aaAAAa';
let countOfCapital = 0;
let countOfSmall = 0;
for(let i =0;i<myString.length;i++){
    if(myString[i] =='A'){
        countOfCapital++;
    }

    if(myString[i]=='a'){
        countOfSmall++;
    }

}
console.log(countOfCapital);
console.log(countOfSmall);
