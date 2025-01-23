document.addEventListener("DOMContentLoaded", function () {
  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      description: document.getElementById("description").value,
    };

    // Here you would typically send the data to your server
    // For now, we'll just show an alert
    alert("תודה! נציג יצור איתך קשר בהקדם");

    // Close the modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("contactModal")
    );
    modal.hide();

    // Reset the form
    contactForm.reset();
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation on scroll
  function revealOnScroll() {
    const elements = document.querySelectorAll(
      ".service-card, .feature-card, .testimonial-card"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check
});
