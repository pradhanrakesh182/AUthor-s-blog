const authorId = 1;
const url = `https://jsonplaceholder.typicode.com/users/${authorId}/posts`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const authorName = data[0].name;
    document.getElementById("author").innerHTML = `Author: ${authorName}`;
    
    const posts = data.map(post => {
      return `<li>${post.title}</li>`;
    });
    document.getElementById("posts").innerHTML = posts.join("");
  });