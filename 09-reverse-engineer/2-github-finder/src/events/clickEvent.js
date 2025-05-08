import { dom } from '../dom/dom.js';
import { handleClick } from '../handlers/handleClick.js';

export const clickEvent = () => {
    dom.btnSearch.addEventListener('click', handleClick);
};
