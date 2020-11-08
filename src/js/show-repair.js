const body = document.querySelector("body");
const maxHeight = 192 + 'px';
body.addEventListener("click", function (event) {
  if (event.target.dataset.container) {
    const containerId = event.target.dataset.container;
    const container = document.querySelector(
      `[data-container-slider="${containerId}"]`
    );

    const state = container.dataset.state;

    if (state === "close") {
      container.style.maxHeight = container.scrollHeight + "px";
      container.setAttribute("data-state", "open");
      event.target.textContent = "Свернуть";
      event.target.classList.remove("button-show--down");
      event.target.classList.add("button-show--up");
    } else {
      container.style.maxHeight = maxHeight; 
      container.setAttribute("data-state", "close");
      event.target.classList.remove("button-show--up");
      event.target.classList.add("button-show--down");
      event.target.textContent = "Показать всё";
    }
  }
});

