/*For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
*/
const car = {
    make:"Toyota",
    model:"Corolla",
    year: 2020,
    "passenger capacity": 5
}

console.log(Object.values(car));
console.log(car["passenger capacity"]);
