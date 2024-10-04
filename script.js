//typing animation script
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".typing", {
        strings: ["Computer Science(CIS)", "653450095-6"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });
});

//navbar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));

        this.classList.add('active');
    });
});

//navbar Scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { 
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() === 0) {
            $('.navbar').removeClass('scrolled');
        }
    });
});

$(document).ready(function() {
    $('.nav-link').on('click', function(event) {
        event.preventDefault(); // ป้องกันการทำงานตามปกติของลิงก์
        const target = $(this).attr('href'); // รับค่า href ของลิงก์
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('.navbar').outerHeight() // เลื่อนลงไปยังเป้าหมาย
        }, 500); // ระยะเวลาในการเลื่อน
    });
});



