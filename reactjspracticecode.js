//es6 features
//1 variables
// var let const
//var
var a=1;
var b=2;
var a=5;
//let 
let a=3;
a=4;
//const 
const a=3;
//2 arrow function
// normal function
function hi(name)
{

}
//arrow function
let hi = (name) => {

}
//export and import modules
//export(default)
const a=4;
export default a;
//export(named)
const i=0;
const b=7;
export {i,b}
//import
import a from './app.js/'
//classes
class Car {
    constructor(name) {
      this.brand = name;
    }
  }
  const mycar = new Car("Ford");
  //spread operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
//destructuring
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
//map method
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
//