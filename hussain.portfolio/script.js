
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// ACTIVE NAVIGATION
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
});

// CONTACT FORM - WHATSAPP
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const whatsappNumber = "923353972064";

    const whatsappMessage =
        `Hello Hussain Asim!\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject}\n\n` +
        `Message:\n${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// AUTOMATIC FOOTER YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();
