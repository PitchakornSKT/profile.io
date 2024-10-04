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