const grid_container = document.querySelector('.grid_container');
const btn = document.querySelector('.btn');
document.getElementById("test1").checked = true;
let maxspace = 25;
let colortobeused = 'black';
let colormode;

let controls = document.querySelector('.controls');


for (let i = 0; i < (maxspace * maxspace); i++) {
    let childdiv = document.createElement('div');
    childdiv.classList.add('childdiv');
    // childdiv.id = 'childdiv' + i;
    childdiv.id = 'childdiv';
    grid_container.appendChild(childdiv);
    console.log(i);
}
const grid_children = document.querySelectorAll('.childdiv');
grid_children.forEach(function (gridchild) {
    gridchild.addEventListener('mouseover', () => {
        gridchild.classList.toggle('childdiv-active');
        console.log('AAAAA');
    });
});
grid_container.style.gridTemplate = 'repeat(' + maxspace + ', 1fr ) /' + 'repeat(' + maxspace + ', 1fr )';

let tempval = 0;
btn.addEventListener('click', () => {
    if (maxspace != 0) {
        let i = 0;
        while (grid_container.firstChild.id = 'childdiv' && (grid_container.childElementCount != 1)) {
            grid_container.removeChild(grid_container.lastChild);
            console.log('remove: ' + i);
            i++;
            console.log(grid_container.childElementCount + '<--- Child Element Count');
        }
        grid_container.removeChild(grid_container.lastChild);
    }
    if (tempval != 'test') {
        maxspace = 0;
        maxspace = Number.parseInt(prompt('How many tiles should the grid be? Input "x" where "x" represents X by X tiles.'));
        if (maxspace < 0) {
            maxspace = 0;
        } else if (maxspace > 100) {
            maxspace = 100;
        }
    }
    for (let i = 0; i < (maxspace * maxspace); i++) {
        let childdiv = document.createElement('div');
        childdiv.classList.add('childdiv');
        childdiv.id = 'childdiv';
        grid_container.appendChild(childdiv);
        console.log(i);
    }
    const grid_children = document.querySelectorAll('.childdiv');
    console.log(colormode);
    if (colormode == 'true') {
        grid_children.forEach(function (gridchild) {
            gridchild.addEventListener('mouseover', () => {
                gridchild.style.backgroundColor = colortobeused;
                gridchild.classList.toggle('childdiv-active');
                console.log('BBBBB');
            });
        });
    } else {
        grid_children.forEach(function (gridchild) {
            gridchild.addEventListener('mouseover', () => {
                gridchild.classList.toggle('childdiv-active');
                console.log('AAAAA');
            });
        });
    }

    grid_container.style.gridTemplate = 'repeat(' + maxspace + ', 1fr ) /' + 'repeat(' + maxspace + ', 1fr )';
});

const colorbtn = document.createElement('button');
colorbtn.textContent = 'Change Color';
colorbtn.id = 'colorbtn';



const form = document.querySelector('form');
const radioButtons = form.querySelectorAll('input[type="radio"]');

let colorbtnClicked = false;

form.addEventListener('click', () => {
    let foundChecked = false;
    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            const selectedValue = radioButton.value;
            if (selectedValue === 'pen') {
                controls.appendChild(colorbtn);
                colormode = 'true';
                if (!colorbtnClicked) {
                    colorbtn.click();
                    colorbtnClicked = true;
                }
            } else {
                colorbtnClicked = false;
            }
            foundChecked = true;
        }
    });
    if (!foundChecked && controls.contains(colorbtn)) {
        controls.removeChild(colorbtn);
        clearbutton.click();
        colormode = 'false';
    }
});

const clearbutton = document.createElement('button');
clearbutton.textContent = 'clear';
clearbutton.id = 'clearbutton';
controls.appendChild(clearbutton);


clearbutton.addEventListener('click', () => {
    tempval ='test';
    btn.click();
    tempval = 0;    const testdiv = document.querySelectorAll('.childdiv');
    testdiv.forEach(function (gridchildaaaa) {
        gridchildaaaa.classList.toggle('childdiv-active', false);
    });
});



let tempcolorval2 = 0;
colorbtn.addEventListener('click', () => {
    colortobeused = prompt('Input a color name, or an rgb(x,y,z) value.')
    const testdiv = document.querySelectorAll('.childdiv-active');
    // testdiv.forEach(function (gridchildaaaa) {
    //     gridchildaaaa.style.backgroundColor = colortobeused;
    // });
    if (tempcolorval2 == 0) {
    colormode = 'true';
    tempcolorval2 = 1;
    tempval = 'test';
    btn.click();
    tempval = 0;
    }
});