const people = [
    {
        name: 'Karan',
        age: 20,
        position: 'Student',
        salary: 100,
    },
    {
        name: 'CP',
        age: 19,
        position: 'Web-developer',
        salary: 300,
    },
    {
        name: 'Shahid',
        age: 20,
        position: 'Architecture',
        salary: 400,
    },
    {
        name: 'Nayeem',
        age: 24,
        position: 'Proffesor',
        salary: 10,
    },
];

const dailyTotal = people.reduce((total, person) => {
    total += person.salary;
    return total;
}, 0);

console.log(dailyTotal);