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
    const posts = await getPosts();
    const users = await getUsers();

    const postsElement = document.querySelector("main");
    const searchByName = document.querySelector("#search")
    const searchBtn = document.querySelector("#search-btn")
    const limitInput = document.querySelector("#limit")

    renderPosts(posts)

    searchBtn.addEventListener('click', () => {
        const filteredPosts = filterByName(searchByName.value)
        renderPosts(filteredPosts)
    })

    function filterByName(query) {
        return posts.filter((post) => post.title.includes(query))
    }

    async function renderPosts(posts){
            postsElement.innerHTML = '';
            posts.slice(0, limitInput.value).forEach(post => {
                const postelement = document.createElement('div');
                postelement.classList.add('container');

                const user = getUserByID(users, post.userId)

                postelement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <p>${user.name}</p>
                `;
                postsElement.append(postelement)
            })
    }

}