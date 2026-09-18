// ===============================
// TYPING ANIMATION
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "Aspiring IT Professional",
    "Web Development Learner",
    "JavaScript Learner",
    "ServiceNow Learner",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ===============================
// PARTICLES
// ===============================

const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.opacity =
        Math.random();

    particlesContainer.appendChild(particle);
}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {
    observer.observe(element);
});


// ===============================
// MOUSE CURSOR GLOW
// ===============================

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});


// ===============================
// CARD TILT EFFECT
// ===============================

const cards =
    document.querySelectorAll(
        ".skill-card, .project-card, .stat-card"
    );

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 700) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple =
            document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.4)";
        ripple.style.transform = "translate(-50%, -50%)";
        ripple.style.pointerEvents = "none";

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            (event.clientX - rect.left) + "px";

        ripple.style.top =
            (event.clientY - rect.top) + "px";

        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 500);

    });

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});