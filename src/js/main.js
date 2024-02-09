import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    slider('.best-slide', '.best-next', '.best-prev', '.best__pagination-item', 'slider__pagination-active'); //best
    slider('.new-slide', '.new-next', '.new-prev', '.new__pagination-item', 'slider__pagination-active'); //new
    slider('.recommend-slide', '.recommend-next', '.recommend-prev', '.recommend__pagination-item', 'slider__pagination-active'); //recommend
    slider('.sale-slide', '.sale-next', '.sale-prev', '.sale__pagination-item', 'slider__pagination-active'); //sale


});
