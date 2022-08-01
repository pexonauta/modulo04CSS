let form = document.querySelector('#form')
let btnTodo = document.querySelector('#btn-todo')

let listcontainer = document.querySelector('.list-container')

const inputa = {
    cont: btnTodo.value.trim().length > 0,
    tf: false,
}
const validadeInput = () => {
    return btnTodo.value.trim().length > 0 ;
}

form.addEventListener('submit', () => addTask())

const addTask = () => {
    const btnValid = validadeInput()

    if(!btnValid) {
        event.preventDefault()
        return form.classList.add('error')
    }
    event.preventDefault()
    // List
    const list= document.createElement('div')
    list.classList.add('list')

    // List Item
    const item = document.createElement('label')
    item.classList.add('item')

    item.addEventListener('click', () => finishclick(list, itemText))

    // item-check
    const itemCheck = document.createElement('div')
    itemCheck.classList.add('item-check')

    // checkbox
    const checkbox = document.createElement('input')
    checkbox.classList.add('checkbox')

    // item-button
    const itemButton = document.createElement('span')
    itemButton.classList.add('item-button')
    const iconButton = document.createElement('ion-icon')
    iconButton.setAttribute('name','checkmark-outline')

    // item-text
    const itemText = document.createElement('span')
    itemText.classList.add('item-text')
    itemText.innerText   = btnTodo.value
    btnTodo.value = ''

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
    //checkbox
    let check = false
    checkbox.type = 'checkbox'
    check != checkbox.checked
    console.log(checkbox.checked)
    if(checkbox.checked = check) {
        itemText.classList.add('completed')
        console.log(checkbox)
    }
    //item Button
    itemButton.appendChild(iconButton)
    //Buttons
    property.appendChild(edit)
    property.appendChild(del)
    edit.appendChild(ionIcon)
    del.appendChild(ionIcon2)
}

const  validcolorinput = () => {
    const btnValid = validadeInput()
    console.log(btnValid)

    if(btnValid) {
        return form.classList.remove('error')
    }
}

btnTodo.addEventListener('change', () => validcolorinput())

const finishclick = (list, itemText) => {
    // const tasks = list.childNodes;

    // for (const task of tasks){
    //     if(task.firstChild.isSameNode(item)){
    //         task.firstChild.classList.toggle("completed");
    //     }
    // }
}
