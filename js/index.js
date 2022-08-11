document.addEventListener("DOMContentLoaded", ()=> {
     gitForm = document.querySelector("github-form"); 
}) 
gitForm.addEventListener('submit', handleSubmit)
function handleSubmit() {
        console.log('received submit event')
    let name = document.getElementById('search').value
    fetch('https://api.github.com/search/users?q=' + name, {
        method: 'GET',
        headers: {
            Accept: application/vnd.github.v3+json
        }
    })
    
}   
