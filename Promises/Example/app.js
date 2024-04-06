// first - after 1s red
// second - after 3s blue
// third - after 2s green

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    addColor(1000,'.first', 'orange')
    .then(() => addColor(3000, '.second', 'blue'))
    .then(() => addColor(2000, '.third', 'green'))
    .catch((err) => {
        console.log(err);
    });
});

function addColor(time, selector, color) {
    const element = document.querySelector(selector)
    return new Promise((resolve, reject) => {
        if(element){
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);
        }else{
            reject(`There is not such element : "${selector}"`);
        }
    })
}