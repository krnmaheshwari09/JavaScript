// async await
// consume/use promises

// pending, Rejected, fulfilled
const value = 2;
const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3);
    if(random === value){
        resolve("You guessed correctly.");
    }else{
        reject('wrong number');
    }
});

console.log(promise);

promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})