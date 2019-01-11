require('slick-carousel');

const config = {
  slidesToShow: 1,
  dots: true,
  prevArrow: $('.prev-slide-btn'),
  nextArrow: $('.next-slide-btn'),
};
const $elem = $('.reviews-slider');
$elem.slick(config);
