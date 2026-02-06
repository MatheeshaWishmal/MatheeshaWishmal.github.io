// 1. Navigation Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(255, 255, 255, 0.8)";
    }
});

// 2. Scroll Reveal Animation
const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
});

// 3. Typing Effect for Name (Simple & Robust)
const text = "Matheesha Wishmal";
const heading = document.querySelector('.typing-text');
let i = 0;

// Clear text initially to start typing animation
heading.innerHTML = "";

function typeWriter() {
    if (i < text.length) {
        heading.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Speed of typing
    }
}

// Start typing after a short delay
setTimeout(typeWriter, 500);

console.log("Animations Loaded 🚀");