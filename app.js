const plusBtn = document.querySelector(".plus-btn");
const list = document.querySelector('.list');
const input = document.querySelector('.input');
const filter = document.querySelector('.filter-container');

//Event Listener
plusBtn.addEventListener('click', addCard);
list.addEventListener('click', handleCards);
filter.addEventListener('click', handleFilter);

//Functions
function addCard() {
    //Prevent from submitting
    event.preventDefault();
    //DIV
    const div = document.createElement('div');
    div.classList.add('card');
    //LIST
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerHTML = input.value;
    div.appendChild(listItem);
    //CHECK BUTTON
    const greenBtn = document.createElement('button');
    greenBtn.classList.add('green-btn');
    greenBtn.innerHTML = '<i class="fas fa-check"></i>';
    div.appendChild(greenBtn);
    //TRASH BUTTON
    const redBtn = document.createElement('button');
    redBtn.classList.add('red-btn');
    redBtn.innerHTML = '<i class="fas fa-trash"></i>';
    div.appendChild(redBtn);
    //Append to the list
    list.appendChild(div);
    //Refresh the input form
    input.value = "";
}

function handleCards(e) {
    const item = e.target;
    //Remove cards
    if (item.classList[0] === 'red-btn') {
        const parent = item.parentElement;
        parent.classList.add('trash');
        parent.addEventListener('transitionend', function() {
            item.parentElement.remove();
        })
    }
    //Check cards
    if (item.classList[0] === 'green-btn') {
        const parent = item.parentElement;
        parent.classList.add('completed');
    }
}

function handleFilter(e) {
    const items = list.childNodes;
    items.forEach(function(item) {
        switch (e.target.classList[0]) {
            case 'filter-all':
                item.style.display = 'flex';
                break;
            case 'filter-completed':
                if (item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
            case 'filter-not-yet':
                if (!item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    });
    
}