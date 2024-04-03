
const dishes = [
    { name: "Scrambled Eggs", category: "Breakfast" },
    { name: "Pancakes", category: "Breakfast" },
    { name: "Grilled Cheese Sandwich", category: "Lunch" },
    { name: "Caesar Salad", category: "Lunch" },
    { name: "Spaghetti Bolognese", category: "Dinner" },
    { name: "Roast Chicken", category: "Dinner" },
    { name: "Oatmeal", category: "Breakfast" },
    { name: "BLT Sandwich", category: "Lunch" },
    { name: "Salmon with Asparagus", category: "Dinner" },
    { name: "French Toast", category: "Breakfast" }
];

const categories = dishes.map((item) => item.category);
console.log(categories)

// const uniqueCategories = new Set(dishes.map((item) => item.category));
// if we want to convert set to array
const uniqueCategories = ['all',...new Set(dishes.map((item) => item.category))]
console.log(uniqueCategories)

document.querySelector('body').innerHTML = uniqueCategories.map((category => {
    return `<button>${category}</button>`;
})).join(`<br>`);