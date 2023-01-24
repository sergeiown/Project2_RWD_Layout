/* header menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", createMobileMenu);
navMenu.addEventListener("click", closeMobileMenu);

function createMobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    body.classList.add("overflow");
  } else {
    body.classList.remove("overflow");
  }
}

function closeMobileMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("overflow");
}

/* gallery */
baguetteBox.run(".tz-gallery");

/* news slider */
$(".news__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
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
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
