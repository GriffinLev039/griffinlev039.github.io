//Sets two global variables that define xPos, yPos
//xPos, yPos are private and only accessible via getter
const keyVar = (function () {
  let xPos = 0;
  let yPos = 0;
  document.addEventListener('mousemove', (e) => {
    xPos = e.pageX;
    yPos = e.pageY;
  });
  function getXPos() {
    return xPos;
  }
  function getYPos() {
    return yPos;
  }
  return { getXPos, getYPos }
})();

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
  // console.log(document.body.style.getPropertyValue("--scroll"));
}, false);
console.log("Done!");



//There should be a grid made up of coordinate ranges, if item is 
//dragged from one part of grid then it'll swap with the previous one. 
//This will hopefully be easy enough to animate and code!
//This is somewhat pointless and I'd probably be better off developing the rest of the site first! oh well!
// const skillContainer = document.getElementById('skillContainer');
// const elementArray = [];

// for (let child of skillContainer.children) {
//   elementArray.push(child);
//   let mousedown = false;
//   let placeholder = null;

//   child.addEventListener('mousedown', () => {
//     mousedown = true;
//     console.log("TRUEEE!!!");

//     // Create an invisible placeholder
//     placeholder = document.createElement('div');
//     placeholder.style.position = 'absolute';
//     placeholder.style.visibility = 'hidden';  // Invisible placeholder
//     placeholder.style.width = `${child.offsetWidth}px`;
//     placeholder.style.height = `${child.offsetHeight}px`;
//     skillContainer.insertBefore(placeholder, child);

//     child.style.position = 'absolute';
//     child.style.zIndex = 1000; // Bring the element to the front while dragging
//   });

//   document.addEventListener('mouseup', () => {
//     if (placeholder) {
//       // Remove the placeholder from the DOM
//       skillContainer.removeChild(placeholder);
//     }
//     child.style.position = '';  // Reset position back to normal
//     mousedown = false;
//   });

//   setInterval(() => {
//     if (mousedown) {
//       // Update the dragged element's position
//       child.style.top = `${keyVar.getYPos()}px`;
//       child.style.left = `${keyVar.getXPos()}px`;

//       // Calculate where to insert the dragged element based on the mouse position
//       const divPos = keyVar.getXPos() / window.innerWidth;
//       skillContainer.insertBefore(child, elementArray[Math.floor(divPos / (1 / 6))]);
//       console.log(Math.floor(divPos / (1 / 6)));
//     }
//   }, 100);
// }

// console.log(elementArray);