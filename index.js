// const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");
const selectorbtn = document.querySelector(".theme-selector");

const selectorText = document.querySelector(".selectorText")
const inputEl = document.querySelector("input")
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

changeTheme();

function changeTheme() {
    if (inputEl.checked) {
        bodyEl.classList.add("light-mode")
        selectorText.innerText = "Light-mode"
    } else {
        bodyEl.classList.remove("light-mode")
        selectorText.innerText = "Dark-mode"
    }
}

inputEl.addEventListener("input", () => {
    changeTheme();
    updateLocalStorage();
})


function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}

// selectorbtn.addEventListener("click", () => {
//     bodyEl.classList.toggle("light-mode")
//     updateLocalStorage();
// })


// function updateBody() {
//     if (inputEl.checked) {
//         bodyEl.style.backgroundColor = "hsl(0, 0%, 100%)"
//     }
// }

// inputEl.addEventListener("input", updateBody());