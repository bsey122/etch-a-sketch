const container = document.querySelector('.drawing-pad');
for (let index = 0; index < 16; index++) {
    for (let index = 0; index < 16; index++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square); 
    }  
}
function black(e) {
    e.target.style.background = 'black';
}
const gridElement = document.querySelectorAll('.square');
gridElement.forEach((gridElem) => {
    gridElem.addEventListener('mouseover', black);
});