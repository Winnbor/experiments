$(document).ready(function(){
  $('.review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="icon-arrow-left"><use xlink:href="sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="icon-arrow-right"><use xlink:href="sprite.svg#arrow-right"></use></svg></button>',
    fade: true,
      asNavFor: '.review-second-slider',
    infinite: true,
    mobileFirst: true
  });
});
$('.review-second-slider').slick({
  slidesToShow: 7,
  slidesToScroll: 8,
  arrows: false,
  asNavFor: '.review-slider',
  centerMode: false,
  focusOnSelect: true,
  infinite: true,
  mobileFirst: true
});