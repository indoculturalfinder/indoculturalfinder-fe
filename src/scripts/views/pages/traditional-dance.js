import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalDance = {
  async render() {
    return `
      <div class="container ">
        <div id="header"></div>
        <div id="items" class="container flex flex-wrap mb-5 justify-center gap-5 md:p-10 md:grid lg:grid md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded

    // Page adjusments
    const header = document.querySelector('#header');
    const titlePage = 'Tarian Adat Nusantara';
    const inputPlaceholder = 'Cari tari adat ..';

    // get provinces
    const provinces = await CultureSource.getProvinces();
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder, provinces);

    const dances = await CultureSource.traditionalDance();
    const dancesItem = document.querySelector('#items');

    // Loading response
    if (dances) {
      dances.forEach((dance) => {
        dancesItem.innerHTML += createCultureItemTemplate(dance);
      });
    } else {
      const skeletonItem = `
        <div class="flex flex-col gap-4 max-w-sm">
          <div class="skeleton h-32 w-full"></div>
          <div class="skeleton h-4 w-28"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
      `;
      dancesItem.innerHTML = skeletonItem.repeat(dances.length);
    }

    const selectProvince = document.querySelector('#provinceSelect');
    let danceToFilterByProvince = [...dances]; // Make a copy of the original data

    // reset button
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    resetFilterBtn.addEventListener('click', () => {
      selectProvince.value = 'All';

      dancesItem.innerHTML = '';

      dances.forEach((culture) => {
        dancesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    selectProvince.addEventListener('change', () => {
      const selectedProvince = selectProvince.value;

      danceToFilterByProvince = dances.filter(
        (dance) => dance.province_name === selectedProvince,
      );

      dancesItem.innerHTML = '';

      danceToFilterByProvince.forEach((culture) => {
        dancesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      const filteredDances = keyword.length !== 0
        ? await CultureSource.searchTraditionalDance({ tarianName: keyword })
        : dances;

      dancesItem.innerHTML = '';
      resultMessage.innerHTML = '';

      if (filteredDances.length === 0 && keyword.length !== 0) {
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : '';
      }

      filteredDances.forEach((filteredDance) => {
        dancesItem.innerHTML += createCultureItemTemplate(filteredDance);
      });
    });
  },
};

export default TraditionalDance;
