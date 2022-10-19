const btnOpenDropMenu = document.getElementById("toggle-dropdown"); 

/**
 * Activates the reveal effect when scrolling down web pages.
* Original code before being modified for my needs: 
* https://alvarotrigo.com/blog/css-animations-scroll/#:~:text=What%20are%20CSS%20Scroll%20Animations,text%2C%20images%2C%20and%20videos.
 */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = windowHeight * 0.80;

    if (elementTop < elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function closeDropMenu() {
var dropDown = document.getElementById("mobile-dropdown"); 
  if (dropDown.classList.contains("open-dropdown")) {
    dropDown.classList.remove("open-dropdown");
  }
}

function openDropMenu(){
  var dropDown = document.getElementById("mobile-dropdown");
  if (dropDown.classList.contains("open-dropdown")) {
    dropDown.classList.remove("open-dropdown");
  } else {
  dropDown.classList.add("open-dropdown");
  }
}

window.addEventListener("scroll", function() {
  reveal();
  closeDropMenu();
});

btnOpenDropMenu.addEventListener("click", openDropMenu);