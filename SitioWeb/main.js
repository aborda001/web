document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.card1', { delay: 500 });
ScrollReveal().reveal('.card2', { delay: 100 });
ScrollReveal().reveal('.showcase', { delay: 500 });