let icon = document.getElementById("icon");
let ul = document.querySelector("nav ul");
let nav = document.querySelector("nav");

console.log(nav)

let flag = 1;

icon.onclick = function () {
    if (flag) {
        ul.classList = "show";
        flag = 0;
    } else {
        ul.removeAttribute("class");
        flag = 1;
    }
}