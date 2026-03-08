document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const slideCounter = document.getElementById('slideCounter');
    let currentSlide = 0;

    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
        slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;

        // Hide/Show buttons
        prevBtn.style.visibility = (currentSlide === 0) ? 'hidden' : 'visible';
        nextBtn.textContent = (currentSlide === slides.length - 1) ? 'শেষ' : 'পরবর্তী';
    }

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlide();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    });

    document.getElementById('downloadPdf').addEventListener('click', () => {
        window.print();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlide();
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlide();
            }
        }
    });

    updateSlide(); // Initial setup
});
