// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// const example = async() => {
//     return 'hello there';
// }

// async function someFunc() {
//     const result = await example();
//     console.log(result);
// }

// console.log(example())
// someFunc();

const users = [
    { id: 1, name: 'Karan' },
    { id: 2, name: 'CP' },
    { id: 3, name: 'Sana'},
];

const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five' ] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
];

const getData = async () => {
    try{
        const user = await getUser('Karan');
        // console.log(user);
        // if(user){
        //     const article = await getArticles(user.id);
        //     console.log(article);
        // }
        const article = await getArticles(user.id);
        console.log(article);
    }catch(error){
        console.log(error);
    }
}
getData()
// getUser('CP')
//     .then((user) => getArticles(user.id))
//     .then((article) => console.log(article))
//     .catch((err) => console.log(err))


function getUser(name){
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)

        if(user) {
            return resolve(user);
        }else{
            return reject(`No such user with name : ${name}`);
        }
    });
}

function getArticles(userId){
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId);

        if(userArticles) {
            return resolve(userArticles.articles);
        }else{
            return reject(`wrong ID`);
        }
    });
}