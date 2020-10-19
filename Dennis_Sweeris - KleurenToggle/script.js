// Variables
let pageBody = document.getElementById("body");
let navMenu = document.getElementById("nav-menu");
let buttonList = document.getElementById("btn-list");
let buttonLis = document.querySelector(".btn-list ul li");
let buttonListUl = document.querySelector(".btn-list ul");

let radioHome = document.getElementById("radio-home");
let radioRed = document.getElementById("radio-red");
let radioOrange = document.getElementById("radio-orange");
let radioPurple = document.getElementById("radio-purple");
let radioGreen = document.getElementById("radio-green");
let mixWrap = document.querySelector(".btn-mix-wrap");
let mix = document.querySelector(".btn-mix");
let clear = document.querySelector(".btn-clear");
let centerColor = document.querySelector(".center-color");
let introText = document.querySelector(".intro-text");

// Toggle the Navigation Button on/off
let toggleNavStatus = false;
navMenu.onclick = () => {
    if (toggleNavStatus === false) {
        buttonListUl.style.transform = "translateY(0rem)";
        buttonListUl.style.opacity = "1";
        buttonListUl.style.visibility = "visible";
        radioHome.style.visibility = "visible";
        radioRed.style.visibility = "visible";
        radioOrange.style.visibility = "visible";
        radioPurple.style.visibility = "visible";
        radioGreen.style.visibility = "visible";
        mixWrap.style.visibility = "visible";
        introText.style.opacity = "1";
        centerColor.style.opacity = "0";
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        buttonListUl.style.transform = "translateX(-15rem)";
        buttonListUl.style.opacity = "0";
        buttonListUl.style.visibility = "hidden";
        introText.style.opacity = "0";
        centerColor.style.opacity = "0";
        toggleNavStatus = false;
    }
}

// Keyboard presses 1-5
document.addEventListener("keydown", event => {
    if (event.keyCode == 49) {
        pageBody.style.background = "#D3D3D3";
        buttonListUl.style.opacity = "0";
        introText.style.opacity = "0";
        centerColor.style.opacity = "1";
        centerColor.innerHTML = "Lightgray";
        console.log("You pressed 1");
    } else if (event.keyCode == 50) {
        pageBody.style.background = "#FF0000";
        buttonListUl.style.opacity = "0";
        introText.style.opacity = "0";
        centerColor.style.opacity = "1";
        centerColor.innerHTML = "Red";
        console.log("You pressed 2");
    } else if (event.keyCode == 51) {
        pageBody.style.background = "#FFA500";
        buttonListUl.style.opacity = "0";
        introText.style.opacity = "0";
        centerColor.style.opacity = "1";
        centerColor.innerHTML = "Orange";
        console.log("You pressed 3");
    } else if (event.keyCode == 52) {
        pageBody.style.background = "#800080";
        buttonListUl.style.opacity = "0";
        introText.style.opacity = "0";
        centerColor.style.opacity = "1";
        centerColor.innerHTML = "Purple";
        console.log("You pressed 4");
    } else if (event.keyCode == 53) {
        pageBody.style.background = "#008000";
        buttonListUl.style.opacity = "0";
        introText.style.opacity = "0";
        centerColor.style.opacity = "1";
        centerColor.innerHTML = "Green";
        console.log("You pressed 5");
    } else if (event.keyCode == 54) {
        pageBody.style.background = "linear-gradient(90deg, rgba(211,211,211,1) 0%, rgba(255,0,0,1) 25%, rgba(255,165,0,1) 50%, rgba(128,0,128,1) 75%, rgba(0,128,0,1) 100%)";
        buttonListUl.style.opacity = "0";
        introText.style.opacity = "0";
        centerColor.style.opacity = "1";
        centerColor.innerHTML = "Mixed Gradient, press 7 to clear";
        console.log("You pressed 6");
    } else if (event.keyCode == 55) {
        pageBody.style.background = "none";
        pageBody.style.background = "#FFF";
        navMenu.onclick();
        console.log("You pressed 7");
    } else {
        pageBody.style.background = "#FFF";
        buttonListUl.style.visibility = "visible";
        centerColor.innerHTML = "";
    }
});

