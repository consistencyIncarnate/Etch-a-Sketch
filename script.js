const gridContainer = document.getElementById("container");
const sliderInput = document.getElementById("gridSize");
const sliderOutput = document.querySelector(".sliderDisplay");
const tglGridLinesBtn = document.getElementById("tglGridLines");
const clearGridBtn = document.getElementById("clearGrid");
let isGridOn = true;
// Create initial grid
for(let i = 0; i < 16*16; i++){
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "gridDiv");
    gridContainer.appendChild(gridDiv);
};

sliderOutput.textContent = `Grid size: ${sliderInput.value} x ${sliderInput.value}`;
sliderInput.oninput = () => {
    sliderOutput.textContent = `Grid size: ${sliderInput.value} x ${sliderInput.value}`;
};

function drawOnMouseHold() {
    let isDrawing = undefined;
    const gridDiv = document.querySelectorAll(".gridDiv");

    gridContainer.addEventListener("mouseup", () => {
        isDrawing = false;
    });
    gridContainer.addEventListener("mousedown", () => {
        isDrawing = true;
    });
    gridDiv.forEach((n) => {
        n.addEventListener("mouseover", (e) => {
            if(isDrawing){
                e.currentTarget.style.backgroundColor = "black";
            };
        });
    });
};

drawOnMouseHold();

function updateGridSize(){
    for(let i = 0; i < Number(sliderInput.value) * Number(sliderInput.value); i++){
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", "gridDiv");
        gridContainer.style["grid-template-columns"] = `repeat(${sliderInput.value}, 1fr)`;
        gridContainer.appendChild(gridDiv);
    };
    drawOnMouseHold();
    toggleGridLines();
};
// Clear container from grid divs and create new grid with slider selected size
sliderInput.addEventListener("input", () => {
    gridContainer.replaceChildren();
    updateGridSize();
});

function toggleGridLines() {
    const gridDiv = document.querySelectorAll(".gridDiv");
    tglGridLinesBtn.onclick = () => {
        if(isGridOn) {
            isGridOn = false;
            gridDiv.forEach((n) => {
                n.style.border = "none";
            });
        } else {
            isGridOn = true;
            gridDiv.forEach((n) => {
                n.style.border = "solid 0.5px black";
            });
        }
    };
};

toggleGridLines();

clearGridBtn.addEventListener("click", () => {
    const gridDiv = document.querySelectorAll(".gridDiv");
    gridDiv.forEach((n) => {
        n.style.backgroundColor = "white";
    });
});