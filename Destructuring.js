// faster/easier way to access/unpack variables from arrays, objects;

// const fruits = ['orange', 'banana', 'apple'];
const friends = ['Cp', 'Shahid', 'Sana', 'Nayeem'];

const [cp, , sana, nayeem, sid] = friends;

console.log(cp, sana, nayeem, sid);

let first = 'CP';
let second = 'Shahid';

// let temp = second;
// second = first;
// first = temp;
[first, second] = [second, first];

console.log(first, second);