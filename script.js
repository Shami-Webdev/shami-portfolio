
// Update the copyright year

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Reveal sections when they enter the screen

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .project-card, .about-content, .skill-card"
);
revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(function(element) {
    revealObserver.observe(element);
});

