const boxes = Array.from(document.querySelectorAll('.section__accordeon-button'));
const paragraphs = Array.from(document.querySelectorAll('.section__paragraph-box'));

boxes.forEach((box) => {
    box.addEventListener('click', boxHandler);
})

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest('.section__accordeon-button');
    let currentContent = e.target.previousElementSibling;
    currentBox.classList.toggle('section__accordeon-button_active');
    if (currentBox.classList.contains('section__accordeon-button_active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    } else {
        currentContent.style.maxHeight = 0;
    }
}

window.onresize = () => {
    // if (window.screen.width > 1600) {
    //     paragraphs.forEach((paragraph) => {
    //         paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
    //     })
    //     boxes.forEach((box) => {
    //         box.classList.add('section__accordeon-button_active');
    //     })
    // } else {
    //     paragraphs.forEach((paragraph) => {
    //         paragraph.style.maxHeight = 0;
    //     })
    //     boxes.forEach((box) => {
    //         box.classList.remove('section__accordeon-button_active');
    //     })
    // }

    if (window.screen.width < 1600) {
        boxes.forEach((box) => {
            if (box.className.includes('section__accordeon-button_active')) {
                box.previousElementSibling.style.maxHeight = box.previousElementSibling.scrollHeight + 'px';
            }
        })
    }
};