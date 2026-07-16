const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const realSlideCount = slides.length - 1; // last slide is clone

// AUTO-SLIDE TIMER
let autoSlideInterval = setInterval(nextSlide, 5000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);          // stop current timer
  autoSlideInterval = setInterval(nextSlide, 5000); // restart
}

function updateSliderPosition(animate = true) {
  if (!animate) {
    slidesContainer.style.transition = "none";
  } else {
    slidesContainer.style.transition = "transform 0.7s ease-in-out";
  }
  slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Go to next slide
function nextSlide() {
  currentIndex++;
  updateSliderPosition();

  if (currentIndex === slides.length - 1) {
    setTimeout(() => {
      currentIndex = 0;
      updateSliderPosition(false);
    }, 700);
  }
}

// Go to previous slide
function prevSlide() {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
    updateSliderPosition(false);
  }

  setTimeout(() => {
    currentIndex--;
    updateSliderPosition();
  }, 20);
}

// EVENT LISTENERS WITH TIMER RESET
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// INITIAL POSITION
updateSliderPosition();
