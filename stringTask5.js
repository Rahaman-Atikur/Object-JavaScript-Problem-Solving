/*Task-5:
Capitalize Every first Letter of each word in a String
*/
let givenString = 'shuvo';
for(let i =0 ;i<givenString.length;i++){
    if(givenString[0]=='s'){
        givenString[0].replaceAll('s','S');
    }
}
console.log(givenString);
