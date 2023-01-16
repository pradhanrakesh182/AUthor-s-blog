const commentSection =document.querySelector('#comment');
const commentTemplate = document.querySelector('#comment-template');
getData();

async function getData() {
    const commentStream = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comment = await commentStream.json();
    let i =0;

    comment.forEach(comment => {
        i++;
        if(i < 10 ){
            const name = comment.name;
            const email = comment.email;
            const body = comment.body;

            const newComment = document.importNode(commentTemplate.content, true);
            const commentName = newComment.querySelector('.comment_name');
            const commentEmail = newComment.querySelector('.comment_email');
            const commentBody = newComment.querySelector('.comment_body');

            commentName.innerText = name;
            commentEmail.innerText = email;
            commentBody.innerText = body;
            commentSection.appendChild(newComment);
            
        }
    })
}