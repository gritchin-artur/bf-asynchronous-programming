import { dom } from '../dom/dom.js';
import { handlePost } from '../handlers/postHandler.js';

export const clickEvent = () => {
    dom.form.addEventListener('click', handlePost);
};
