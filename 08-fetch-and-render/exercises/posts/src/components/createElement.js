export const createElement = (post, comments) => {
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.innerText = post.title;

    const id = document.createElement('code');
    id.innerText = `posted by user: ${post.id}`;

    const body = document.createElement('p');
    body.innerText = post.body;

    container.append(title, id, body);

    comments.forEach((item) => {
        const commentContainer = document.createElement('div');
        commentContainer.className = 'comment';

        const name = document.createElement('h1');
        name.innerText = item.name;

        const commentBy = document.createElement('p');
        commentBy.innerText = `comment by: ${item.email}`;

        const commentBody = document.createElement('p');
        commentBody.innerText = item.body;

        commentContainer.append(name, commentBy, commentBody);
        container.appendChild(commentContainer);
    });

    return container;
};
