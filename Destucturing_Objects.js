
const karan = {
    first: 'Karan',
    last: 'Maheshwari',
    city: 'Delhi',
    siblings: {
        sister: ['Krati', 'Aditi', 'Adrika'],
    },
};

const {first, last, zip, city, siblings:{sister:[sister1, sister2, sister3]}} = karan;

console.log(first, last, city, zip, sister1, sister2, sister3);

function printPerson({first, last, zip, city, siblings:{sister:[sister1, sister2, sister3]}}){
    console.log(first, last, city, zip, sister1, sister2, sister3);
}

printPerson(karan);