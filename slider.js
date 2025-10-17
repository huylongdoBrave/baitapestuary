// feature slider
function getSlidesPerView() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const slidesPerView = getSlidesPerView();
    const totalSlides = slides.length;

    // Tính số lần chuyển slide tối đa
    const maxIndex = totalSlides - slidesPerView;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    // Ẩn tất cả slide
    slides.forEach((slide, i) => {
        slide.style.display = (i >= index && i < index + slidesPerView) ? 'block' : 'none';
    });
    
    // Cập nhật dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

// Sửa lại sự kiện dot: lấy đúng số dot và gán sự kiện
document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.onclick = () => showSlides(i);
});

// Sửa lại sự kiện arrow
document.querySelector('.carousel-arrow.left').onclick = () => showSlides(currentIndex - 1);
document.querySelector('.carousel-arrow.right').onclick = () => showSlides(currentIndex + 1);

// Khởi tạo lại khi resize
window.addEventListener('resize', () => showSlides(currentIndex));
document.addEventListener('DOMContentLoaded', () => showSlides(0));

// function moveSlide(n) {
//     currentIndex += n;
//     showSlides(n);
// }

// function currentSlide(n) {
//     currentIndex = n;
//     showSlides(n);
// }


// Khởi động carousel
showSlides();