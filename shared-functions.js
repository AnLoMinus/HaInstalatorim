// Shared WhatsApp functionality for all designs
const whatsappService = {
  phoneNumber: "972533716386",

  // Format package details for WhatsApp message
  formatPackageDetails(packageName, price, features) {
    const message = `
*בחרתי חבילת ${packageName}*
מחיר: ${price}

פירוט השירותים:
${features.map((feature) => `• ${feature}`).join("\n")}

אשמח לקבל פרטים נוספים!
    `.trim();

    return encodeURIComponent(message);
  },

  // Send WhatsApp message
  sendMessage(message) {
    window.open(`https://wa.me/${this.phoneNumber}?text=${message}`, "_blank");
  },

  // Handle package selection
  handlePackageSelection(element) {
    // Get package details from the closest package container
    const packageCard = element.closest(
      ".price-card, .package-card, .price-box"
    );

    const packageName = packageCard.querySelector("h3").textContent;
    const price = packageCard.querySelector(".price").textContent;
    const features = Array.from(packageCard.querySelectorAll("ul li")).map(
      (li) => li.textContent
    );

    const message = this.formatPackageDetails(packageName, price, features);
    this.sendMessage(message);
  },
};

// Add click handlers to all package buttons across different designs
document.addEventListener("DOMContentLoaded", function () {
  // Initialize package buttons
  const packageButtons = document.querySelectorAll(`
    .price-card button,
    .package-card button,
    .price-box button
  `);

  packageButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      whatsappService.handlePackageSelection(e.target);
    });
  });

  // Add tracking for button clicks
  const trackButtonClick = (buttonText) => {
    console.log(`Package selected: ${buttonText}`);
    // Here you can add analytics tracking if needed
  };

  // Add visual feedback for button clicks
  const addButtonFeedback = (button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
      setTimeout(() => {
        button.classList.remove("clicked");
      }, 200);
    });
  };

  // Initialize all buttons with feedback
  packageButtons.forEach((button) => {
    addButtonFeedback(button);
    button.addEventListener("click", () =>
      trackButtonClick(button.textContent)
    );
  });
});
