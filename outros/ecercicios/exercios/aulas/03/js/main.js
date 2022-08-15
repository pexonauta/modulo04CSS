(function(){
    const inputElement = document.querySelector(".new-task-input")
    const addTaskButton = document.querySelector(".new-task-button")

    const taskContainer = document.querySelector(".tasks-container")

    const validateInput = () => inputElement.value.trim().length > 0

    const handleAddTask = () => {
        const inputisValid = validateInput()

        console.log(inputisValid)

        if(!inputisValid) {
            return inputElement.classList.add("error")
        }
        
        const taskItemContainer = document.createElement('div')
        taskItemContainer.classList.add("task-item")

        const taskContent = document.createElement("p")
        taskContent.innerText = inputElement.value

        taskContent.addEventListener('click', () => handleClick(taskContent))

        const deleteItem = document.createElement("ion-icon")
        deleteItem.setAttribute("name", "trash-outline")
        deleteItem.classList.add("task-delete-button")

        // deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer,taskContent))
        deleteItem.addEventListener('click', () => handleConfirmDelete(taskItemContainer, taskContent))

        taskItemContainer.appendChild(taskContent)
        taskItemContainer.appendChild(deleteItem)

        taskContainer.appendChild(taskItemContainer)
        inputElement.value = ""

        updateLocalStorage()
    }

    const handleClick = (taskContent) => {
        const tasks = taskContainer.childNodes;

        for (const task of tasks) {
            const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
            if(currentTaskIsBeingClicked) {
                task.firstChild.classList.toggle("completed")
            }
        }

        updateLocalStorage()
    }

    const handleConfirmDelete = (taskItemContainer, taskContent) => {
        confirm("Deseja Realmente Excluir Essa Tarefa ?")
        if(confirm) {
            handleDeleteClick(taskItemContainer, taskContent)
        }
    }

    const handleDeleteClick = (taskItemContainer, taskContent) => {
        const tasks = taskContainer.childNodes

        for (const task of tasks) {
            const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
            
            if(currentTaskIsBeingClicked) {
                taskItemContainer.remove()
            }
        }

        updateLocalStorage()
    }

    const handleInputChange = () => {
        const inputisValid = validateInput()

        if(inputisValid) {
            return inputElement.classList.remove("error")
        }
    }

    const updateLocalStorage = () => {
        const tasks = taskContainer.childNodes;

        const localStorageTasks = [... tasks].map(task => {
            const content = task.firstChild;
            const isCompleted = content.classList.contains('completed');

            return {description: content.innerText, isCompleted}
        });

        localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
    };

    const refreshTasksUsingLocalStorage = () => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

        if(!tasksFromLocalStorage) return;

        for (const task of tasksFromLocalStorage) {
            const taskItemContainer = document.createElement('div')
            taskItemContainer.classList.add("task-item")

            const taskContent = document.createElement("p")
            taskContent.innerText = task.description

            if(task.isCompleted) {
                taskContent.classList.add("completed")
            }

            taskContent.addEventListener('click', () => handleClick(taskContent))

            const deleteItem = document.createElement("ion-icon")
            deleteItem.setAttribute("name", "trash-outline")
            deleteItem.classList.add("task-delete-button")

            // deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer,taskContent))
            deleteItem.addEventListener('click', () => handleConfirmDelete(taskItemContainer, taskContent))

            taskItemContainer.appendChild(taskContent)
            taskItemContainer.appendChild(deleteItem)

            taskContainer.appendChild(taskItemContainer)

        }
    }

    refreshTasksUsingLocalStorage();

    addTaskButton.addEventListener("click", () => handleAddTask())

    inputElement.addEventListener("change", () => handleInputChange())
})()