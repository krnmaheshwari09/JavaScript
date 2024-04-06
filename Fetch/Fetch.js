// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Return Promise
// Fetch errors
// Only throws an error if cannot resolve.
// Error Response still a response (400-500)

const url = 'https://api.github.com/users/krnmaheshwari09/repos?per_page=100';

// fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

const getTours = async () => {
    try{
        const resp = await fetch(url);
        if(!resp.ok){
            const msg = `There was an error "${resp.status} ${resp.statusText}"`;
            throw new Error(msg);
        }
        // console.log(resp);
        const data = await resp.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};

// getTours();
const btn = document.querySelector('.btn');
btn.addEventListener('click', getTours);