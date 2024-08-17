
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskText;
    editInput.style.display = 'none';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => {
        listItem.classList.toggle('completed');
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
        if (listItem.classList.contains('editing')) {
            taskSpan.textContent = editInput.value;
            editButton.textContent = 'Edit';
            editInput.style.display = 'none';
            taskSpan.style.display = 'inline';
        } else {
            editInput.style.display = 'inline';
            taskSpan.style.display = 'none';
            editButton.textContent = 'Save';
        }
        listItem.classList.toggle('editing');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(editInput);
    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = '';
}
