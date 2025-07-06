// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// Add hover effect to all order buttons
document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("mouseenter", function () {
        this.style.opacity = "0.9";
        this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
        this.style.opacity = "";
        this.style.transform = "";
    });
});
