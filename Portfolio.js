/* =========================================
   TYPING ANIMATION
========================================= */

const typingElement = document.getElementById("typing");

const words = [
    "IT Professional",
    "Web Developer",
    "JavaScript Learner",
    "ServiceNow Learner"
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

            setTimeout(typeEffect, 1500);

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

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();



/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* =========================================
   PARTICLES
========================================= */

const particlesContainer =
    document.getElementById("particles");


for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 15 + 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random() * 0.5 + 0.1;

    particlesContainer.appendChild(particle);

}



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});



/* =========================================
   CARD MOUSE TILT
========================================= */

const cards =
    document.querySelectorAll(
        ".skill-card, .project-card"
    );


cards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

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
            (y - centerY) / 18;

        const rotateY =
            (centerX - x) / 18;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "";

    });

});