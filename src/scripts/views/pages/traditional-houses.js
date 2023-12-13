import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';
import CultureSource from '../../data/culture-source';

const TraditionalHouse = {
  async render() {
    return `
      <div class="container">
        <h2 id="header"></h2>
        <div id="items" class="container flex flex-wrap mb-5 justify-center gap-5 md:p-10 md:grid lg:grid md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const header = document.querySelector('#header');
    const titlePage = 'Rumah Adat Nusantara';
    const inputPlaceholder = 'Cari rumah adat ..';
    const provinces = await CultureSource.getProvinces();
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder, provinces);

    const houses = await CultureSource.traditionalHouses();
    const housesItem = document.querySelector('#items');
    if (houses) {
      houses.forEach((culture) => {
        housesItem.innerHTML += createCultureItemTemplate(culture);
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
      housesItem.innerHTML = skeletonItem.repeat(houses.length);
    }
    const selectProvince = document.querySelector('#provinceSelect');
    let housesToFilterByProvince = [...houses];

    // reset button
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    resetFilterBtn.addEventListener('click', () => {
      selectProvince.value = 'All';

      housesItem.innerHTML = '';

      houses.forEach((culture) => {
        housesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    selectProvince.addEventListener('change', () => {
      const selectedProvince = selectProvince.value;

      housesToFilterByProvince = houses.filter(
        (house) => house.province_name === selectedProvince,
      );

      housesItem.innerHTML = '';

      housesToFilterByProvince.forEach((culture) => {
        housesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      const filteredHouses = keyword.length !== 0
        ? await CultureSource.searchTraditionalHouse({
          rumahAdatName: keyword,
        })
        : houses;

      housesItem.innerHTML = '';
      resultMessage.innerHTML = '';

      if (filteredHouses.length === 0 && keyword.length !== 0) {
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : '';
      }

      filteredHouses.forEach((filteredHouse) => {
        housesItem.innerHTML += createCultureItemTemplate(filteredHouse);
      });
    });
  },
};

export default TraditionalHouse;
