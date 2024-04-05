
const people = [
    {
        name: 'Karan',
        location: {
            street: 'Mohalla no 05',
            timezone: {offset: '+7:00'},
        },
    },
    {
        name: 'Chandra',
        location: {
            street: '123 Pine Street',
        },
    },
    {
        name: 'Sana',
        location: {
            street: '123 Apple Street',
            timezone: {offset: '+9:00'},
        },
    },
];

people.forEach((person) => {
    console.log(person.name);
    console.log(person.location.street);
    // console.log(person.location.timezone.offset) this will show an error because we didn't define offset in second object.
    // console.log(person.location && person.location.timezone && person.location.timezone.offset || 'Not Provided');
    console.log(person?.location?.timezone?.offset || 'Not provided');
})