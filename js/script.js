u(".debug").on("click", () => {
    u(".vHeight").text(`Viewport Height: ${u("body").size().height}`);
    u(".wHeight").text(`Window Height: ${window.innerHeight}`)
});

const r = document.querySelector(":root");

const cssVar = {
    set: (variable, value) => {
        r.style.setProperty(`--${variable}`, value);
    },
    get: (variable) => {
        return getComputedStyle(r).getPropertyValue(`--${variable}`);
    }
}

const windowResize = () => {
    cssVar.set("wHeight", window.innerHeight / 100);
    cssVar.set("wWidth", window.innerWidth / 100);
    cssVar.set("wMin", window.innerHeight <= window.innerWidth ? window.innerHeight / 100 : window.innerWidth / 100);
    cssVar.set("wMax", window.innerHeight >= window.innerWidth ? window.innerHeight / 100 : window.innerWidth / 100);
    // console.log("wHeight: ", cssVar.get("wHeight"));
    // console.log("wWidth: ", cssVar.get("wWidth"));
    // console.log("wMin: ", cssVar.get("wMin"));
    // console.log("wMax: ", cssVar.get("wMax"));
};

windowResize();

window.addEventListener("resize", windowResize);

u(".startGameBtn").on("click", () => {
    var gridSize = 10;
    // var gridCells = gridSize * gridSize;
    try {
        u(".gridCell").remove();
        for (var r = 0; r < gridSize; r++) {
            for (var c = 0; c < gridSize; c++) {
                try {
                    u(".gameGrid").append(u("<div>").addClass("gridCell").attr("row", r).attr("column", c).attr("id", `r${r}c${c}`).attr("onclick", "clickCell(u(this).attr(\"id\"))"));
                }
                catch (err) {
                    console.log("Error: ", err);
                    break;
                }
                finally {
                    console.log("Added a grid cell");
                }
            }
        }
    }
    catch (err) {
        console.log("Error: ", err);
    }
    finally {
        // u(".gameGrid").css("grid-template-columns", `repeat(${gridSize}, 1fr)`).css("grid-template-rows", `repeat(${gridSize}, 1fr)`);
        u(".gameGrid").attr("style", `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows, repeat(${gridSize}, 1fr)`)
    }
});

function clickCell(cellId) {
    u(`#${cellId}`).toggleClass("clicked");
}