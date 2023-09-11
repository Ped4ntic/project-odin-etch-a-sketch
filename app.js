const container = document.querySelector('.grid-container');
const gridSizeSlider = document.getElementById('gridSizeSlider');
const sliderValueElement = document.getElementById('sliderValue');     

const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const randomColorBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');

let activeButton = colorBtn;
let isDragging = false; 

const clearBtn = document.getElementById('clearBtn');

let colorForBG = "#b9bfc0";
let isRandomColor = false;

colorBtn.addEventListener('click', function() {
    setActiveButton(colorBtn);
    colorForBG = colorPicker.value; // Change color to red (you can set it to any color)
    isRandomColor = false;
});

randomColorBtn.addEventListener('click', function() {
    setActiveButton(randomColorBtn);
    isRandomColor = true;
});

eraserBtn.addEventListener('click', function() {
    setActiveButton(eraserBtn);
    colorForBG = "#FFFFFF"; 
    isRandomColor = false;
});

clearBtn.addEventListener('click', updateGridSize)
gridSizeSlider.addEventListener('input', updateGridSize);

console.log(container);

function createGrid(x){
    for(let row = 0; row < x; row++){
        for(let col = 0; col < x; col++){
            let elem = document.createElement('div');
            elem.classList.add('grid');
            elem.addEventListener('mousedown', startDrag);
            elem.addEventListener('mousemove', handleDrag);
            elem.addEventListener('mouseup', endDrag);
            container.append(elem); 
        }
    }
    const size = 960/x;
    container.style.gridTemplateColumns = `repeat(${x}, ${size}px)`;
    container.style.gridTemplateRows = `repeat(${x}, ${size}px)`;
    sliderValueElement.textContent = `${x} x ${x}`;
}

function startDrag(event) {
    isDragging = true;
    changeBackgroundColor(event);
}

// While dragging
function handleDrag(event) {
    if (isDragging) {
        changeBackgroundColor(event);
    }
}

// End of the drag
function endDrag() {
    isDragging = false;
}

function updateGridSize() {
    const newSize = gridSizeSlider.value;
    let gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(grid => grid.style.backgroundColor = "#ffffff");
    createGrid(newSize);
}

function changeBackgroundColor(event) {
    // Generate a random color (you can replace this with any color)
    if(isRandomColor) {
        colorForBG = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    // Change the background color of the div
    event.target.style.backgroundColor = colorForBG;
}

// Set the active button and remove active class from others
function setActiveButton(button) {
    activeButton.classList.remove('active');
    button.classList.add('active');
    activeButton = button;
}

createGrid(16);