class MagneticElement {
  constructor(el) {
    this.el = el;
    this.bound = 50;
    this.magnetism = 0.5;

    this.el.addEventListener("mousemove", (e) => this.move(e));
    this.el.addEventListener("mouseleave", (e) => this.reset(e));
  }

  move(e) {
    const { clientX, clientY } = e;
    const { left, top, width, height } = this.el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = Math.floor((clientX - centerX) * this.magnetism);
    const deltaY = Math.floor((clientY - centerY) * this.magnetism);

    this.el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }

  reset() {
    this.el.style.transform = `translate(0px, 0px)`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const magneticElements = document.querySelectorAll(".magnetic");
  magneticElements.forEach((el) => new MagneticElement(el));
});
