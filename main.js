
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

// Menu responsive
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


// Feature search
function search() {
    const query = document.getElementById('search-input').value;
    alert('Bạn đã tìm kiếm: ' + query);
    // Thay thế alert bằng logic tìm kiếm thực tế của bạn
}

//  Enter event search
document.getElementById('search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});


// Event cờ
document.addEventListener('DOMContentLoaded', function() {
    const currentFlag = document.getElementById('currentFlag');
    const dropdownContent = document.getElementById('dropdownContent');
    const dropdownFlag = document.getElementById('vnFlag'); // The single flag in the dropdown

    const ukFlagSrc = './static/img/ukflag.png';
    const vnFlagSrc = './static/img/vnflag.png';

    // Sự kiện khi nhấn vào cờ hiện tại để mở/đóng dropdown
    currentFlag.addEventListener('click', function() {
        // Cập nhật lá cờ trong dropdown để hiển thị lựa chọn còn lại
        if (currentFlag.src.includes('ukflag.png')) {
            dropdownFlag.src = vnFlagSrc;
            dropdownFlag.alt = "Vietnam Flag";
        } else {
            dropdownFlag.src = ukFlagSrc;
            dropdownFlag.alt = "UK Flag";
        }
        // Hiển thị hoặc ẩn dropdown
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Sự kiện khi chọn một cờ từ dropdown
    dropdownFlag.addEventListener('click', function() {
        const tempSrc = currentFlag.src;
        currentFlag.src = dropdownFlag.src;
        dropdownFlag.src = tempSrc; // Cập nhật lại cờ trong dropdown cho lần mở tiếp theo
        dropdownContent.style.display = 'none'; // Ẩn dropdown sau khi chọn
    });

    // Ẩn dropdown khi nhấn ra ngoài
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.flag-dropdown')) {
            dropdownContent.style.display = 'none';
        }
    });
});

// Change hover menu (type 2)
/* const menuOptions = document.querySelectorAll('.menu-option');
const sections = document.querySelectorAll('.menu-title-item');

menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Xóa lớp active từ tất cả các option
        menuOptions.forEach(opt => opt.classList.remove('active'));
        // Thêm lớp active cho option được nhấp
        option.classList.add('active');
        // Cuộn đến phần nội dung tương ứng
        const targetId = option.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
}); */

// Change hover menu (type 3)
document.addEventListener('scroll', function() {
    const sections = [
        { id: 'option1', menuIndex: 0 },
        { id: 'option2', menuIndex: 1 },
        { id: 'option3', menuIndex: 2 }
    ];
    const menuLinks = document.querySelectorAll('.menu a');
    let current = 0;

    sections.forEach((section, idx) => {
        const el = document.getElementById(section.id);
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom > 80) {
                current = idx;
            }
        }
    });

    menuLinks.forEach((link, idx) => {
        if (idx === current) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


// Popup contact
document.addEventListener('DOMContentLoaded', function() {
    const contactUI = document.getElementById('contact-ui');
    const contactPopup = document.getElementById('contact-popup');
    const closeContactPopup = document.getElementById('closeContactPopup');
    const contactCircle = document.querySelector('.contact-circle');
    const arrowUp = document.querySelector('.arrow-up');
    
    // Hiệu ứng xoay mũi tên khi scroll
    // if (arrowUp) {
    //     window.addEventListener('scroll', function() {
    //         // Tính toán phần trăm đã cuộn của trang
    //         const percent = Math.min(1, window.scrollY / (document.body.scrollHeight - window.innerHeight));
    //         // Cập nhật biến CSS '--rotate' để xoay mũi tên
    //         arrowUp.style.setProperty('--rotate', `${percent * 360}deg`);
    //     });
    // }

    // Hiện popup khi click
    if (contactUI && contactPopup) {
        contactUI.addEventListener('click', function() {
            contactUI.style.display = 'none'; // Ẩn nút contact
            contactPopup.classList.remove('hidden');
        });
    }

    // Đóng popup khi click dấu X
    if (closeContactPopup && contactPopup) {
        closeContactPopup.addEventListener('click', function() {
            contactUI.style.display = 'flex'; // Hiện lại nút contact
            contactPopup.classList.add('hidden');
        });
    }
});
