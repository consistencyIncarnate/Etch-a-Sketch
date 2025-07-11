const gridContainer = document.getElementById("container");
const sliderInput = document.getElementById("gridSize");
const sliderOutput = document.querySelector(".sliderDisplay");
const tglGridLinesBtn = document.getElementById("tglGridLines");
const clearGridBtn = document.getElementById("clearGrid");
let isGridOn = true;
const clrChangeBtn = document.getElementById("colorPicker");
const rnbwBtn = document.querySelector(".tglRnbwMd");
let isRnbwOn = false;
const colorArr = ["#FF0000","#FFA500","#FFFF00","#008000","#0000FF","#560591","#7F00FF"];
const eraseBtn = document.querySelector(".tglEraser");
let isEraserOn = false;
const printButton = document.getElementById("printBtn");
// Create initial grid
for(let i = 0; i < 16*16; i++){
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "gridDiv");
    gridContainer.appendChild(gridDiv);
};
// Initial values
sliderInput.value = 16;
clrChangeBtn.value = "#000000"

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
    gridContainer.addEventListener("mouseleave", () => {
        isDrawing = false;
    });
    gridDiv.forEach((n) => {
        n.onclick = (e) => {
            e.currentTarget.style.backgroundColor = clrChangeBtn.value;
        };
        n.addEventListener("mouseover", (e) => {
            if(isDrawing){
                e.currentTarget.style.backgroundColor = clrChangeBtn.value;
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
    // Checks if grid lines are off so on grid size change it does not show them
    if(!isGridOn) {
        const gridDiv = document.querySelectorAll(".gridDiv");
            gridDiv.forEach((n) => {
                n.style.border = "none";
            });
    };
    toggleGridLines();
    colorSelection();
    keepRainbowOnGridChange();
    isEraserOn = false;
    eraseBtn.style.color = "green";
    eraseBtn.style.backgroundColor = "lightgray";
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
            tglGridLinesBtn.style.color = "green";
            tglGridLinesBtn.style.backgroundColor = "lightgray";
            gridDiv.forEach((n) => {
                n.style.border = "none";
            });
        } else {
            isGridOn = true;
            tglGridLinesBtn.style.color = "lightgray";
            tglGridLinesBtn.style.backgroundColor = "green";
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

clearGridBtn.onmousedown = () => {
    clearGridBtn.style.color = "lightgray";
    clearGridBtn.style.backgroundColor = "green";
    clearGridBtn.onmouseup = () => {
        clearGridBtn.style.color = "green";
        clearGridBtn.style.backgroundColor = "lightgray";
    };
    clearGridBtn.onmouseout = () => {
        clearGridBtn.style.color = "green";
        clearGridBtn.style.backgroundColor = "lightgray";
    };
};

function colorSelection() {
    clrChangeBtn.onchange = () => {
        if(isRnbwOn) {
            let isDrawing = undefined;
            const gridDiv = document.querySelectorAll(".gridDiv");

            gridContainer.addEventListener("mouseup", () => {
                isDrawing = false;
            });
            gridContainer.addEventListener("mousedown", () => {
                isDrawing = true;
            });
            gridDiv.forEach((n) => {
                n.onclick = (e) => {
                    e.currentTarget.style.backgroundColor = colorArr[Math.floor(Math.random() * 6)];
                };
                n.addEventListener("mouseover", (e) => {
                    if(isDrawing){
                        e.currentTarget.style.backgroundColor = colorArr[Math.floor(Math.random() * 6)];
                    };
                });
            });
        } else {
            isEraserOn = false;
            let isDrawing = undefined;
            const gridDiv = document.querySelectorAll(".gridDiv");

            gridContainer.addEventListener("mouseup", () => {
                isDrawing = false;
            });
            gridContainer.addEventListener("mousedown", () => {
                isDrawing = true;
            });
            gridDiv.forEach((n) => {
                n.onclick = (e) => {
                    e.currentTarget.style.backgroundColor = clrChangeBtn.value;
                };
                n.addEventListener("mouseover", (e) => {
                    if(isDrawing){
                    e.currentTarget.style.backgroundColor = clrChangeBtn.value;
                    };
                });
            });
        };
    };
};

colorSelection();

function tglRnbw() {   
    rnbwBtn.onclick = () => {
        if(isRnbwOn) {
            isRnbwOn = false;
            rnbwBtn.style.color = "green";
            rnbwBtn.style.backgroundColor = "lightgray";
            drawOnMouseHold();
        } else {
            isRnbwOn = true;
            isEraserOn = false;
            rnbwBtn.style.color = "lightgray";
            rnbwBtn.style.backgroundColor = "green";
            eraseBtn.style.color = "green";
            eraseBtn.style.backgroundColor = "lightgray";
            let isDrawing = undefined;
            const gridDiv = document.querySelectorAll(".gridDiv");

            gridContainer.addEventListener("mouseup", () => {
                isDrawing = false;
            });
            gridContainer.addEventListener("mousedown", () => {
                isDrawing = true;
            });
            gridContainer.addEventListener("mouseleave", () => {
                isDrawing = false;
            });
            gridDiv.forEach((n) => {
                n.onclick = (e) => {
                    e.currentTarget.style.backgroundColor = colorArr[Math.floor(Math.random() * 6)];
                };
                n.addEventListener("mouseover", (e) => {
                    if(isDrawing){
                        e.currentTarget.style.backgroundColor = colorArr[Math.floor(Math.random() * 6)];
                    };
                });
            });
        };
    };
};

tglRnbw();

function keepRainbowOnGridChange() {
    if(isRnbwOn) {
        let isDrawing = undefined;
        const gridDiv = document.querySelectorAll(".gridDiv");

        gridContainer.addEventListener("mouseup", () => {
            isDrawing = false;
        });
        gridContainer.addEventListener("mousedown", () => {
            isDrawing = true;
        });
        gridContainer.addEventListener("mouseleave", () => {
            isDrawing = false;
        });
        gridDiv.forEach((n) => {
            n.onclick = (e) => {
                e.currentTarget.style.backgroundColor = colorArr[Math.floor(Math.random() * 6)];
            };
            n.addEventListener("mouseover", (e) => {
                if(isDrawing){
                    e.currentTarget.style.backgroundColor = colorArr[Math.floor(Math.random() * 6)];
                };
            });
        });
    } else {
        drawOnMouseHold();   
    };
};

function toggleEraser() {
    eraseBtn.onclick = () => {
        if(isEraserOn) {
            isEraserOn = false;
            eraseBtn.style.color = "green";
            eraseBtn.style.backgroundColor = "lightgray";
            drawOnMouseHold();
        } else {
            isEraserOn = true;
            isRnbwOn = false;
            eraseBtn.style.color = "lightgray";
            eraseBtn.style.backgroundColor = "green";
            rnbwBtn.style.color = "green";
            rnbwBtn.style.backgroundColor = "lightgray";
            let isDrawing = undefined;
            const gridDiv = document.querySelectorAll(".gridDiv");

            gridContainer.addEventListener("mouseup", () => {
                isDrawing = false;
            });
            gridContainer.addEventListener("mousedown", () => {
                isDrawing = true;
            });
            gridContainer.addEventListener("mouseleave", () => {
                isDrawing = false;
            });
            gridDiv.forEach((n) => {
                n.onclick = (e) => {
                    e.currentTarget.style.backgroundColor = "white";
                };
                n.addEventListener("mouseover", (e) => {
                    if(isDrawing){
                        e.currentTarget.style.backgroundColor = "white";
                    };
                });
            });
        };
    };
};

toggleEraser();

printButton.onclick = () => {
    window.print();
};

printButton.onmousedown = () => {
    printButton.style.color = "lightgray";
    printButton.style.backgroundColor = "green";
    printButton.onmouseup = () => {
        printButton.style.color = "green";
        printButton.style.backgroundColor = "lightgray";
    };
    printButton.onmouseout = () => {
        printButton.style.color = "green";
        printButton.style.backgroundColor = "lightgray";
    };
};