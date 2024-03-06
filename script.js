const canvas = document.querySelector('.main-container');
const button = document.querySelector('.change');
const body = document.querySelector('body');
const clear = document.querySelector('.clear');
let paintNow = false;
let currentSize = 16;
/* FILL UPON LOADING*/
window.addEventListener('load', () => {
    for (let length = 0; length < 16; length++) {
        for (let width = 0; width < 16; width++) {
            const pixels = document.createElement('div');
            pixels.className = 'pixels';
            canvas.append(pixels);
        }
    }
});

body.addEventListener('mousedown', () => {
    paintNow = true;
    console.log(paintNow);
});
body.addEventListener('mouseup', () => {
    paintNow = false;
    console.log(paintNow);
});

canvas.addEventListener('mouseover', (event) => {
    if (paintNow === true && paintNow === true)
        event.target.style.backgroundColor = 'black';
});

clear.addEventListener('click', clearGrid);

button.addEventListener('click', () => {
    let size = prompt('Enter size:(1-64) ');
    if (isNaN(parseInt(size))) {
        alert('Invalid size (1-64 only)');
        return;
    } else {
        fillGrid(size);
    }
});

/*MAIN FUNCTION*/

function fillGrid(sideLength) {
    if (sideLength > 64) {
        alert('64 is max');
        return;
    }
    currentSize = sideLength;
    resetGrid();

    for (let length = 0; length < sideLength; length++) {
        for (let width = 0; width < sideLength; width++) {
            const pixels = document.createElement('div');
            pixels.className = 'pixels';
            pixels.style.flex = `1 1 calc(100%/${sideLength})`;
            canvas.append(pixels);
        }
    }
}

function resetGrid() {
    canvas.innerHTML = '';
}

function clearGrid() {
    resetGrid();
    let sideLength = currentSize;
    for (let length = 0; length < sideLength; length++) {
        for (let width = 0; width < sideLength; width++) {
            const pixels = document.createElement('div');
            pixels.className = 'pixels';
            pixels.style.flex = `1 1 calc(100%/${sideLength})`;
            pixels.style.backgroundColor = 'white';
            canvas.append(pixels);
        }
    }
}

// add function for adding click listener to pixel divs
