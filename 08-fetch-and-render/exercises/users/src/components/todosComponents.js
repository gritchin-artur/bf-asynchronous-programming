export const todosComponents = (todos) => {
    const todosContainer = document.createElement('div');

    todos.forEach((todo) => {
        const todoContainer = document.createElement('div');
        todoContainer.className = 'todo';

        const todoCheckBox = document.createElement('input');
        todoCheckBox.type = 'checkbox';
        todoCheckBox.checked = todo.completed;

        const todoTitle = document.createElement('code');
        todoTitle.innerText = todo.title;

        todoContainer.append(todoCheckBox, todoTitle);

        todosContainer.appendChild(todoContainer);
    });

    return todosContainer;
};
