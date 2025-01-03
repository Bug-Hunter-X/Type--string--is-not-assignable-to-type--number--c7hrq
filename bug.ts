function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result = add(5, 3); //works fine
console.log(result); //8

let result2 = subtract(5,3); // works fine
console.log(result2); //2

let result3 = add(5, '3'); //Type 'string' is not assignable to type 'number'.
console.log(result3);