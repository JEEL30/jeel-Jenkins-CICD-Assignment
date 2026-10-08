// TYPING ANIMATION

const words = [
    "Cloud Infrastructure.",
    "Future of DevOps.",
    "Scalable Systems.",
    "Automated Deployments."
];

const typingElement = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentWord.length) {

        speed = 1800;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const expanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", expanded);

});


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

document.querySelectorAll(
    ".about-card, .skill-card, .project-card"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
