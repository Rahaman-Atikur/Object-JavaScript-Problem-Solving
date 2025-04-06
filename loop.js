const mobile = {
    brand:'Apple',
    price:25000,
    color:'black',
    camera:'12mp'
}
// for(const prop in mobile){
//     console.log(prop);
// }
const value = Object.keys(mobile);
// console.log(value);
for(const val of value){
    console.log(val,':',mobile[val]);
}