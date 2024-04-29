var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 45,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },
    grabCursor: true,
    loop: false,
});