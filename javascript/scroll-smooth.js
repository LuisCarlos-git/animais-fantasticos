const internalLinks = document.querySelectorAll(".js-menu li a[href^='#']");

function smoothScroll(e) {
  e.preventDefault();

  const id = e.target.getAttribute("href");
  const target = document.querySelector(id).offsetTop;

  // forma alternativa
  // const target = document.querySelector(id)
  // target.scrollintoView({
  //   behavior: 'smooth',
  //   block: 'start'
  // })

  window.scrollTo({
    top: target,
    behavior: "smooth",
  });
}

internalLinks.forEach((item) => item.addEventListener("click", smoothScroll));
