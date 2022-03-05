const container = document.querySelector('.drawing-pad');
const slider = document.querySelector('#grid-size');
makeGrid();
function removeNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function makeGrid(e) {
    let sliderValue = slider.value;
    console.log(slider.value)
    removeNodes(container);
    container.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 1fr)`);
    for (let index = 0; index < sliderValue; index++) {
        for (let index = 0; index < sliderValue; index++) {
            let square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square); 
        }  
    }  
}
function black(e) {
    e.target.style.background = 'black';
}
container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('square')) {
        black(e);
    }
});
slider.addEventListener('input', function (e) {
    makeGrid();
});