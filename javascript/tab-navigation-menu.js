export default function initTab() {
  const menu = document.querySelectorAll(".js-animais-menu li");
  const descricao = document.querySelectorAll(".js-animais-descricao section");

  descricao[0].classList.add("active");

  function addClassActive(index) {
    descricao.forEach((item) => {
      item.classList.remove("active");
    });
    const direction = descricao[index].dataset.anima;
    console.log(direction);
    descricao[index].classList.add("active", direction);
  }

  menu.forEach((item, index) => {
    item.addEventListener("click", () => {
      addClassActive(index);
    });
  });
}
