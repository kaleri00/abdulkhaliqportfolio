// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Bootstrap custom validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault(); // Stop submission
      event.stopPropagation(); // Stop bubbling
    }

    form.classList.add("was-validated");
  });
});
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
// ===== Scroll Reveal Animation =====
const reveals = document.querySelectorAll(
  "#services .card, #about h2, #about p, #skills .col-md-3, #projects .card, #contact form"
);

reveals.forEach((el, index) => {
  el.classList.add("reveal");

  // Stagger animation
  el.style.transitionDelay = `${index * 0.15}s`;
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

reveals.forEach(el => observer.observe(el));
