export default function initAccordionEffect() {
  const faqList = document.querySelectorAll("[data-anima='accordion'] dt");

  function accordionEffect() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  faqList.forEach((item) => {
    item.addEventListener("click", accordionEffect);
  });
}
