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
const itemsPerPage = [12, 8, 4]; // количество элементов на странице для каждой страницы
const totalPages = itemsPerPage.length;

// Функция для генерации содержимого списка
function generateListContent(page) {
  let content = "";
  const startIndex = (page - 1) * itemsPerPage[page - 1] + 1;
  const endIndex = startIndex + itemsPerPage[page - 1] - 1;

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
  if (currentPage === 1) {
    prevPageEl.disabled = true;
  } else {
    prevPageEl.disabled = false;
  }

  if (currentPage === totalPages) {
    nextPageEl.disabled = true;
  } else {
    nextPageEl.disabled = false;
  }
}

// Функция для обновления номеров страниц
function updatePageNumbers() {
  pageNumbersEl.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      updateList(currentPage);
      updateNavigationButtons();
    });
    pageNumbersEl.appendChild(button);
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
  }
});

nextPageEl.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updateList(currentPage);
    updateNavigationButtons();
  }
});
