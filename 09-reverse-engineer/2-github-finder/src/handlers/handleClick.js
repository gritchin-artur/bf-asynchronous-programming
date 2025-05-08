import { gitResource } from '../api-calls/git-resource.js';
import { userCard } from '../components/userCard.js';
import { dom } from '../dom/dom.js';

export const handleClick = async () => {
    dom.profileContainer.innerHTML = '';
    const param = dom.input.value;

    try {
        const search = await gitResource(param);
        dom.profileContainer.appendChild(userCard(search));
    } catch (error) {
        dom.profileContainer.innerHTML = 'Not Found';
    }
};
