const slider = (slides, next, prev, pagination, paginationActive) => {

    let slideIndex = 1;

    const items = document.querySelectorAll(slides),
          nextBtn = document.querySelector(next),
          prevBtn = document.querySelector(prev),
          paginationItems = document.querySelectorAll(pagination);

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

        paginationItems.forEach(item => {
            item.classList.remove(paginationActive);
        })
        paginationItems[slideIndex - 1].classList.add(paginationActive);
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
    });

    prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
    });

};

export default slider;
