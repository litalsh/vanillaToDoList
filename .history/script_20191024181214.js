function newTodo(){
    let todoList = document.querySelector('todo_list'),
        todoItem = document.querySelector('.todo_item'),
        newTodo = document.createElement('li');
        newTodo.classList.add('todoItem');
        todoList.appendChild(newTodo);

}

// var gameCard = document.querySelector('.game-card'),
//                 cardCells = document.createElement('div');
//             cardCells.classList.add('card-cell');
//             gameCard.appendChild(cardCells);