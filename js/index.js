let temp_var = 1;
addEventListener('DOMContentLoaded', () => {
    console.log('temp_var set to one');
    let temp_var = 1;
});


//Button Redirects
const GitHub = document.querySelector('.GitHub');

GitHub.addEventListener('click', () => {
    window.location.href = 'https://github.com/griffinlev039';
});

const LinkedIn = document.querySelector('.LinkedIn');

LinkedIn.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/griffin-leventhal-407755214';
});

const shopping = document.querySelector('#shopping');

shopping.addEventListener('click', () => {
    window.location.href = 'pages/shoppinglist/shoppinglistdemo.html';
});

//Header Function
const fixedbanner = document.createElement('div');

const header_content = new Array('Home', 'About Me', 'My Projects', 'What Am I Doing Now?', 'Shopping List');

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
    console.log(i)
    console.log(header_content[i]);
    console.log('u: ' + testvar);
    
    testvar.addEventListener('click', () => {
         window.location.href = 'pages/' + testvar.id + '.html';
    });
}

console.log('finished');

//Scroll Function
window.addEventListener('scroll', () => {
    console.log('detected');
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';


    let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    if (percent > 33 && temp_var != 0) {
        fixedbanner.style.transform = 'scaleY(1)';
        temp_var = 0;
        console.log('FIRED FIRED FIRED. temp_var is: ' + temp_var + ' and scroll % is: ' + percent);
    } else if (percent <= 33 && temp_var == 0) {
        temp_var = 1;
        fixedbanner.style.transform = 'scaleY(0)';
        console.log('DELETED temp_var is: ' + temp_var + ' and scroll % is: ' + percent);
    }
});

console.log("you should only see this once.")
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

// FUTURE PLANS FOR BUBBLING
// - Create a system where I have an array of names, pictures, and links so its easier to update as needed.
// - Unsure if I will actually commit to this, unsure what best practice is
// - Written on 11/6/23 - Griffin Leventhal 