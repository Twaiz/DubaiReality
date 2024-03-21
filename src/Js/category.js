// SWIPER

new Swiper(".image-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  speed: 400,
});

// PAGINATION

const offersList = document.querySelector(".offers-list");
const prevPageEl = document.querySelector("#prevPage");
const nextPageEl = document.querySelector("#nextPage");
const pageNumbersEl = document.querySelector("#pageNumbers");

let currentPage = 1;
const maxPage = 99; // Максимальное количество страниц
const itemsPerPage = 12; // Максимальное количество элементов на странице
const maxItemsPage = maxPage * itemsPerPage;
const totalPages = maxPage; // Изменение для использования максимального количества страниц

// Функция для генерации содержимого списка
function generateListContent(page) {
  let content = "";
  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, maxItemsPage);

  for (let i = startIndex; i <= endIndex; i++) {
    content += `
      <li class="offers-item">
        <div class="offers-item-content">
          <p class="offers-name">Item ${i}</p>
          <h3 class="offers-description">Description ${i}</h3>
          <p class="offers-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" class="offers-link">Learn more</a>
        </div>
      </li>
    `;
  }

  return content;
}

// Функция для обновления списка
function updateList(page) {
  const listContent = generateListContent(page);
  offersList.innerHTML = listContent;
}

// Функция для обновления кнопок навигации
function updateNavigationButtons() {
  prevPageEl.disabled = currentPage === 1;
  nextPageEl.disabled = currentPage === maxPage;
}

// Функция для обновления номеров страниц
function updatePageNumbers() {
  pageNumbersEl.innerHTML = "";
  const minPage = Math.max(currentPage - 1, 1);
  const maxPageNum = Math.min(currentPage + 2, maxPage);
  const lastPageNum = Math.max(maxPage - 2, 1); // Номер предпоследней страницы

  for (let i = minPage; i <= maxPageNum; i++) {
    const button = document.createElement("button");
    button.classList.add("page-Numbers-Item");
    button.textContent = i;
    if (i === currentPage) {
      button.classList.add("current-page-numbers");
    }
    button.addEventListener("click", () => {
      const currentPageButton = document.querySelector(".current-page-numbers");
      currentPageButton.classList.remove("current-page-numbers");
      button.classList.add("current-page-numbers");
      currentPage = i;
      updateList(currentPage);
      updateNavigationButtons();
      updatePageNumbers();
    });
    pageNumbersEl.appendChild(button);
  }

  if (maxPageNum < maxPage) {
    const ellipsis = document.createElement("span");
    ellipsis.classList.add("pagination-ellipsis");
    ellipsis.textContent = "...";
    pageNumbersEl.appendChild(ellipsis);

    // Создаем кнопки для последней страницы и двух предыдущих страниц
    for (let i = lastPageNum; i <= maxPage; i++) {
      const button = document.createElement("button");
      button.classList.add("page-Numbers-Item");
      button.textContent = i;
      if (i === currentPage) {
        button.classList.add("current-page-numbers");
      }
      button.addEventListener("click", () => {
        const currentPageButton = document.querySelector(
          ".current-page-numbers"
        );
        currentPageButton.classList.remove("current-page-numbers");
        button.classList.add("current-page-numbers");
        currentPage = i;
        updateList(currentPage);
        updateNavigationButtons();
        updatePageNumbers();
      });
      pageNumbersEl.appendChild(button);
    }
  }
}

// Инициализация списка и кнопок навигации
updateList(currentPage);
updateNavigationButtons();
updatePageNumbers();

// Обработчики для кнопок навигации
prevPageEl.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateList(currentPage);
    updateNavigationButtons();
    updatePageNumbers(); // Обновляем номера страниц
  }
});

nextPageEl.addEventListener("click", () => {
  if (currentPage < maxPage) {
    currentPage++;
    updateList(currentPage);
    updateNavigationButtons();
    updatePageNumbers(); // Обновляем номера страниц
  }
});

let intervalId; // Глобальная переменная для хранения идентификатора интервала

// Обработчик нажатия кнопки "назад"
prevPageEl.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    if (currentPage > 1) {
      currentPage--;
      updateList(currentPage);
      updateNavigationButtons();
      updatePageNumbers();
    }
  }, 300); // Задержка между переключениями в миллисекундах
});

// Обработчик отпускания кнопки "назад"
prevPageEl.addEventListener("mouseup", () => {
  clearInterval(intervalId); // Остановить интервал при отпускании кнопки
});

// Обработчик нажатия кнопки "вперед"
nextPageEl.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    if (currentPage < maxPage) {
      currentPage++;
      updateList(currentPage);
      updateNavigationButtons();
      updatePageNumbers();
    }
  }, 300); // Задержка между переключениями в миллисекундах
});

// Обработчик отпускания кнопки "вперед"
nextPageEl.addEventListener("mouseup", () => {
  clearInterval(intervalId); // Остановить интервал при отпускании кнопки
});