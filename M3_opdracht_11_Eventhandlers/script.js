const alertButton = document.querySelector(".btn-alert");

const showAlert = () => {
    alert("Button clicked");
};
alertButton.addEventListener("click", showAlert);



const toggleBackgroundColor = document.querySelector(".btn-backgroundcolor");
const backgroundColor = document.querySelector("body");

const toggleColor = () => {
    // backgroundColor.classList.add("red-background");
    backgroundColor.classList.toggle("red-background");
}

toggleBackgroundColor.addEventListener("click", toggleColor);


