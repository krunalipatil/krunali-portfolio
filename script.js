/* =========================
MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("show");
});

/* Close mobile menu after clicking a link */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
item.addEventListener("click", () => {
navLinks.classList.remove("show");
});
});

/* =========================
SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
(entries) => {


    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

},
{
    threshold: 0.12
}


);

sections.forEach((section) => {
observer.observe(section);
});

/* =========================
ACTIVE NAVIGATION
========================= */

const pageSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {


let current = "";

pageSections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }

});

navItems.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
    }

});


});
