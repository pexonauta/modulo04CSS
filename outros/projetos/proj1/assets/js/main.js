(function(){
    let form = document.querySelector('#form')
    let btnTodo = document.querySelector('#btn-todo')

    let listcontainer = document.querySelector('.list-container')
    let list = document.querySelector('.list')
    let para = document.querySelector('.p')

    const validadeInput = () => {
        return btnTodo.value.trim().length > 0 ;
    }

    form.addEventListener('submit', () => addTask())

    const addTask = () => {
        const btnValid = validadeInput()
        event.preventDefault()

        if(!btnValid) {
            return form.classList.add('error')
        }   
        // List
        const list= document.createElement('div')
        list.classList.add('list')

        // List Item
        const item = document.createElement('div')
        item.classList.add('item')

        // item-check
        const itemCheck = document.createElement('div')
        itemCheck.classList.add('item-check')

        // checkbox
        const checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.type = 'checkbox'

        // item-button
        const itemButton = document.createElement('span')
        itemButton.classList.add('item-button')
        const iconButton = document.createElement('ion-icon')
        iconButton.setAttribute('name','checkmark-outline')

        // item-text
        const itemText = document.createElement('span')
        itemText.classList.add('item-text')
        itemText.innerText   = btnTodo.value
        itemText.addEventListener('click', () => finishclick(itemText))

        // property
        const property = document.createElement('div')
        property.classList.add('property')

        //edit
        const edit = document.createElement('button')
        edit.classList.add('edit')
        const ionIcon = document.createElement('ion-icon')
        ionIcon.setAttribute('name', 'pencil-outline')

        edit.addEventListener('click', () => editclick())
        //delete
        const del = document.createElement('button')
        del.classList.add('delete')
        const ionIcon2 = document.createElement('ion-icon')
        ionIcon2.setAttribute('name', 'trash-outline')

        del.addEventListener('click', () => deleteclick())

        //Container
        listcontainer.appendChild(list)
        // list Task
        list.appendChild(item)
        list.appendChild(property)
        //item task
        item.appendChild(itemCheck)
        item.appendChild(itemText)
        // item check
        itemCheck.appendChild(checkbox)
        itemCheck.appendChild(itemButton)
        //item Button
        itemButton.appendChild(iconButton)
        //Buttons
        property.appendChild(edit)
        property.appendChild(del)
        edit.appendChild(ionIcon)
        del.appendChild(ionIcon2)

        btnTodo.value = ''
    }

    const  validcolorinput = () => {
        const btnValid = validadeInput()
        console.log(btnValid)

        if(btnValid) {
            return form.classList.remove('error')
        }
    }

    btnTodo.addEventListener('change', () => validcolorinput())

    const finishclick = (letra) => {
        const tasks = listcontainer.childNodes;
        console.log("aaa")
        for(const task of tasks) {
            if (task.firstChild.isSameNode(letra)){ 
                task.firstChild.classList.toggle("completed")

            }
        }
    }
})()