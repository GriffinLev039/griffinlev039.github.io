const display_div = document.querySelector('.grid-container');

let userInput = 50;
display_div.style.gridTemplate = 'repeat( ' + userInput + ', 1fr) / repeat( ' + userInput + ', 1fr)';
let max = 10;
let min = 1;
let position;
let commandList = [];

for (let i = 0; i < userInput * userInput; i++) {
    let grid_child = document.createElement('div');
    grid_child.classList.add('child_default');
    display_div.appendChild(grid_child);
    grid_child.id = 'grid_num' + i;
    // grid_child.textContent = i + 1;
    // if (Math.floor(Math.random() * (max - min) + min) == 2) {
    //     grid_child.classList.toggle('child_on');

    // }
    grid_child.addEventListener('click', ()=> {
        grid_child.classList.toggle('child_on');
    })
    // console.log(grid_child.classList);
}

function livingCheck(targetposition, target) {
    // console.log(targetposition);
    // console.log('targetposition = ' + targetposition + ' target = ' + target + ' index of target: ' + indexGrid[targetposition] + ' class of said index: ' + indexGrid[targetposition].classList);
    if (indexGrid[targetposition].classList.contains('child_on')) {
        return true;
    }
    return false;
}


function gameLogic(target, identity) {
    let x = 'nothing';
    let y = 'nothing';
    if(target < 50) {
        y = 'top';
    }
    if(target % 50 == 49) {
        x = 'right';
    }
    if (target > 2448) {
        y = 'bottom';
    }
    if (target % 50 == 0) {
        x = 'left';
    }
    let nearbyTile = 0;
    // console.log('original postion: '+ target);


    if (x != 'left') {
        if (livingCheck((target - 1 )) == true) {
        nearbyTile++;
    }}
    if (x != 'right') {
    if (livingCheck((target + 1)) == true) {
        nearbyTile++;
    }}
    if (y != 'bottom' && x !='left'){
    if (livingCheck((target + 49)) == true) {
        nearbyTile++;
    }}
    if (y != 'bottom'){
    if (livingCheck((target + 50)) == true && y != 'bottom') {
        nearbyTile++;
    }}
    if (y != 'bottom' && x !='right') {
    if (livingCheck((target + 51)) == true && y != 'bottom') {
        nearbyTile++;
    }}
    if (y !='top' && x != 'right') {
    if (livingCheck((target - 49)) == true && y != 'top') {
        nearbyTile++;
    }}
    if (y !='top') {
    if (livingCheck(target - 50) == true) {
        nearbyTile++;
    }}
    if (y !='top' && x != 'left') {
    if (livingCheck((target - 51)) == true && y != 'top') {
        nearbyTile++;
    }}
    action(nearbyTile, target);
}

function action(score, pos) {
    console.log(`position: ${pos} and score: ${score}`);
    if (score == 3){
        commandList.push(() => {indexGrid[pos].classList.toggle('child_on', true)});
        console.log('come alive.')
    }
    if (indexGrid[pos].classList.contains('child_on') == false) { 
        if (score <= 1 || score >= 4) {

        }
    } else if (score <= 1 || score >= 4) {
        commandList.push(() => {indexGrid[pos].classList.toggle('child_on', false)});
    } else if (score == 3){
        commandList.push(() => {indexGrid[pos].classList.toggle('child_on', true)});
        console.log('come alive.')
    } else if (indexGrid[pos].classList.contains('child_on') == true) {
        if (score == 2) {
            console.log('stay alive: ' + pos);
        }
    }
}

function executeCommands() {
    for (let i = 0; i < commandList.length; i++) {
        console.log(commandList[i]);
        commandList[i]();
    }
}

startbtn = document.querySelector('.startbtn');

startbtn.addEventListener('click', () => {
    mainFunction();
});

const gridchildren = document.querySelectorAll('.child_default');
let indexGrid = Array.from(gridchildren);
console.log('indexGrid');
console.log('indexGrid' + indexGrid);

function mainFunction() {
    // const gridchildren = document.querySelectorAll('.child_default');
    indexGrid = Array.from(gridchildren);
    console.log('indexGrid');
    console.log('indexGrid' + indexGrid);


    commandList = [];


    for (const child of display_div.children) {
        // console.log(child);
        position = indexGrid.indexOf(child);
        // console.log('ChildTest: ' + (position));
        gameLogic(position, child);
    }

    console.info(commandList);
    executeCommands();
}

const loopbtn = document.querySelector('.loopbtn');
let loopsec = 0;
let loopstate = 0;
loopbtn.style.backgroundColor = 'red';
loopbtn.addEventListener('click', ()=> {
    if (loopstate == 0) {
        loopstate = 1;
        loopbtn.style.backgroundColor = 'green';
        loopsec = Number.parseInt(prompt('How many seconds per loop?')) * 100;
        loopbtn.textContent = `Loop every ${loopsec / 100} seconds.`;
        setInterval(loopFunction, loopsec);
    } else {
        loopstate = 0;
        loopbtn.style.backgroundColor = 'red';
    }

})

function loopFunction() {
    if (loopstate === 1) {
        mainFunction();
    }
}

const clearbtn = document.querySelector('.clearbtn');
clearbtn.addEventListener('click', () => {
    for (const child of display_div.children) {
        // console.log(child);
        position = indexGrid.indexOf(child);
        indexGrid[position].classList.toggle('child_on', false);
    }
    if (loopstate == 1) {
        loopbtn.click();
    }
})

