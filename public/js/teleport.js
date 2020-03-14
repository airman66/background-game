function changeBackground() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    changeButtonColor();
    style.background = `rgb(${r}, ${g}, ${b})`;
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
    buttonStyle.left = `${x}px`;
    buttonStyle.top = `${y}px`;
}

function changeButtonColor() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    buttonStyle.background = `rgb(${r}, ${g}, ${b})`
}

const button = document.getElementsByTagName("button")[0];
const style = document.getElementsByTagName("body")[0].style;
const menuStyle = document.getElementsByTagName("div")[1].style;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const buttonStyle = button.style;
const r = Math.ceil(Math.random() * 255);
const g = Math.ceil(Math.random() * 255);
const b = Math.ceil(Math.random() * 255);

let buttonWidth;
let buttonHeight;

changeBackground();
menuStyle.background = `rgb(${r}, ${g}, ${b})`;
buttonStyle.position = "absolute";
buttonStyle.outline = "none";
buttonStyle.border = "none";
changeButtonSize();
changeButtonPosition();

button.addEventListener("click", () => {
    changeButtonSize();
    changeButtonPosition();
    changeBackground();
});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});