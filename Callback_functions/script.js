function makeUppercase(value){
    console.log(value.toUpperCase());
}
// makeUppercase('karan');

function reverseString(value){
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb){
    const fullName = `${name} Maheshwari`;
    cb(fullName);
}

// handleName('karan', makeUppercase);
// handleName('karan', reverseString);

handleName('karan', (value) => {
    console.log(value);
})

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     console.log('hello Karan...');
// });


// array methods, setTimeout, eventListeners etc
// callback Hell
// after 1s first red
// after 3s second blue
// after 2s third green
// in sequence

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'orange';
        setTimeout(() => {
            second.style.color = 'blue';
            setTimeout(() => {
                third.style.color = 'green';
            }, 2000);
        }, 3000);
    }, 1000);
});
