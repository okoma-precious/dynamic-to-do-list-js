// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select key elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event to remove task on click
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append button to list item, then list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for Add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally invoke addTask on load (not needed unless preset tasks are loaded)
    // addTask(); // This line can be omitted unless there's a use case
});
