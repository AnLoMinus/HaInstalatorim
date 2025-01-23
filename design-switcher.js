document.addEventListener("DOMContentLoaded", function () {
  // Create the design switcher element
  const designSwitcher = document.createElement("div");
  designSwitcher.className = "design-switcher";

  // Create the toggle button
  const toggleButton = document.createElement("button");
  toggleButton.className = "design-switcher-toggle";
  toggleButton.innerHTML = `
    <i class="fas fa-palette"></i>
    <span>החלף עיצוב</span>
  `;

  // Create the menu
  const menu = document.createElement("div");
  menu.className = "design-switcher-menu";

  // Define the designs
  const designs = [
    {
      name: "עיצוב מודרני",
      icon: "fas fa-modern",
      url: "design1.html",
      color: "#0066cc",
    },
    {
      name: "עיצוב קלאסי",
      icon: "fas fa-landmark",
      url: "design2.html",
      color: "#1a5f7a",
    },
    {
      name: "עיצוב דינמי",
      icon: "fas fa-bolt",
      url: "design3.html",
      color: "#2563eb",
    },
  ];

  // Create menu items
  designs.forEach((design) => {
    const item = document.createElement("a");
    item.href = design.url;
    item.className = "design-switcher-item";
    item.style.setProperty("--hover-color", design.color);

    // Check if this is the current page
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === design.url) {
      item.classList.add("active");
    }

    item.innerHTML = `
      <i class="${design.icon}"></i>
      <span>${design.name}</span>
      <div class="design-preview" style="background-color: ${design.color}"></div>
    `;

    menu.appendChild(item);
  });

  // Add toggle functionality
  toggleButton.addEventListener("click", () => {
    designSwitcher.classList.toggle("open");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!designSwitcher.contains(e.target)) {
      designSwitcher.classList.remove("open");
    }
  });

  // Assemble and add to document
  designSwitcher.appendChild(toggleButton);
  designSwitcher.appendChild(menu);
  document.body.appendChild(designSwitcher);
});
