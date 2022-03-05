const container = document.querySelector('.drawing-pad');
const slider = document.querySelector('#grid-size');
const label = document.querySelector('label');
makeGrid();
function removeNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function makeGrid(e) {
    let sliderValue = slider.value;
    label.textContent = `Grid size: ${sliderValue} x ${sliderValue}`;
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
function getRandomNumber(params) {
    let maxRGBValue = 255;
    let randomNum = Math.floor(Math.random()*maxRGBValue) + 1;
    return randomNum;
}
function rainbow(e) {
    e.target.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
}
container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('square')) {
        black(e);
    }
});
slider.addEventListener('input', function (e) {
    makeGrid();
});