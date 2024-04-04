// cart example
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        quantity: 1,
    },
    {
        title: 'Google Pixel',
        price: 499.99,
        quantity: 2,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        quantity: 4,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        quantity: 3,
    },
];

let {totalItems, cartTotal} = cart.reduce((total, item) => {
    const {quantity, price} = item;
    // console.log(quantity, price);
    // count items
    total.totalItems += quantity;
    // count sum
    total.cartTotal += price*quantity;
    return total;
},{
    totalItems: 0,
    cartTotal: 0,
});
cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log(total);
console.log(totalItems, cartTotal);


// github example

const url = 'https://api.github.com/users/krnmaheshwari09/repos?per_page=100';

const fetchRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.reduce((total, repo) => {
        const {language} = repo;

        if(total[language]){
            total[language] += 1;
        }else{
            total[language] = 1;
        }
        return total;
    },{})
    // console.log(data)
    console.log(newData);
}

fetchRepos();