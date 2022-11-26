let input = document.querySelector(".entered_item");
let addBtn = document.querySelector(".add_list");
let tasks = document.querySelector(".tasks");


// Enabling/Disabling the addBtn

input.addEventListener("keyup", () => {
    if (input.value.trim() !== 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active")
    }
})

// Adding new items to the list
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {

        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item_btn">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
        `

        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task');
    }

    localStorage.setItem('value', input.value)

})

// Deleting items from the list

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})

// mark task as completed
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {

        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})