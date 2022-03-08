const container = document.querySelector('.drawing-pad');
const slider = document.querySelector('#grid-size');
const gridLabel = document.querySelector('label[for="grid-size"]');
const inputColour = document.querySelector('#pen-colour');
const warmBtn = document.querySelector('#Warm');
const coolBtn = document.querySelector('#Cool');
const randomBtn = document.querySelector('#Random');
const clearBtn = document.querySelector('#Clear');
const buttons = document.querySelectorAll('button');
const warmColours = ['#FEAA04','#E58004','#FC6E11','#E53B04','#FE5241'];
const coolColours = ['#B5FAFF','#7BD3EB','#4FBEFF','#5EA2EB','#73A1FF'];
makeGrid();
function removeNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function makeGrid() {
    let sliderValue = slider.value;
    gridLabel.textContent = `Grid size: ${sliderValue} x ${sliderValue}`;
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
function getColour(e) {
    let inputColourValue = inputColour.value;
    e.target.style.background = inputColourValue;
}
function getRandomNumber(params) {
    let maxRGBValue = 255;
    let randomNum = Math.floor(Math.random()*maxRGBValue) + 1;
    return randomNum;
}
function rainbow(e) {
    e.target.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
}
function getRandomListElement(list) {
    listLen = list.length;
    let randomNum = Math.floor(Math.random()*listLen);
    let randomElement = list[randomNum];
    return randomElement;
}
function getWarmColour(e) {
    e.target.style.background = `${getRandomListElement(warmColours)}`;
}
function getCoolColour(e) {
    e.target.style.background = `${getRandomListElement(coolColours)}`;
}
function eraser(e) {
    e.target.removeAttribute('style');
}
function scratch() {
    let sliderValue = slider.value;
    gridLabel.textContent = `Grid size: ${sliderValue} x ${sliderValue}`;
    console.log(slider.value)
    removeNodes(container);
    container.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 1fr)`);
    for (let index = 0; index < sliderValue; index++) {
        for (let index = 0; index < sliderValue; index++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.background = 'black';
            container.appendChild(square); 
        }  
    }
    container.classList.add('scratch-bg');
}
function removeScratch() {
    if (container.classList.contains('scratch-bg')) {
        makeGrid();
        container.classList.remove('scratch-bg');     
    }
}
slider.addEventListener('input', function (e) {
    makeGrid();
});
function setColour(e) {
    const choice = e.target.id;
    switch (choice) {
        case 'Warm':
            container.addEventListener('mouseover', function (e) {
                if (e.target.classList.contains('square')) {
                    getWarmColour(e);
                }
            });
            removeScratch();
            break;
        case 'Cool':
            container.addEventListener('mouseover', function (e) {
                if (e.target.classList.contains('square')) {
                    getCoolColour(e);
                }
            });
            removeScratch();
            break;
        case 'Random':
            container.addEventListener('mouseover', function (e) {
                if (e.target.classList.contains('square')) {
                    rainbow(e);
                }
            });
            removeScratch();
            break;
        case 'Scratch':
            scratch();
            container.addEventListener('mouseover', function (e) {
                if (e.target.classList.contains('square')) {
                    eraser(e);
                }
            });
            break;
        case 'Eraser':
            container.addEventListener('mouseover', function (e) {
                if (e.target.classList.contains('square')) {
                    eraser(e);
                }
            });
            break;
        case 'Clear':
            makeGrid();
            removeScratch();
            break;
    
        default:
            
            break;
    }
}
container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('square')) {
        getColour(e);
    }
});
buttons.forEach((button) => {
    button.addEventListener('click', setColour);
});
inputColour.addEventListener('click', function (e) {
    container.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('square')) {
            getColour(e);
        }
    });
    removeScratch();
});