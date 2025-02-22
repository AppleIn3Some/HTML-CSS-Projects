// script.js
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
const totalSlides = slides.length;
let slideInterval;

// Function to update the slide position
function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop to the first slide
    updateSlidePosition();
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to the last slide
    updateSlidePosition();
}

// Event listeners for manual navigation
rightArrow.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

leftArrow.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// Auto-slide functionality
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function resetAutoSlide() {
    clearInterval(slideInterval); // Stop current auto-slide
    startAutoSlide(); // Restart auto-slide
}

// Initialize
startAutoSlide();


