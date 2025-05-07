import { typicodeResource } from '../api/api.js';
import { todosComponents } from '../components/todosComponents.js';
import { userComponents } from '../components/userComponents.js';
import { dom } from '../dom/dom.js';

export const handleClick = async () => {
    dom.root.innerHTML = '';

    const num = dom.form.userId.value;
    const user = await typicodeResource(num);
    const todos = await typicodeResource(num, 'todos');
    console.log(user, todos);
    // userComponents(user).appendChild(todosComponents(todos))
    dom.root.appendChild(userComponents(user));

    document
        .querySelector('.user-container')
        .appendChild(todosComponents(todos));
};
