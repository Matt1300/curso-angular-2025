export function whatsMyType<T>(argument: T): T {
    return argument;
}

let amIString = whatsMyType('Hello World');
let amINumber = whatsMyType(123);
let amIBoolean = whatsMyType(true);
let amIArray = whatsMyType([1, 2, 3]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed(2));
console.log(amIBoolean.valueOf());
console.log(amIArray.join('-'));
