const gridContainer = document.getElementById("container");

for(let i = 0; i < 16*16; i++){
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "gridDiv");
    gridContainer.appendChild(gridDiv);
};

const gridDivGlobal = document.querySelectorAll(".gridDiv");

gridContainer.addEventListener("click", () => {
    gridDivGlobal.forEach((n) => {
        n.addEventListener("mouseover", (e) => {
            e.currentTarget.style.backgroundColor = "black"
        });
    });
});