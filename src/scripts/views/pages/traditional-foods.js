import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalFoods = {
  async render() {
    return `
      <div class="container">
        <div id="header"></div>
        <div id="items" class="container flex flex-wrap mb-5 justify-center gap-5 p-5 md:p-10 md:grid lg:grid md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const header = document.querySelector('#header');
    const titlePage = 'Makanan Khas Nusantara';
    const inputPlaceholder = 'Cari makanan tradisional ..';

    // get provinces
    const provinces = await CultureSource.getProvinces();
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder, provinces);

    const foods = await CultureSource.getTraditionalFoods();
    const foodsItem = document.querySelector('#items');

    const selectProvince = document.querySelector('#provinceSelect');
    let foodsToFilterByProvince = [...foods];

    if (foods) {
      foods.forEach((culture) => {
        foodsItem.innerHTML += createCultureItemTemplate(culture);
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
      foodsItem.innerHTML = skeletonItem.repeat(foods.length);
    }

    // reset button
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    resetFilterBtn.addEventListener('click', () => {
      selectProvince.value = 'All';

      foodsItem.innerHTML = '';

      foods.forEach((culture) => {
        foodsItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    selectProvince.addEventListener('change', () => {
      const selectedProvince = selectProvince.value;

      foodsToFilterByProvince = foods.filter(
        (food) => food.province_name === selectedProvince,
      );

      foodsItem.innerHTML = '';

      foodsToFilterByProvince.forEach((culture) => {
        foodsItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      const filteredFoods = keyword.length !== 0
        ? await CultureSource.searchTraditionalFood({ foodName: keyword })
        : foods;

      foodsItem.innerHTML = '';
      resultMessage.innerHTML = '';

      if (filteredFoods.length === 0 && keyword.length !== 0) {
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : '';
      }

      filteredFoods.forEach((filteredFood) => {
        foodsItem.innerHTML += createCultureItemTemplate(filteredFood);
      });
    });
  },
};

export default TraditionalFoods;
