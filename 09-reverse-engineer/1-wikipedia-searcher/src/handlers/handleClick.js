import { wikipediaResource } from '../api-calls/wiki-resource.js';
import { searchCard } from '../components/searchCard.js';
import { dom } from '../dom/dom.js';

export const handleClick = async () => {
    dom.output.innerHTML = '';
    dom.error.innerHTML = '';
    const param = dom.input.value;

    try {
        const search = await wikipediaResource(param);
        if (search.query.search.length === 0) {
            dom.error.innerText = '0 results';
        }

        dom.output.appendChild(searchCard(search.query));
    } catch (error) {
        dom.error.innerHTML = error;
    }
};
