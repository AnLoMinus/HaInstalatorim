document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Dark Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("dark-theme")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });

  // Stats Counter Animation
  const stats = document.querySelectorAll(".stat-number");
  const statsSection = document.querySelector(".stats-section");

  const startCounting = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        stats.forEach((stat) => {
          const target = parseInt(stat.getAttribute("data-target"));
          let count = 0;
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 16); // 60fps

          const updateCount = () => {
            if (count < target) {
              count += increment;
              stat.textContent = Math.floor(count);
              requestAnimationFrame(updateCount);
            } else {
              stat.textContent = target;
            }
          };

          updateCount();
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const statsObserver = new IntersectionObserver(startCounting, {
    threshold: 0.5,
  });

  statsObserver.observe(statsSection);

  // Contact Form Handling
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> שולח...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      alert("תודה! נציג יצור איתך קשר בהקדם");
      contactForm.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
