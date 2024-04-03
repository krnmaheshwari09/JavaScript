// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance , returns first match, if no match - undefined

const people = [
    {
        name: 'Karan',
        age: 25,
        position: 'CEO',
    },
    {
        name: 'CP',
        age: 24,
        position: 'Web-developer',
    },
    {
        name: 'Shahid',
        age: 26,
        position: 'Architecture',
    },
    {
        name: 'Nayeem',
        age: 23,
        position: 'Proffesor',
    },
];

// filter
const youngPeople = people.filter((person) => {
    // if(person.age < 25){
    //     return true;
    // }else{
    //     return false;
    // }
    return person.age < 25;
});
console.log(youngPeople);
// no match
const children = people.filter((person) => person.age < 20);
console.log(children);

// find
const karan = people.find((person) => person.name === 'Karan');
console.log(karan);

// No match
const sana = people.find((person) => person.name === 'Sana');
console.log(sana);

// multiple matches
const firstYoung = people.find((person) => person.age < 25);
console.log(firstYoung);