// Mouseover colors
radioHome.addEventListener("mouseover", () => {
    pageBody.style.background = "#D3D3D3";
    radioHome.innerHTML = "",
        radioRed.innerHTML = "",
        radioOrange.innerHTML = "",
        radioPurple.innerHTML = "",
        radioGreen.innerHTML = "";
    centerColor.innerHTML = "Lightgray";
});
radioRed.addEventListener("mouseover", () => {
    pageBody.style.background = "#FF0000";
    radioHome.innerHTML = "",
        radioRed.innerHTML = "",
        radioOrange.innerHTML = "",
        radioPurple.innerHTML = "",
        radioGreen.innerHTML = "";
    centerColor.innerHTML = "Red";
});
radioOrange.addEventListener("mouseover", () => {
    pageBody.style.background = "#FFA500";
    radioHome.innerHTML = "",
        radioRed.innerHTML = "",
        radioOrange.innerHTML = "",
        radioPurple.innerHTML = "",
        radioGreen.innerHTML = "";
    centerColor.innerHTML = "Orange";
});
radioPurple.addEventListener("mouseover", () => {
    pageBody.style.background = "#800080";
    radioHome.innerHTML = "",
        radioRed.innerHTML = "",
        radioOrange.innerHTML = "",
        radioPurple.innerHTML = "",
        radioGreen.innerHTML = "";
    centerColor.innerHTML = "Purple";
});
radioGreen.addEventListener("mouseover", () => {
    pageBody.style.background = "#008000";
    radioHome.innerHTML = "",
        radioRed.innerHTML = "",
        radioOrange.innerHTML = "",
        radioPurple.innerHTML = "",
        radioGreen.innerHTML = "";
    centerColor.innerHTML = "Green";
});

// Mix colors
mix.addEventListener("click", () => {
    pageBody.style.background = "linear-gradient(90deg, rgba(211,211,211,1) 0%, rgba(255,0,0,1) 25%, rgba(255,165,0,1) 50%, rgba(128,0,128,1) 75%, rgba(0,128,0,1) 100%)";
    introText.style.opacity = "0";
    centerColor.style.opacity = "1";
    centerColor.innerHTML = "Mixed Gradient, press 7 to clear";
});
// Clear gradient
clear.addEventListener("click", () => {
    pageBody.style.background = "none";
    pageBody.style.background = "#FFF";
    introText.style.opacity = "0";
    centerColor.style.opacity = "1";
    centerColor.innerHTML = "Color/Gradient cleared";
});

// Click Events
radioHome.addEventListener("click", () => {
    radioRed.style.visibility = "hidden";
    radioOrange.style.visibility = "hidden";
    radioPurple.style.visibility = "hidden";
    radioGreen.style.visibility = "hidden";
    mixWrap.style.visibility = "hidden";
    introText.style.opacity = "0";
    centerColor.style.opacity = "1";
    centerColor.innerHTML = "Lightgray";
});

radioRed.addEventListener("click", () => {
    radioHome.style.visibility = "hidden";
    radioOrange.style.visibility = "hidden";
    radioPurple.style.visibility = "hidden";
    radioGreen.style.visibility = "hidden";
    mixWrap.style.visibility = "hidden";
    introText.style.opacity = "0";
    centerColor.style.opacity = "1";
    centerColor.innerHTML = "Red";
});

radioOrange.addEventListener("click", () => {
    radioHome.style.visibility = "hidden";
    radioRed.style.visibility = "hidden";
    radioPurple.style.visibility = "hidden";
    radioGreen.style.visibility = "hidden";
    mixWrap.style.visibility = "hidden";
    introText.style.opacity = "0";
    centerColor.style.opacity = "1";
    centerColor.innerHTML = "Orange";
});

radioPurple.addEventListener("click", () => {
    radioHome.style.visibility = "hidden";
    radioRed.style.visibility = "hidden";
    radioOrange.style.visibility = "hidden";
    radioGreen.style.visibility = "hidden";
    mixWrap.style.visibility = "hidden";
    introText.style.opacity = "0";
    centerColor.style.opacity = "1";
    centerColor.innerHTML = "Purple";
});

radioGreen.addEventListener("click", () => {
    radioHome.style.visibility = "hidden";
    radioRed.style.visibility = "hidden";
    radioOrange.style.visibility = "hidden";
    radioPurple.style.visibility = "hidden";
    mixWrap.style.visibility = "hidden";
    introText.style.opacity = "0";
    centerColor.style.opacity = "1";
    centerColor.innerHTML = "Green";
});