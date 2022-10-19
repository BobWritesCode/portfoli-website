// Original code before being modified for my needs: 
// https://alvarotrigo.com/blog/css-animations-scroll/#:~:text=What%20are%20CSS%20Scroll%20Animations,text%2C%20images%2C%20and%20videos.

/**
 * Atcivates the reveal effect when scrolling down web pages.
* Original code before being modified for my needs: 
* https://alvarotrigo.com/blog/css-animations-scroll/#:~:text=What%20are%20CSS%20Scroll%20Animations,text%2C%20images%2C%20and%20videos.
 */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 500;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);