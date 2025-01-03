function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function isNumber(arg: any): arg is number {
    return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)) {
        return a + b; 
    } else {
        console.error('Invalid input: both arguments must be numbers');
        return 0; // Or throw an error
    }
}

let result = add(5, 3); //works fine
console.log(result); //8

let result2 = subtract(5,3); // works fine
console.log(result2); //2

let result3 = addSafe(5, '3'); //No error, returns 0 and prints error message to the console.
console.log(result3); //0

let result4 = addSafe(5, 3);
console.log(result4); //8