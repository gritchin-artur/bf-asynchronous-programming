import { dom } from '../dom/dom.js';
import { handleClick } from '../handlers/handlerClick.js';

export const clickEvent = () => {
    dom.form.addEventListener('click', handleClick);
};
