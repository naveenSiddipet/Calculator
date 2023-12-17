let box = document.getElementById("calcyDisplay");

function toScreen(x) {
    box.value += x;
    if (x === "C") {
        box.value = ""
    }
}

function answer() {
    let x = box.value;
    x = eval(x);
    box.value = x;
}

function backspace() {
    let num = box.value;
    let len = num.length - 1;
    let newNum = num.substring(0, len);
    box.value = newNum;
}