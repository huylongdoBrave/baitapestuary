// feature slider
let currentIndex = 0;

function getSlidesPerView() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function showSlides() {
    const dotsContainer = document.querySelector('.dots-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    const slidesPerView = getSlidesPerView();
    const totalSlides = slides.length;

    // Tính số lần chuyển slide tối đa
    const maxIndex = totalSlides - slidesPerView;

    // Đảm bảo currentIndex nằm trong khoảng hợp lệ
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    // Ẩn/hiện các slide dựa trên currentIndex
    slides.forEach((slide, i) => {
        slide.style.display = (i >= currentIndex && i < currentIndex + slidesPerView) ? 'block' : 'none';
    });

    // Xóa các dot cũ và tạo lại
    dotsContainer.innerHTML = '';
    const numDots = totalSlides - slidesPerView + 1;

    if (numDots > 1) { // Chỉ hiển thị dot nếu có nhiều hơn 1 trang
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => currentSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    const dots = document.querySelectorAll('.dot');

    // Cập nhật trạng thái active cho dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });

    // Cập nhật trạng thái của mũi tên
    leftArrow.classList.toggle('disabled', currentIndex === 0);
    rightArrow.classList.toggle('disabled', currentIndex >= maxIndex);
}

function moveSlide(n) {
    currentIndex += n;
    showSlides();
}

function currentSlide(n) {
    currentIndex = n;
    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);
window.addEventListener('resize', showSlides);
