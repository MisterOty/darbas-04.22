//1. Ispausdinti kiekvieno post pavadinima
//2. Sukurti posts elementa puslapyje
//3. Sukurti elementa kiekvienam postui su duomenimis

async function getPost(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    response = await response.json()
    console.log(response.userId, response.id, response.title, response.completed)
}

async function getPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    response = await response.json()
    return response
}

window.onload = async() => {
    const posts = await getPosts()
    for(let i = 0; i < posts.length; i++){
        document.querySelector('main').innerHTML += `
        <div class="container num${i}">
            <h1>Number ${posts[i].id}</h1>
            <p><b>(User ID: ${posts[i].userId})</b> ${posts[i].title}</p>
        </div>`
        if(posts[i].completed){
            document.querySelector(`.num${i}`).classList.add(`isCompleted`)
        }
    }
    // let rng = Math.round(Math.random() * posts.length)
    // console.log(posts[rng].userId, posts[rng].id, posts[rng].title, posts[rng].completed)
}