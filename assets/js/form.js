// Create a variable that selects the form element 
const formEl = document.querySelector("#userInput");
const submitButton = formEl.children[6];

console.log();

// Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

function formSubmit(event) {
  // Prevent default form action - let JS handle EVERYTHING >:D
  event.preventDefault();

  // Make our lives easier - attach form values to variables
  const username = formEl.querySelector('#user').value;
  const title = formEl.querySelector('#title').value;
  const content = formEl.querySelector('#content').value;

  // Form validation
  const empty = (username === '') || (title === '') || (content === '');

  if(empty) {
    // alert("BYE!");
    const formWarning = formEl.querySelector('.formWarning');
    formWarning.textContent = "Please fill out all the fields!";
    formWarning.style.visibility = 'visible';

    return;
  }

  // Create object
  const blogPost = {
    username: `${username}`,
    title: `${title}`,
    content: `${content}`,
  }

  // Create array
  let blogPosts = [];

  // Check for previous posts
  const boolCheck = localStorage.getItem("blogPosts.stringified");
  if(boolCheck !== null) {
    blogPosts = JSON.parse(localStorage.getItem("blogPosts.stringified"));
  }

  // Push object to array
  blogPosts.push(blogPost);

  // Stringify array
  const pushToLocal = JSON.stringify(blogPosts);

  // Push via Local Storage API
  localStorage.setItem('blogPosts.stringified', pushToLocal);

  // Debug purposes
  console.log(`${blogPosts[0].username} ${blogPosts[0].title} ${blogPosts[0].content} ${pushToLocal}`);

  // Redirect
  redirectPage('blog.html');

}

// Redirect
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// Add an event listener to the form on submit. Call the function to handle the form submission.
submitButton.addEventListener('click', formSubmit);
