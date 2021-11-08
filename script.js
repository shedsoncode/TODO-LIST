const input = document.querySelector('#input');
// const todosCover = document.querySelector('.todos-cover');
const Cover = document.querySelector('.todos_container');
const addBtn = document.querySelector('.add-btn');




const addTodos = () => {
    const inputValue = input.value;

    if(inputValue === "") {
        alert("Add todos")
    } else {

        //===========Creating Element=========///
    const todo = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const todosCover = document.createElement("div");
    const img = document.createElement("img")
     img.src = './images/trash-bin.png';

    //===========Appending Element to DOM ==========//
    Cover.appendChild(todosCover);
    todosCover.appendChild(todo);
    
    todosCover.appendChild(deleteBtn);
    deleteBtn.appendChild(img)

    //===========Styling Elements==========//
    todosCover.classList.add('todos-cover')
    deleteBtn.classList.add('delete-btn')
    todo.classList.add('todos')


    todo.innerHTML = inputValue;

    deleteBtn.addEventListener("click", () => {
        todosCover.classList.add('del')
        deleteBtn.classList.add("scale")
    })
    }
    

    
   

   
    
};



addBtn.addEventListener("click", () => {
    addTodos()
    input.value = "";
})

