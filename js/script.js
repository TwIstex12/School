const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      // змінюємо фон
      const bg = slide.getAttribute("data-bg");
      slide.style.backgroundImage = `url(${bg})`;
    }
  });
}

// Початковий фон
showSlide(current);

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
});

document.querySelectorAll(".prev").forEach(btn => {
  btn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
});
