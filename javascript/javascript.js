const container = document.querySelector('.drawing-pad');
for (let index = 0; index < 16; index++) {
    for (let index = 0; index < 16; index++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square); 
    }  
}