// const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");
const selectorbtn = document.querySelector(".theme-selector");

selectorbtn.addEventListener("click", () => {
    bodyEl.classList.toggle("light-mode")
})

// function updateBody() {
//     if (inputEl.checked) {
//         bodyEl.style.backgroundColor = "hsl(0, 0%, 100%)"
//     }
// }

// inputEl.addEventListener("input", updateBody());