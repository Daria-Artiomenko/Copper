const slider = (slides, next, prev) => {

    let slideIndex = 1;

    const items = document.querySelectorAll(slides);
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated');
        })

        items[slideIndex - 1].style.display = 'flex';
    }

    showSlides(slideIndex);

    function plusSlide (n) {
        showSlides(slideIndex += n);
    }

    nextBtn.addEventListener('click', () => {
            plusSlide(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
            console.log(1);
    });

    prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
            console.log(-1);
    });

};

export default slider;
