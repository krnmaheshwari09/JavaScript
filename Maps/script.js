// creating a object
const people = [
    {
        name: 'Karan',
        age: 20,
        position: 'Student',
    },
    {
        name: 'CP',
        age: 19,
        position: 'Web-developer',
    },
    {
        name: 'Shahid',
        age: 20,
        position: 'Architecture',
    },
];

const ages = people.map((person) => {
    return person.age;
});

const root = document.querySelector('.root');
root.innerHTML = ages;

const getName = (person) => {
    var newHead = document.createElement('h2');
    newHead.innerHTML = person.name;
    return newHead;
};

const names = people.map(getName);
var newDiv = document.createElement('div');
names.forEach((name) => {newDiv.appendChild(name)})
root.appendChild(newDiv);