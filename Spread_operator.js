// Allows and iterable to spread/expand individuals inside reciever
// Split into single items and COPY them

const udemy = 'Udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['Karan', 'Chandra', 'Shahid'];
const girls = ['Susan', 'Anna'];
const bestFriend = 'Karan';

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
// const newFriends = friends;

// copy
const newFriends = [...friends];
newFriends[0] = 'Sid';
console.log(friends);
console.log(newFriends);

// ES2018 - ES8 Objects

const person = {name: 'Karan',last: 'Sharma', job: 'developer'};
const newPerson = {...person, city:'Delhi', last: 'Maheshwari'};
console.log(person);
console.log(newPerson);