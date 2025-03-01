console.log("Basic math");

// console.log(2+2);//4
// console.log(2-2);//0
// console.log(2*2);//4
// console.log(2/2);//1
// console.log(2%2);//0
// console.log(2**3);//2*2 = 4*2 =8

//Add two string

let str1 = 'Hello'
let str2 = ' World'
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//32

/*Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.*/

// 1. () =>  Grouping  
// 2. ** =>  Exponention => (Right To Left)
// 3. * / % => Multiplication,division,prercedence => (Left To Right)
// 4. + -  =>Addition,subtraction => (Left To Right)


// console.log(4 + 3 * 5 % 3);

// console.log(+true);
// console.log(+"");
// console.log(true+);


// this code not optimizing
let num1, num2 , num3
num1 = num2 = num3 = 2 + 2


/*The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.*/

/*If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.*/


let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);
let x = 10;
const y = x++;
// console.log(x,y);




/*If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.*/
let xx = 10;
let yy =++x;
console.log(xx,yy);


/*The decrement (--) operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed.*/
 
/*If used postfix, with operator after operand (for example, x--), the decrement operator decrements and returns the value before decrementing.*/

let xs = 3;
let xy = xs--;
console.log(xs,xy);


/*If used prefix, with operator before operand (for example, --x), the decrement operator decrements and returns the value after decrementing.*/

let zz = 3;
let aa = --zz;
console.log(zz,aa);
