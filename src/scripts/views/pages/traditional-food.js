import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalFood = {
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
    const titlePage = 'Makanan Tradisional Nusantara';
    const inputPlaceholder = 'Cari makanan tradisional ..';
    // get provinces
    const provinces = await CultureSource.getProvinces();
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder, provinces);

    const foods = await CultureSource.traditionalFoods();
    const foodsItem = document.querySelector('#items');
    foods.forEach((culture) => {
      foodsItem.innerHTML += createCultureItemTemplate(culture);
    });

    // Get the select element
    const selectProvince = document.querySelector('#provinceSelect');
    let foodsToFilterByProvince = [...foods]; // Make a copy of the original data

    // Add event listener to handle province changes
    selectProvince.addEventListener('change', () => {
      // Get the selected province value
      const selectedProvince = selectProvince.value;

      // Filter foods based on the selected province
      foodsToFilterByProvince = foods.filter(
        (food) => food.province_name === selectedProvince,
      );

      // Clear existing content
      foodsItem.innerHTML = '';

      // Render filtered foods
      foodsToFilterByProvince.forEach((culture) => {
        foodsItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      // Gunakan CultureSource.searchTraditionalFood() jika keyword tidak kosong
      const filteredFoods = keyword.length !== 0
        ? await CultureSource.searchTraditionalFood({ makananKhasName: keyword })
        : foods;

      foodsItem.innerHTML = ''; // Hapus konten sebelumnya
      resultMessage.innerHTML = ''; // Hapus pesan hasil

      if (filteredFoods.length === 0 && keyword.length !== 0) {
        // Tampilkan pesan jika tidak ada data yang cocok dan keyword tidak kosong
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : ''; // Tampilkan pesan hasil jika keyword tidak kosong
      }

      // Tampilkan semua tarian jika keyword kosong atau ada data yang cocok
      filteredFoods.forEach((filteredFood) => {
        foodsItem.innerHTML += createCultureItemTemplate(filteredFood);
      });
    });
  },
};

export default TraditionalFood;
