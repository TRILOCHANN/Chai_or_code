
let myArray=[10,20,30,50]

const myArray2 = new Array ("Ram" , "Hari", "Shyam")   /* 2 declaration */

console.log(myArray[3]);

console.log(myArray2[1]);

console.log(myArray);

console.log(typeof myArray)

console.log(typeof num)

console.log("A",myArray);

const all_Arrays = [...myArray,...myArray2];
// console.log(all_Arrays);

const New_array = [1,2,3,4,[4,5,3,6,2,6,9,],4,5,6,2,[4,3,5,2,1,5,[8,6,5,4,7,9]]];
const NewArray1 = New_array.flat(Infinity)
console.log(NewArray1);


