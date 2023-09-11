export default async function createHomesSection() {
  const offersSectionEl = document.getElementById('offers');

  const homesSectionEl = document.createElement('section');
  homesSectionEl.classList.add('homes');
  homesSectionEl.id = 'homes';

  const homesContainerEl = document.createElement('div');
  homesContainerEl.classList.add('container', 'homes__container');

  const homesMainTitleEl = document.createElement('h2');
  homesMainTitleEl.classList.add('title', 'homes__main-title');
  homesMainTitleEl.textContent = 'Homes guests loves';

  const homesWrapperEl = document.createElement('div');
  homesWrapperEl.classList.add('homes__wrapper');

  // ul, li, data
  const homesCardsEl = document.createElement('ul');
  homesCardsEl.classList.add('cards', 'homes__cards');

  async function fetchHotelsData() {
    const response = await fetch(
      'https://if-student-api.onrender.com/api/hotels/popular',
    );
    const data = await response.json();
    return data;
  }

  const fetchedHotels = await fetchHotelsData();

  fetchedHotels.map((card, index) => {
    const homeCardEl = document.createElement('li');
    homeCardEl.classList.add(
      'col-lg-3',
      'col-md-6',
      'col-sm-3',
      'card',
      'home__card',
      'home',
    );

    const homeWrapperEl = document.createElement('div');
    homeWrapperEl.classList.add('home__wrapper');

    const homeImgEl = document.createElement('img');
    homeImgEl.classList.add('home__img');
    homeImgEl.alt = card.name;

    if (index <= 3) {
      homeImgEl.src = card.imageUrl;

      const homeTitleEl = document.createElement('h3');
      homeTitleEl.classList.add('home__title');
      homeTitleEl.textContent = card.name;

      const homeLocationEl = document.createElement('p');
      homeLocationEl.classList.add('home__location');
      homeLocationEl.textContent = `${card.city}, ${card.country}`;

      homeWrapperEl.append(homeImgEl, homeTitleEl, homeLocationEl);
      homeCardEl.appendChild(homeWrapperEl);
      homesCardsEl.appendChild(homeCardEl);
    }
  });

  homesWrapperEl.appendChild(homesCardsEl);
  homesContainerEl.appendChild(homesMainTitleEl);
  homesContainerEl.appendChild(homesWrapperEl);
  homesSectionEl.appendChild(homesContainerEl);
  offersSectionEl.parentNode.insertBefore(
    homesSectionEl,
    offersSectionEl.nextSibling,
  );

  // arrow btn
  const homesArrowBtnEl = document.createElement('button');
  homesArrowBtnEl.classList.add(
    'button--reset',
    'arrow-btn',
    'homes__arrow-btn',
  );
  homesArrowBtnEl.ariaLabel = 'Next';
  homesArrowBtnEl.type = 'button';

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
  homesArrowBtnEl.appendChild(arrowBtnSVGEl);
  homesWrapperEl.appendChild(homesArrowBtnEl);
}
