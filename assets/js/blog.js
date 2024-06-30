// TODO: Create a variable that selects the main element
const mainEl = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM
function buildHTML () {
    // Grab posts
    let blogPosts = [];
    blogPosts = readLocalStorage();

    // For debug purposes
    console.log(`There are ${blogPosts.length} posts.`)

    for(let i=0; i<blogPosts.length; i++) {
        // Create elements
        const article = document.createElement("article");
        const divTitle = document.createElement("div");
        const divContent = document.createElement("div");
        const divFooter = document.createElement("div");

        // Set attributes for CSS
        article.setAttribute('class', 'post');
        divTitle.setAttribute('class', 'title');
        divContent.setAttribute('class', 'content');
        divFooter.setAttribute('class', 'user');

        // Add content
        divTitle.textContent = `${blogPosts[i].title}`;
        divContent.textContent = `${blogPosts[i].content}`;
        divFooter.textContent = `${blogPosts[i].username}`;

        // Build <article>
        article.appendChild(divTitle);
        article.appendChild(divContent);
        article.appendChild(divFooter);

        // Append into <main>
        mainEl.appendChild(article);
    }

}

// buildHTML();

// TODO: Create a function that handles the case where there are no blog posts to display
function emptyBlog() {
    const message = document.createElement("p");

    message.textContent = "No blog posts yet.. come back later!";

    mainEl.appendChild(message);
}

// TODO: Create a function that reads from local storage and returns the data
function readLocalStorage() {
    let arr = [];
    arr = JSON.parse(localStorage.getItem("blogPosts.stringified"));

    return arr;
}

readLocalStorage();

// TODO: Call the function to render the list of blog posts
function render() {
    // Check for blog posts
    const boolCheck = localStorage.getItem("blogPosts.stringified");

    // If none
    if(boolCheck === null) {
        emptyBlog();

        return;
    }
    else {
        buildHTML();
    }

}

render();