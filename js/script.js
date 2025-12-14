let currentSlide = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    function updateSlide() {
      slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }

    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
      }
    }

    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });
