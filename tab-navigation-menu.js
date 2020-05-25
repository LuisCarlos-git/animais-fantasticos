const menu = document.querySelectorAll(".js-animais-menu li");
const descricao = document.querySelectorAll(".js-animais-descricao section");

descricao[0].classList.add("active");

function addClassActive(index) {
  descricao.forEach((item) => {
    item.classList.remove("active");
  });

  descricao[index].classList.add("active");
}

menu.forEach((item, index) => {
  item.addEventListener("click", () => {
    addClassActive(index);
  });
});
