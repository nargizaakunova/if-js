export function getAvailableHotels(value) {
  const queryParams = new URLSearchParams({
    search: value,
  });

  return fetch(
    `https://if-student-api.onrender.com/api/hotels?${queryParams}`,
  ).then((response) => response.json());
}

export async function renderAvailableHotels(value) {
  const hotels = await getAvailableHotels(value);
  await createAvailableHotelsSection(hotels);
}

async function createAvailableHotelsSection(hotels) {
  if (!hotels.length) {
    const topSection = document.querySelector('.top-section');
    const availHotelsSectionEl = document.createElement('section');
    availHotelsSectionEl.classList.add('availHotels', 'homes');
    availHotelsSectionEl.id = 'availHotels';
    availHotelsSectionEl.style.order = '2';

    const availHotelsContainerEl = document.createElement('div');
    availHotelsContainerEl.classList.add('container', 'homes__container');

    const availHotelsMainTitleEl = document.createElement('h2');
    availHotelsMainTitleEl.classList.add('title', 'homes__main-title');
    availHotelsMainTitleEl.textContent = 'Available hotels';

    const availHotelsWrapperEl = document.createElement('div');
    availHotelsWrapperEl.classList.add('homes__wrapper');

    // ul, li, data
    const availHotelsWarning = document.createElement('p');
    availHotelsWarning.textContent = 'Sorry, no hotels found for your search!';
    availHotelsWarning.classList.add('_is-centered');

    availHotelsWrapperEl.appendChild(availHotelsWarning);
    availHotelsContainerEl.appendChild(availHotelsMainTitleEl);
    availHotelsContainerEl.appendChild(availHotelsWrapperEl);
    availHotelsSectionEl.appendChild(availHotelsContainerEl);

    const availHotelsEl = document.getElementById('availHotels');
    if (availHotelsEl) {
      availHotelsEl.innerHTML = '';
    }

    topSection.parentNode.insertBefore(
      availHotelsSectionEl,
      topSection.nextSibling,
    );
    return;
  }

  const topSection = document.querySelector('.top-section');
  const availHotelsSectionEl = document.createElement('section');
  availHotelsSectionEl.classList.add('availHotels', 'homes');
  availHotelsSectionEl.id = 'availHotels';
  availHotelsSectionEl.style.order = '2';

  const availHotelsContainerEl = document.createElement('div');
  availHotelsContainerEl.classList.add('container', 'homes__container');

  const availHotelsMainTitleEl = document.createElement('h2');
  availHotelsMainTitleEl.classList.add('title', 'homes__main-title');
  availHotelsMainTitleEl.textContent = 'Available hotels';

  const availHotelsWrapperEl = document.createElement('div');
  availHotelsWrapperEl.classList.add('homes__wrapper');

  // ul, li, data
  const availHotelsCardsEl = document.createElement('ul');
  availHotelsCardsEl.classList.add('cards', 'homes__cards');

  hotels.map((card, index) => {
    const availHotelsCardEl = document.createElement('li');
    availHotelsCardEl.classList.add(
      'col-lg-3',
      'col-md-6',
      'col-sm-3',
      'card',
      'home__card',
      'home',
    );

    const availHotelWrapperEl = document.createElement('div');
    availHotelWrapperEl.classList.add('home__wrapper');

    const availHotelsImgEl = document.createElement('img');
    availHotelsImgEl.classList.add('home__img');
    availHotelsImgEl.alt = card.name;

    if (index > 3) {
      return;
    }

    availHotelsImgEl.src = card.imageUrl;

    const availHotelTitleEl = document.createElement('h3');
    availHotelTitleEl.classList.add('home__title');
    availHotelTitleEl.textContent = card.name;

    const availHotelLocationEl = document.createElement('p');
    availHotelLocationEl.classList.add('home__location');
    availHotelLocationEl.textContent = `${card.city}, ${card.country}`;

    availHotelWrapperEl.append(
      availHotelsImgEl,
      availHotelTitleEl,
      availHotelLocationEl,
    );
    availHotelsCardEl.appendChild(availHotelWrapperEl);
    availHotelsCardsEl.appendChild(availHotelsCardEl);
  });

  availHotelsWrapperEl.appendChild(availHotelsCardsEl);
  availHotelsContainerEl.appendChild(availHotelsMainTitleEl);
  availHotelsContainerEl.appendChild(availHotelsWrapperEl);
  availHotelsSectionEl.appendChild(availHotelsContainerEl);

  const availHotelsEl = document.getElementById('availHotels');
  if (availHotelsEl) {
    availHotelsEl.innerHTML = '';
  }

  topSection.parentNode.insertBefore(
    availHotelsSectionEl,
    topSection.nextSibling,
  );

  // arrow btn
  const availHotelsArrowBtnEl = document.createElement('button');
  availHotelsArrowBtnEl.classList.add(
    'button--reset',
    'arrow-btn',
    'homes__arrow-btn',
  );
  availHotelsArrowBtnEl.ariaLabel = 'Next';
  availHotelsArrowBtnEl.type = 'button';

  const arrowBtnSVGEl = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg',
  );
  arrowBtnSVGEl.classList.add('arrow-btn__img');

  const arrowBtnUseEl = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'use',
  );
  arrowBtnUseEl.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'href',
    './src/images/decorative-img/sprite.svg#arrow-right',
  );

  arrowBtnSVGEl.appendChild(arrowBtnUseEl);
  availHotelsArrowBtnEl.appendChild(arrowBtnSVGEl);
  availHotelsWrapperEl.appendChild(availHotelsArrowBtnEl);
}
