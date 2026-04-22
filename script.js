async function getPost(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    response = await response.json()
    console.log(response.userId, response.id, response.title, response.completed)
}

async function getPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    response = await response.json();
    return response;
}

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    response = await response.json();
    return response;
}

function getUserByID(users, id) {
    return users.find(user => user.id == id);
}

window.onload = async() => {
    const posts = await getPosts()
    const users = await getUsers()
    for(let i = 0; i < posts.length; i++){
        let user = getUserByID(users, posts[i].userId)
        document.querySelector('main').innerHTML += `
        <div class="container num${i}">
            <h3>(User: ${user.name})</h3>
            <h1>${posts[i].title}</h1>
        </div>`
        if(posts[i].completed){
            document.querySelector(`.num${i}`).classList.add(`isCompleted`)
        }
    }
    // let rng = Math.round(Math.random() * posts.length)
    // console.log(posts[rng].userId, posts[rng].id, posts[rng].title, posts[rng].completed)
}