Activity5Script.js
// script.js

function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;

    if (!isNaN(result)) {
        document.getElementById("result").textContent = "Result: " + result;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}