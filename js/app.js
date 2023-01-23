/* gallery */
baguetteBox.run(".tz-gallery");

/* news slider */
$(".news__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  easing: "ease",
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnFocus: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
