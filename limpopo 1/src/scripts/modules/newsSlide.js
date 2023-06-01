export function newsSlide() {
    const swiper = new Swiper('.swiper-container3', {
        // Optional parameters
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 90,
        centeredSlides: true,
        loop : true,
        
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },

            1000: {
                slidesPerView: 4.1,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },
        }
    });
}
