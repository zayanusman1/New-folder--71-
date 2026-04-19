function clearscreen() {
    document.getElementById("result").value = "";
}
function setscreenvalue(value) {
    const r = document.getElementById("result");
    if (r.value === "Enter an expression" || r.value === "Error") r.value = "";
    r.value += value;
}
function calculate() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();
    if (expression === "") {
        resultElement.value = "Enter an expression";
        return;
    }
    try {
        resultElement.value = eval(expression);
    }
    catch (e) {
        resultElement.value = "Error";
    }
}