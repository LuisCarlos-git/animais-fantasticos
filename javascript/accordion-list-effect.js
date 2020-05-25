const faqList = document.querySelectorAll(".js-accordion-effect dt");

function accordionEffect() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

faqList.forEach((item) => {
  item.addEventListener("click", accordionEffect);
});
