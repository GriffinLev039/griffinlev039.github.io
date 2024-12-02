let temp_var = 1;
addEventListener('DOMContentLoaded', () => {
    // console.log('temp_var set to one');
    let temp_var = 1;
});


//Button Redirects
const GitHub = document.querySelector('.GitHub');

GitHub.addEventListener('click', () => {
    window.location.href = 'https://github.com/griffinlev039';
});

const LinkedIn = document.querySelector('.LinkedIn');

LinkedIn.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/griffinlevdev';
});

const shopping = document.querySelector('#shopping');

shopping.addEventListener('click', () => {
    window.location.href = 'pages/shoppinglist/shoppinglistdemo.html';
});

//Header Function
const fixedbanner = document.createElement('div');

const header_content = new Array('Home', 'About Me', 'My Projects', 'What Am I Doing Now?');
const header_links = new Array("document.querySelector('.landing').scrollIntoView({behavior: 'smooth'})", "document.querySelector('#aboutme').scrollIntoView({behavior: 'smooth'})", "document.querySelector('#whathave').scrollIntoView({behavior: 'smooth'})", "document.querySelector('#whatami').scrollIntoView({behavior: 'smooth'})");

const leftdiv = document.createElement('div');
const rightdiv = document.createElement('ul');
const unordered = document.createElement('li');


const logo = new Image(50, 50);
logo.src = 'img/shaymin.jpg';
leftdiv.appendChild(logo);

const myname = document.createElement('h2');
myname.textContent = 'Griffin Leventhal';
leftdiv.appendChild(myname);



fixedbanner.style.display = 'flex';
fixedbanner.style.flexFlow = 'row nowrap';
fixedbanner.style.justifyContent = 'space-evenly';
fixedbanner.style.alignItems = 'center';
fixedbanner.style.backgroundColor = 'white';
fixedbanner.style.position = 'fixed';
fixedbanner.style.top = '0';
fixedbanner.style.width = '100%';
fixedbanner.style.height = 'auto';
fixedbanner.style.left = '0';
fixedbanner.style.textContent = 'testing 123';
fixedbanner.style.transition = 'all ease-in-out 0.3s';
fixedbanner.style.transformOrigin = 'top';


leftdiv.style.display = 'flex';
leftdiv.style.flexFlow = 'row nowrap';
leftdiv.style.alignItems = 'center';
leftdiv.style.gap = '20px';
leftdiv.id = 'leftdiv';

rightdiv.style.listStyleType = 'none';
rightdiv.style.display = 'flex';
rightdiv.style.flexFlow = 'row nowrap';
rightdiv.style.gap = '45px';
rightdiv.id = 'rightdiv';


for (let i = 0; i < header_content.length; i++) {
    const testvar = document.createElement('li');
    testvar.textContent = header_content[i];
    testvar.setAttribute('class', 'h');
    testvar.id = 'bannerLink' + i;
    rightdiv.appendChild(testvar);
    testvar.addEventListener('click', ()=>{
        header_links[i];
    })
    // console.log(i)
    // console.log(header_content[i]);
    // console.log('u: ' + testvar);
}

// console.log('finished');

//Scroll Function
window.addEventListener('scroll', () => {
    // console.log('detected');
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';


    let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    if (percent > 33 && temp_var != 0) {
        fixedbanner.style.transform = 'scaleY(1)';
        temp_var = 0;
        // console.log('FIRED FIRED FIRED. temp_var is: ' + temp_var + ' and scroll % is: ' + percent);
    } else if (percent <= 33 && temp_var == 0) {
        temp_var = 1;
        if (loopstate == 0) {
            startbtn.click();
        }
        fixedbanner.style.transform = 'scaleY(0)';
        // console.log('DELETED temp_var is: ' + temp_var + ' and scroll % is: ' + percent);
        
    }
});

// console.log("you should only see this once.")
fixedbanner.appendChild(leftdiv);
fixedbanner.appendChild(rightdiv);
fixedbanner.style.transform = 'scaleY(0)';
document.body.appendChild(fixedbanner);


// EVERYTHING ABOVE IS A MESS AAAAAAAAAAAAAAAAAAAAAAAaa

//issue with using bubbles as variable bc of bubbling? hopefully not
const bubbles = document.querySelectorAll('.info_bubble');


