document.addEventListener("DOMContentLoaded", function () {
const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked");
        navLinks.classList.toggle("open");
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const text = "hello, Ashley here";
    const typedText = document.getElementById("typed-text");
    let index = 0;
  
    function typeCharacter() {
      if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeCharacter, 100); // speed of typing
      }
    }
  
    typeCharacter();
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    let backToTopBtn = document.getElementById("backToTop");

    
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    };


    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
