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

  for (let i = minPage; i <= maxPageNum; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      updateList(currentPage);
      updateNavigationButtons();
      updatePageNumbers(); // Обновляем номера страниц
    });
    pageNumbersEl.appendChild(button);
  }

  if (maxPageNum < maxPage) {
    const ellipsis = document.createElement("span");
    ellipsis.textContent = "...";
    pageNumbersEl.appendChild(ellipsis);

    const lastPageButton = document.createElement("button");
    lastPageButton.textContent = maxPage;
    lastPageButton.addEventListener("click", () => {
      currentPage = maxPage;
      updateList(currentPage);
      updateNavigationButtons();
      updatePageNumbers();
    });
    pageNumbersEl.appendChild(lastPageButton);
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