//Temporary thing, this will not work - better assigning them individually
bubbles.forEach((bubble) => {
    bubble.addEventListener('click', () => {
        window.location.href = 'pages/calculator/index.html';
    })
});

const etchasketch = document.getElementById('etchasketch');
etchasketch.addEventListener('click', ()=> {
    window.location.href = 'pages/etch-a-sketch/index.html'
})

const conways = document.getElementById('bub4');
conways.addEventListener('click', ()=> {
    window.location.href = 'pages/js-conways/index.html';
});

const wakeTech = document.getElementById('bub5');
wakeTech.addEventListener('click', ()=>{
    window.location.href='https://waketech.edu';
})

const theOdinProject = document.getElementById('bub6');
theOdinProject.addEventListener('click', ()=> {
    window.location.href='https://theodinproject.com';
})

const siteUpdate = document.getElementById('bub7');
siteUpdate.addEventListener('click', ()=> {
    window.location.href='https://github.com/griffinlev039';
})

// FUTURE PLANS FOR BUBBLING
// - Create a system where I have an array of names, pictures, and links so its easier to update as needed.
// - Unsure if I will actually commit to this, unsure what best practice is
// - Written on 11/6/23 - Griffin Leventhal 





























//CONWAYS GAME OF LIFE JS

const display_div = document.querySelector('.grid-container');

let userInput = 50;
display_div.style.gridTemplate = 'repeat( ' + userInput + ', 1fr) / repeat( ' + userInput + ', 1fr)';
let max = 5;
let min = 1;
let position;
let commandList = [];

for (let i = 0; i < userInput * userInput; i++) {
    let grid_child = document.createElement('div');
    grid_child.classList.add('child_default');
    display_div.appendChild(grid_child);
    grid_child.id = 'grid_num' + i;
    grid_child.textContent = i + 1;
    if (Math.floor(Math.random() * (max - min) + min) == 2) {
        grid_child.classList.toggle('child_on');

    }
    // grid_child.addEventListener('click', ()=> {
    //     grid_child.classList.toggle('child_on');
    // })
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
    // console.log(`position: ${pos} and score: ${score}`);
    if (score == 3){
        commandList.push(() => {indexGrid[pos].classList.toggle('child_on', true)});
        // console.log('come alive.')
    }
    if (indexGrid[pos].classList.contains('child_on') == false) { 
        if (score <= 1 || score >= 4) {

        }
    } else if (score <= 1 || score >= 4) {
        commandList.push(() => {indexGrid[pos].classList.toggle('child_on', false)});
    } else if (score == 3){
        commandList.push(() => {indexGrid[pos].classList.toggle('child_on', true)});
        // console.log('come alive.')
    } else if (indexGrid[pos].classList.contains('child_on') == true) {
        if (score == 2) {
            // console.log('stay alive: ' + pos);
        }
    }
}

function executeCommands() {
    for (let i = 0; i < commandList.length; i++) {
        // console.log(commandList[i]);
        commandList[i]();
    }
}

// startbtn = document.querySelector('.startbtn');

// startbtn.addEventListener('click', () => {
//     mainFunction();
// });

const gridchildren = document.querySelectorAll('.child_default');
let indexGrid = Array.from(gridchildren);
// console.log('indexGrid');
// console.log('indexGrid' + indexGrid);

function mainFunction() {
    // const gridchildren = document.querySelectorAll('.child_default');
    indexGrid = Array.from(gridchildren);
    // console.log('indexGrid');
    // console.log('indexGrid' + indexGrid);


    commandList = [];


    for (const child of display_div.children) {
        // console.log(child);
        position = indexGrid.indexOf(child);
        // console.log('ChildTest: ' + (position));
        gameLogic(position, child);
    }
    executeCommands();
}

const loopbtn = document.querySelector('.startbtn');
let loopsec = 0;
let loopstate = 0;
loopbtn.style.backgroundColor = 'red';
loopbtn.addEventListener('click', ()=> {
    if (loopstate == 0) {
        loopstate = 1;
        loopbtn.style.backgroundColor = 'green';
        // loopsec = Number.parseInt(prompt('How many seconds per loop?')) * 100;
        loopsec = 370;
        // loopbtn.textContent = `Loop every ${loopsec / 100} seconds.`;
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
        if (Math.floor(Math.random() * (max - min) + min) == 2) {
            child.classList.toggle('child_on');
    
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    loopbtn.click();
})