export default function dropMenu() {
  const menus = document.querySelectorAll('[data-menu="drop-down"]');
  const userEvent = ["click", "touchstart"];

  menus.forEach((item) => {
    userEvent.forEach((event) => item.addEventListener(event, handleClick));
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outSide(this, () => {
      this.classList.remove("active");
    });
  }

  function outSide(element, callback) {
    const html = document.documentElement;

    if (!element.hasAttribute("data-active")) {
      userEvent.forEach((eventMenu) =>
        html.addEventListener(eventMenu, handleOutSideClick)
      );

      element.setAttribute("data-active", "");
    }

    function handleOutSideClick() {
      if (!element.contains(event.target)) {
        userEvent.forEach((eventMenu) =>
          html.removeEventListener(eventMenu, handleOutSideClick)
        );
        element.removeAttribute("data-active", "");

        callback();
      }
    }
  }
}
