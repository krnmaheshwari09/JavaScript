// dot notation
const person = {
    name: 'john',
};
console.log(person.name);
person.age = 25;
console.log(person);

// square bracket notation
console.log(person['age'])

// dynamic
let appState = 'loading';

appState = 'error';
const app = {
    [appState]: true,
};
console.log(app)