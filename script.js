// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});

// SCROLL ANIMATION

const cards = document.querySelectorAll(
  ".card, .review-card, .stat-box"
);

window.addEventListener("scroll", reveal);

function reveal(){

  const triggerBottom =
    window.innerHeight / 1.2;

  cards.forEach(card => {

    const cardTop =
      card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }else{

      card.style.opacity = "0";
      card.style.transform =
      "translateY(50px)";

    }

  });

}

reveal();

// TYPING EFFECT

const text =
"Authentic Italian Cuisine";

let index = 0;

function typing(){

  if(index < text.length){

    document.title += text.charAt(index);

    index++;

    setTimeout(typing, 150);

  }

}

typing();