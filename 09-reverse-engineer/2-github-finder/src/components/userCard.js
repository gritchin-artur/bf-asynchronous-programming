export const userCard = (user) => {
    const userContainer = document.createElement('div');
    userContainer.className = 'card card-body mb-3';

    const imgContainer = document.createElement('div');
    imgContainer.className = 'col-md-3';

    const img = document.createElement('img');
    img.className = 'img-fluid mb-2';
    img.src = user.avatar_url;

    const a = document.createElement('a');
    a.href = user.html_url;
    a.target = 'blank';
    a.className = 'btn btn-primary btn-block mb-4';
    a.innerText = 'View Profile';

    imgContainer.append(img, a);

    const infoContainer = document.createElement('div');
    infoContainer.className = 'col-md-9';

    const userH3 = document.createElement('h3');
    userH3.innerText = user.name;

    const userSmall = document.createElement('small');
    userSmall.innerHTML = `${user.bio}`;

    const userBr = document.createElement('br');
    const userBr2 = document.createElement('br');
    const userBr3 = document.createElement('br');
    const userBr4 = document.createElement('br');

    const spanRepos = document.createElement('span');
    spanRepos.className = 'badge bg-primary';
    spanRepos.innerText = `Public Repos: ${user.public_repos}`;

    const spanGits = document.createElement('span');
    spanGits.className = 'badge bg-secondary';
    spanGits.innerText = `Public Gitsts: ${user.public_gists}`;

    const spanFollowers = document.createElement('span');
    spanFollowers.className = 'badge bg-success';
    spanFollowers.innerText = `Followers: ${user.followers}`;

    const spanFollowing = document.createElement('span');
    spanFollowing.className = 'badge bg-success';
    spanFollowing.innerText = `Following: ${user.following}`;

    const infoUl = document.createElement('ul');
    infoUl.className = 'list-group';

    const liCompany = document.createElement('li');
    liCompany.className = 'list-group-item';
    liCompany.innerText = `Company: ${user.company}`;

    const liWebsite = document.createElement('li');
    liWebsite.className = 'list-group-item';
    liWebsite.innerText = `Website/Blog: ${user.blog}`;

    const liLocation = document.createElement('li');
    liLocation.className = 'list-group-item';
    liLocation.innerText = `Website/Blog: ${user.location}`;

    const liAccount = document.createElement('li');
    liAccount.className = 'list-group-item';
    liAccount.innerText = `Account Created: ${user.created_at}`;

    infoUl.append(liCompany, liWebsite, liLocation, liAccount);

    infoContainer.append(
        userH3,
        userSmall,
        userBr,
        userBr2,
        spanRepos,
        spanGits,
        spanFollowers,
        spanFollowing,
        userBr3,
        userBr4,
        infoUl,
    );
    userContainer.append(imgContainer, infoContainer);

    return userContainer;
};
