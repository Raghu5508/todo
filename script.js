document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Add to-do item
    addButton.addEventListener('click', function() {
        const todoText = input.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            // Create complete button
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove';
            removeButton.addEventListener('click', function() {
                todoList.removeChild(li);
            });

            // Append buttons to list item
            li.appendChild(completeButton);
            li.appendChild(removeButton);

            // Append list item to the list
            todoList.appendChild(li);

            // Clear input field
            input.value = '';
        }
    });

    // Allow pressing Enter to add a to-do item
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
