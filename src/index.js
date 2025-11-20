const dropdown = document.querySelector(".dropdown");
const items = document.querySelector(".menu");

items.hidden = true;

dropdown.addEventListener("click", () => {
    toggleVisibility(items);
})

function toggleVisibility(element) {
    if (element.hidden === true) {
        element.hidden = false;
    }
    else {
        element.hidden = true;
    }
}

const dropdown2 = document.querySelector(".dropdown2");
const items2 = document.querySelector(".menu2");
items2.hidden = true;

dropdown2.addEventListener("click", () => {
    toggleVisibility(items2);
})

export {toggleVisibility}