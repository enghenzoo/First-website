// Toggle Navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
    
// JavaScript to toggle the dropdown menu on click (for mobile)
document.querySelector('.dropdown-btn').addEventListener('click', function(e) {
    e.preventDefault();
    let dropdownMenu = this.nextElementSibling; // Get the dropdown menu
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});


const scrollTopBtn = document.getElementById('scroll-top-btn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
};


// Scroll smoothly to the top when the button is clicked
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});



// When a user clicks a div, change active class
document.querySelectorAll('.details-head div').forEach((div, index) => {
    div.addEventListener('click', function() {
        // Remove active class from all divs
        document.querySelectorAll('.details-head div').forEach(d => d.classList.remove('active'));
        div.classList.add('active'); // Add active class to clicked div

        // Hide all content
        document.querySelectorAll('.details-body .content-wrapper').forEach(content => {
            content.classList.remove('active');
        });

        // Show content for the clicked section
        document.querySelectorAll('.details-body .content-wrapper')[index].classList.add('active');
    });
});



let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideTimer; // Variable to hold the slide transition timer

// Function to display the active slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Function to go to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
    resetSlideTimer(); // Reset the timer after manual click
}

// Function to go to the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // Loop to the last slide if on the first slide
    showSlide(slideIndex);
    resetSlideTimer(); // Reset the timer after manual click
}

// Function to reset the slide timer
function resetSlideTimer() {
    clearInterval(slideTimer); // Clear the previous timer
    slideTimer = setInterval(nextSlide, 5000); // Set a new timer for automatic transition
}

// Automatically transition slides every 5 seconds
slideTimer = setInterval(nextSlide, 5000);

// Initial display of the first slide
showSlide(slideIndex);

// Arrow button functionality
document.querySelector('.next-arrow').addEventListener('click', nextSlide);
document.querySelector('.prev-arrow').addEventListener('click', prevSlide);


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const testimonialSlider = document.querySelector('.testimonial-slider');
const totalTestimonials = testimonials.length - 2;
const intervalTime = 6000;

function showTestimonial(index) {
    testimonialIndex = index >= totalTestimonials ? 0 : index;
    if (testimonialIndex < 0) testimonialIndex = totalTestimonials - 1;

    testimonialSlider.style.transform = `translateX(-${testimonialIndex * 30}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[testimonialIndex].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        testimonialIndex = index ;
        showTestimonial(testimonialIndex);
        resetTestimonialTimer();
    });
});

let slideInterval = setInterval(() => {
    showTestimonial(testimonialIndex + 1);
}, intervalTime);

function resetTestimonialTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showTestimonial(testimonialIndex + 1);
    }, intervalTime);
}

showTestimonial(testimonialIndex);
