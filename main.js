const mobileMenu = document.querySelector(".menu__list");
const menuButton = document.querySelector(".menu__openMenu");
const animItems = [...document.querySelectorAll(".anim__item")];

const btn = document.querySelector(".galery__showMore");
const section = document.querySelector(".galery");
const links = document.querySelectorAll(".galery__smallImage");
const imgs = document.querySelectorAll(".galery__bigImage");

const sliderImage = document.querySelector(".header__image");
const sliderText = document.querySelector(".header__image__description");

let active = true;
menuButton.addEventListener("click", () => {
  if (active === true) {
    mobileMenu.style.right = "0";
    menuButton.classList.add("active");
    active = !active;
  } else {
    mobileMenu.style.right = "-100%";
    menuButton.classList.remove("active");
    active = !active;
  }
});

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    imgs[index].style.display = "block";
    imgs[index].addEventListener("click", () => {
      setTimeout(() => {
        imgs[index].style.display = "none";
      }, 200);
    });
  });
});

let activity = true;

btn.addEventListener("click", () => {
  if (activity) {
    section.classList.add("activity");
    links.forEach((link) => {
      link.style.display = "block";
    });
    btn.textContent = "Pokaż mniej";
    activity = !activity;
  } else {
    section.classList.remove("activity");
    links.forEach((link, index) => {
      console.log(link, index);
      if (index >= 3) {
        link.style.display = "none";
      } else return;
    });
    btn.textContent = "Pokaż więcej";
    activity = !activity;
  }
});

const slides = [
  {
    img: "./img/dog.jpg",
    text: "Profesjonalna obsługa",
  },
  {
    img: "./img/header1.jpg",
    text: "Doświadczony zespół",
  },
  {
    img: "./img/header2.jpg",
    text: "Niskie ceny",
  },
];

const slider = () => {
  let i = 0;

  setInterval(() => {
    if (i <= slides.length - 1) {
      sliderImage.src = slides[i].img;
      sliderText.textContent = slides[i].text;
      i++;
    } else {
      i = 0;
      sliderImage.src = slides[i].img;
      sliderText.textContent = slides[i].text;
    }
  }, 5000);
};

slider();
