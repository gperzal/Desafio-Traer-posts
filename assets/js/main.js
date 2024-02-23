document.getElementById('loadPostsBtn').addEventListener('click', loadPosts);

async function loadPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error al cargar los posts:', error);
    }
}

function displayPosts(posts) {
    const postdata = document.getElementById('post-data');
    postdata.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos resultados
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` 
                              <b>${post.title}</b>
                               <span>${post.body}</span>                         
                             `;
        postdata.appendChild(listItem);
    });
}
