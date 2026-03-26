// main.js
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// locations.js
const locationButtons = document.querySelectorAll('.location-btn');

locationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;

    // Toggle display
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
});
