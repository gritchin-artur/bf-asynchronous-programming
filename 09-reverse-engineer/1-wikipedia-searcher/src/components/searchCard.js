export const searchCard = (cards) => {
    const cardsContainer = document.createElement('div');
    cards.search.forEach((card) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'row';
        cardsContainer.style.display = 'contents';

        const cardH3 = document.createElement('h3');

        const cardA = document.createElement('a');
        cardA.href = `https://en.wikipedia.org/wiki/${card.title}`;
        cardA.innerText = card.title;

        cardH3.appendChild(cardA);

        const cardP = document.createElement('p');
        cardP.innerHTML = card.snippet;

        const cardABtn = document.createElement('a');
        cardABtn.href = `https://en.wikipedia.org/wiki/${card.title}`;

        const cardBtn = document.createElement('button');
        cardBtn.innerText = 'View Full Article';

        cardABtn.appendChild(cardBtn);

        cardContainer.append(cardH3, cardP, cardABtn);
        cardsContainer.appendChild(cardContainer);
    });

    return cardsContainer;
};
