const slides = document.querySelectorAll(".slide");
let counter = 0;

// Position slides
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Use backticks for template literals
});

// Navigate to the previous slide
const goPrev = () => {
    if (counter > 0) { // Optional: Prevent going before the first slide
        counter--;
        slideImage();
    }
};

// Navigate to the next slide
const goNext = () => {
    if (counter < slides.length - 1) { // Optional: Prevent going beyond the last slide
        counter++;
        slideImage();
    }
};

// Slide the images
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`; // Use backticks
    });
};
