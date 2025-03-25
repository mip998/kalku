let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch {
        display.value = "Error";
    }
}

function calculateTrig(func) {
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = "Error";
            return;
        }
        let radians = value * (Math.PI / 180); // Konversi ke radian
        if (func === "sin") display.value = Math.sin(radians).toFixed(6);
        if (func === "cos") display.value = Math.cos(radians).toFixed(6);
        if (func === "tan") display.value = Math.tan(radians).toFixed(6);
    } catch {
        display.value = "Error";
    }
}

function calculateSqrt() {
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            display.value = "Error"; // Tidak bisa akar negatif dalam real number
            return;
        }
        display.value = Math.sqrt(value).toFixed(6);
    } catch {
        display.value = "Error";
    }
}
