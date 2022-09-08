$(function () {

  $(".slider-blog__inner").slick({
    dots:true,
    prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="left"></button',
    nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="right"></button>',

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows:false,
        }
      },
    ]

      });

 $(".menu__btn").on("click",function(){
   $(".header__top-inner").toggleClass("header__top-inner--active");


 });

 let mixer = mixitup('.portfolio__content');


  })