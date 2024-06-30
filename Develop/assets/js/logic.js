// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// Create selectors
const toggle = document.querySelector(".dayOrNight");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

const darkModeMsg = "Switch to 🌙";
const lightModeMsg = "Switch to 💡";

toggle.textContent = darkModeMsg;

// Apply themes
function applyDark() {
    header.setAttribute("class", "dark");
    footer.setAttribute("class", "dark");
    main.setAttribute("class", "darkMain");

    toggle.textContent = lightModeMsg;
}

function applyLight() {
    // Executes if Dark Mode - switch to Light
    header.setAttribute("class", "light");
    footer.setAttribute("class", "light");
    main.setAttribute("class", "lightMain");

    toggle.textContent = darkModeMsg; 
}

// Event listener for toggle
toggle.addEventListener('click', function () {

    // Check for theme in Local Storage
    let theme = `${read()}`;

    console.log(`The current theme is: ${theme}.`);

    if(theme === "light") {
        applyDark();
        write("dark");
        console.log("Applying dark theme.");
    }

    if(theme === "dark") {
        applyLight();
        write("light");
        console.log("Applying light theme.");
    }

});

// Read from Local Storage
function read() {
    const theme = `${localStorage.getItem("theme")}`;
    return theme;
}

// Write from Local Storage
function write(mode) {
    localStorage.setItem("theme", `${mode}`);
}

// Execute on page load
function run() {
    // Create a key:value pair in local storage if null
    if(read() === "null") {
        applyLight();
        write("light");
        console.log("Null element. Default to light.");
    }

    // Check current theme and apply on page load
    if(read() === "light")
        applyLight();
    if(read() === "dark")
        applyDark();
}

run();