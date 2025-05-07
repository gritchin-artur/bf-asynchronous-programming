import { typicodeResource } from '../api/api.js';
import { createElement } from '../components/createElement.js';
import { dom } from '../dom/dom.js';

export const handlePost = async () => {
    dom.root.innerHTML = '';

    const num = dom.form.postId.value;
    const post = await typicodeResource(num);
    const comments = await typicodeResource(num, 'comments');

    dom.root.appendChild(createElement(post, comments));
};
