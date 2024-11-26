const gameBoard = document.getElementById("board");
const pixelsGrid = document.getElementById("pixels");

const COLORS = {
    bgColor: "var(--pxs-bg-color)",
    bgColorOn: "var(--pxs-bg-color-on)",
    APPLE: "var(--pxs-apple-color)",
    SNAKE: "var(--pxs-snake-color)"
};

const gridBoxes = 17;

function pixel(x, y, color) {
    if (
        x - Math.floor(gridBoxes / 2) === 0 &&
        y - Math.floor(gridBoxes / 2) === 0
    ) {
        pixelsGrid.style.backgroundColor = color;
    }

    return `calc(var(--pxs-size) * ${(x ?? 0) - Math.floor(gridBoxes / 2)}) calc(var(--pxs-size) * ${(y ?? 0) - Math.floor(gridBoxes / 2)
        }) ${color ?? COLORS.bgColor}`;
}

function formatTimeDifference(pastDate, futureDate) {
    let difference = futureDate - pastDate;
    if (difference >= 1000 * 60 * 60) {
        return `${Math.floor((difference / 1000) / 60 / 60)} hours`;
    } else if (difference >= 1000 * 60) {
        return `${Math.floor((difference / 1000) / 60)} minutes`;
    } else {
        return `${Math.floor(difference / 1000)} seconds`;
    }
}

function changePixelColor(pixelBoxIndex, newPixelColor) {
    pixelBoxIndex = Math.floor(pixelBoxIndex);
    const pixelBox = pixelsGridView[pixelBoxIndex];
    pixelBox.pixelBox = pixel(
        pixelBox.cords[0],
        pixelBox.cords[1],
        newPixelColor
    );
    return pixelBox;
}

function resetPixelColor(pixelBoxIndex) {
    pixelBoxIndex = Math.floor(pixelBoxIndex);
    const pixelBox = pixelsGridView[pixelBoxIndex];
    pixelBox.pixelBox = pixel(
        pixelBox.cords[0],
        pixelBox.cords[1],
        pixelBox.cords[1] % 2 ? COLORS.bgColorOn : COLORS.bgColor
    );
}

function getRandomPixelIndex(rejectArray) {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * pixelsGridView.length);
    } while (rejectArray ? rejectArray.includes(randomIndex) : false);
    return randomIndex;
}

function clearBoard() {
    pixelsGridView = [];
    for (let col = 0; col < gridBoxes; col++) {
        for (let row = 0; row < gridBoxes; row++) {
            pixelsGridView.push({
                cords: [row, col],
                pixelBox: pixel(row, col, col % 2 ? COLORS.bgColorOn : COLORS.bgColor)
            });
        }
    }
}

let pixelsGridView = [];
clearBoard();

[...document.querySelector("div#moves").children].forEach(child => {
    child.addEventListener("click", (event) => {
        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                code: "Arrow" + child.id
                    .slice(4)
                    .toLowerCase()
                    .replace(/^./, c => c.toUpperCase())
            })
        );
    });
});