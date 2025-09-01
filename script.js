// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();