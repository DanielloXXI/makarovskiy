let lastScroll = 0;
const defaultOffset = 130;
const header = document.querySelector('.header');

// const scrollPosition = () => window.scrollY|| document.documentElement.scrollTop;
// const containHide = () => header.classList.contains('hide');

// window.addEventListener('scroll', () => {
//     if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
//         //scroll down
//         header.classList.add('hide');
//         header.classList.remove('fixed');
//     }
//     else if (scrollPosition() < lastScroll && containHide()) {
//         //scroll up
//         header.classList.add('fixed');
//         header.classList.remove('hide');
//     }

//     lastScroll = scrollPosition();
// })

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll < lastScroll && scroll != 0) {
        header.classList.add('fixed');
        document.body.style.paddingTop = defaultOffset + 'px';
    } else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
    }
    lastScroll = scroll;
}