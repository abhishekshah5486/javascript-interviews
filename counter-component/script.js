var countElement = document.querySelector("h3");
var incrementBtnElement = document.querySelector(".increment-btn");
var decrementBtnElement = document.querySelector(".decrement-btn");
var numericInputFieldElement = document.getElementById("increment-decrement");
var resetBtnElement = document.getElementsByClassName("reset-btn")[0];

incrementBtnElement.addEventListener("click", (event) => {
    var prevCountValue = countElement.innerText.split(" ")[1];
    var currentInputValue = numericInputFieldElement.value;
    var newCountValue = null;
    if (currentInputValue === "") {
        newCountValue = Number(prevCountValue === "N/A" ? 0 : prevCountValue) + 1;
    }
    else {
        if (Number(currentInputValue) <= 0) {
            window.alert("Please enter a positive number.");
            return;
        }
        newCountValue = Number(prevCountValue === "N/A" ? 0 : prevCountValue) + Number(currentInputValue)
    };
    countElement.innerText = countElement.innerText.split(" ")[0] + " " + newCountValue;
})
decrementBtnElement.addEventListener("click", (event) => {
    var prevCountValue = countElement.innerText.split(" ")[1];
    var currentInputValue = numericInputFieldElement.value;
    var newCountValue = null;
    if (currentInputValue === "") {
        newCountValue = Number(prevCountValue === "N/A" ? 0 : prevCountValue) - 1;
    }
    else {
        if (Number(currentInputValue) <= 0) {
            window.alert("Please enter a positive number.");
            return;
        }
        newCountValue = Number(prevCountValue === "N/A" ? 0 : prevCountValue) - Number(currentInputValue);
    }
    if (newCountValue < 0) return;
    countElement.innerText = countElement.innerText.split(" ")[0] + " " + newCountValue;
})

resetBtnElement.addEventListener("click", (event) => {
    countElement.innerText = "Count: 0";
})
console.log(countElement.innerText);