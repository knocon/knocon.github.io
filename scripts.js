document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 150; // Increase this value to add more space at the top
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//Highlight
document.addEventListener("DOMContentLoaded", () => {
  const cursorDot = document.querySelector("#cursor-dot");
  const cursorOutline = document.querySelector("#cursor-dot-outline");

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });

  document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = 1;
    cursorOutline.style.opacity = 1;
  });

  document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = 0;
    cursorOutline.style.opacity = 0;
  });
});

//Highlight navbar
// Function to update active nav item
function updateActiveSection() {
  const sections = document.querySelectorAll(".right-half section");
  const navItems = document.querySelectorAll(".left-half nav ul li a");
  const scrollPosition = window.pageYOffset + window.innerHeight / 2;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const currentSection = section.getAttribute("id");
      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").slice(1) === currentSection) {
          item.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveSection);
window.addEventListener("load", updateActiveSection);
