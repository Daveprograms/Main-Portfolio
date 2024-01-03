
const styleSwitcherOpenIcon = document.querySelector(".style-switcher-open-icon");
const styleSwitcherCloseIcon = document.querySelector(".style-switcher-close-icon");
const styleSwitcher = document.querySelector(".style-switcher");


styleSwitcherOpenIcon.addEventListener("click", () => {
    styleSwitcher.classList.add("open");
});


styleSwitcherCloseIcon.addEventListener("click", () => {
    styleSwitcher.classList.remove("open");
});

window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});





const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});


const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}


const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateIcon();
});

window.addEventListener("load", () => {
    updateIcon();
});

function updateIcon() {
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
function setActiveStyle(color) {
    document.querySelectorAll(".alternate-style").forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

document.querySelector(".style-switcher-open-icon").addEventListener("click", function() {
    var styleSwitcher = document.querySelector(".style-switcher");
    if (window.matchMedia("(max-width: 900px)").matches) {
      
      styleSwitcher.style.width = "20%"; 
    } else {
    
      styleSwitcher.classList.add("open");
    }
  });
  
