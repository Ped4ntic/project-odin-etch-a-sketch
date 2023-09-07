const container = document.querySelector('.grid-container');

console.log(container);

function createGrid(x){
    for(let row = 0; row < x; row++){
        for(let col = 0; col < x; col++){
            let elem = document.createElement('div');
            elem.classList.add('grid');
            container.append(elem); 
        }
    }
    const size = 960/x;
    container.style.gridTemplateColumns = `repeat(${x}, ${size}px)`;
    container.style.gridTemplateRows = `repeat(${x}, ${size}px)`;
    console.log(size);
    // document.querySelectorAll('.grid').forEach(grid => {
    //     grid.style.gridTemplateColumns = `repeat(${x}, ${size}px), 1fr`;
    //     grid.style.gridTemplateRows = `repeat(${x}, ${size}px), 1fr`;
    // });
}

createGrid(2);