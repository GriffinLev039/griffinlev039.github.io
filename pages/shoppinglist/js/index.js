const btn = document.querySelector('button');
const shoppinglist = document.querySelector('.shoplist');
const userInput = document.querySelector('input');




btn.addEventListener('click', ()=> {
    const unordered = document.createElement('li');
    unordered.textContent = userInput.value;
    const exitBtn = document.createElement('button');
    exitBtn.textContent = 'Remove';
    unordered.appendChild(exitBtn);
    exitBtn.addEventListener('click', ()=> {
        shoppinglist.removeChild(unordered);
    });
    shoppinglist.appendChild(unordered);
    userInput.value = '';
    userInput.focus();
})

document.addEventListener('keydown', () => {
    if (event.keyCode === 13) {
        event.preventDefault();
    btn.click();
    }
})