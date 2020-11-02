
const body = document.querySelector("body");
body.addEventListener("click", function (event) {
  if (event.target.dataset.container) {
    const containerId = event.target.dataset.container;
    const container = document.querySelector(
      `[data-container-id="${containerId}"]`
    );
    const state = container.dataset.state;

    if (state === "close") {
      container.style.maxHeight = container.scrollHeight + "px";
      container.setAttribute("data-state", "open");
     event.target.textContent = 'Свернуть';
    } else {
      container.style.maxHeight = "192px"; // Какая-то первоночальная высота контейнера
      container.setAttribute("data-state", "close");
     event.target.textContent = 'Показать всё';
    }
  }
});