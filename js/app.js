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

/* return button */
const button = document.querySelector(".main__button");
let timeout;

if ("ontouchstart" in window) {
  /* checking that the browser supports the touchscreen */
  document.addEventListener("touchmove", showButton, false);
} else {
  window.addEventListener("scroll", showButton, false);
}

function showButton() {
  if (window.pageYOffset > 650) {
    clearTimeout(timeout);
    button.style.visibility = "visible";
    timeout = setTimeout(() => {
      button.style.visibility = "hidden";
    }, 3000);
  } else {
    button.style.visibility = "hidden";
  }

  window.onresize = function () {
    if (window.innerWidth < 768) {
      /* not used (visibility = "visible"/"invisible") due to overwriting the property by the previous function */
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  };
}

/* header slider */
$(document).ready(function () {
  $(".header__conveyor").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 1000,
    easing: "ease",
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
        },
      },
    ],
  });
});

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

/* form validation */
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const submitButton = document.querySelector('input[name="button"]');
const nameRegex = /^[a-zA-Zа-яА-ЯїЇіІєЄ ]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let isValid = true;

  if (!nameRegex.test(nameInput.value)) {
    isValid = false;
  }

  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
  }

  if (isValid) {
    alert("Your data is correct and has been accepted!");
  } else {
    alert("Please fill out all required fields correctly.");
  }
});
