document.addEventListener("DOMContentLoaded", ()=> {    
// grab the id
const gitForm = document.querySelector('#github-form');
gitForm.addEventListener('submit', event=> {
    //prevent the page to reload
    event.preventDefault();
    console.log(event.target.search.value) 
    let name = document.querySelector('#search').value
    //API call
    fetch('https://api.github.com/search/users?q=' + name, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    })
    .then((resp) => resp.json())
    .then((json) => console.log(json));
})
})


