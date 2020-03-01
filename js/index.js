function changeBackground() {
    if (style.background === "white") {
        const r = Math.ceil(Math.random() * 254);
        const g = Math.ceil(Math.random() * 254);
        const b = Math.ceil(Math.random() * 254);
        changeButtonColor();
        style.background = `rgb(${r}, ${g}, ${b})`;
    } else {
        buttonStyle.background = "lightgrey";
        style.background = "white";
    }
}

function changeButtonSize() {
    buttonWidth = Math.ceil(Math.random() * 280);
    while (buttonWidth < 70) {
        buttonWidth = Math.ceil(Math.random() * 150);
    }
    buttonHeight = Math.ceil(Math.random() * 85);
    while (buttonHeight < 22) {
        buttonHeight = Math.ceil(Math.random() * 150);
    }
    buttonStyle.height = `${buttonHeight}px`;
    buttonStyle.width = `${buttonWidth}px`;
}

function changeButtonPosition() {
    const x = Math.ceil(Math.random() * (windowWidth - 30 - buttonWidth));
    const y = Math.ceil(Math.random() * (windowHeight - 30 - buttonHeight));
    const start = Date.now();
    const timer = setInterval(function() {
        const timePassed = Date.now() - start;
        const maxTime = 500;
        if (timePassed >= maxTime) {
            lastX = x;
            lastY = y;
            clearInterval(timer);
            return;
        }
        buttonStyle.left = `${lastX +  (x - lastX) / maxTime * timePassed}px`;
        buttonStyle.top = `${lastY + (y - lastY)  / maxTime * timePassed}px`;
    }, 20);
}

function changeButtonColor() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    buttonStyle.background = `rgb(${r}, ${g}, ${b})`
}

const button = document.getElementsByTagName("button")[0];
const style = document.getElementsByTagName("body")[0].style;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const buttonStyle = button.style;

let buttonWidth;
let buttonHeight;
let lastX = 0;
let lastY = 0;


style.background = "white";
buttonStyle.position = "absolute";
buttonStyle.outline = "none";
buttonStyle.border = "none";
buttonStyle.background = "lightgrey";
changeButtonSize();
changeButtonPosition();

button.addEventListener("click", () => {
    changeButtonSize();
    changeButtonPosition();
    changeBackground();
});
