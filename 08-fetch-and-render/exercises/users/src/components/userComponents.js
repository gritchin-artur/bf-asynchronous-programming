export const userComponents = (user) => {
    const userContainer = document.createElement('div');
    userContainer.className = 'user-container';

    const userName = document.createElement('h1');
    userName.innerText = user.username;

    const name = document.createElement('p');
    name.innerText = `name: ${user.name}`;

    const userEmail = document.createElement('p');
    userEmail.innerText = `email: ${user.email}`;

    const userWebsite = document.createElement('p');
    userWebsite.innerText = `website: `;

    const emailLink = document.createElement('a');
    emailLink.href = `http://${user.website}`;
    emailLink.target = '_blank';
    emailLink.innerText = user.website;

    userWebsite.append(emailLink);

    userContainer.append(userName, name, userEmail, userWebsite);
    return userContainer;
};
