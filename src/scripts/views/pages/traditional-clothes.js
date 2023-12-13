import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalClothes = {
  async render() {
    return `
      <div class="container ">
        <div id="header"></div>
        <div id="items" class="flex flex-wrap mb-5 justify-center gap-5 md:p-10 md:grid lg:grid md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const header = document.querySelector('#header');
    const titlePage = 'Baju Adat Nusantara';
    const inputPlaceholder = 'Cari baju adat ..';

    // get provinces
    const provinces = await CultureSource.getProvinces();
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder, provinces);

    const clothes = await CultureSource.traditionalClothes();
    const clothesItem = document.querySelector('#items');

    // Loading response
    if (clothes) {
      clothes.forEach((cloth) => {
        clothesItem.innerHTML += createCultureItemTemplate(cloth);
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
      clothesItem.innerHTML = skeletonItem.repeat(clothes.length);
    }

    const selectProvince = document.querySelector('#provinceSelect');
    let clothesToFilterByProvince = [...clothes]; // Make a copy of the original data
    selectProvince.addEventListener('change', () => {
      const selectedProvince = selectProvince.value;

      clothesToFilterByProvince = clothes.filter(
        (clothe) => clothe.province_name === selectedProvince,
      );

      clothesItem.innerHTML = '';

      clothesToFilterByProvince.forEach((culture) => {
        clothesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // reset button
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    resetFilterBtn.addEventListener('click', () => {
      selectProvince.value = 'All';

      clothesItem.innerHTML = '';

      clothes.forEach((culture) => {
        clothesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      const filteredClothes = keyword.length !== 0
        ? await CultureSource.searchTraditionalCloth({ bajuAdatName: keyword })
        : clothes;

      clothesItem.innerHTML = '';
      resultMessage.innerHTML = '';

      if (filteredClothes.length === 0 && keyword.length !== 0) {
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : '';
      }
      filteredClothes.forEach((filteredCloth) => {
        clothesItem.innerHTML += createCultureItemTemplate(filteredCloth);
      });
    });
  },
};

export default TraditionalClothes;
