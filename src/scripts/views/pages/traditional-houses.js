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
    houses.forEach((culture) => {
      housesItem.innerHTML += createCultureItemTemplate(culture);
    });

    // Get the select element
    const selectProvince = document.querySelector('#provinceSelect');
    let housesToFilterByProvince = [...houses]; // Make a copy of the original data

    // Add event listener to handle province changes
    selectProvince.addEventListener('change', () => {
      // Get the selected province value
      const selectedProvince = selectProvince.value;

      // Filter houses based on the selected province
      housesToFilterByProvince = houses.filter(
        (house) => house.province_name === selectedProvince,
      );

      // Clear existing content
      housesItem.innerHTML = '';

      // Render filtered houses
      housesToFilterByProvince.forEach((culture) => {
        housesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      // Gunakan CultureSource.searchTraditionalHouse() jika keyword tidak kosong
      const filteredHouses = keyword.length !== 0
        ? await CultureSource.searchTraditionalHouse({ rumahAdatName: keyword })
        : houses;

      housesItem.innerHTML = ''; // Hapus konten sebelumnya
      resultMessage.innerHTML = ''; // Hapus pesan hasil

      if (filteredHouses.length === 0 && keyword.length !== 0) {
        // Tampilkan pesan jika tidak ada data yang cocok dan keyword tidak kosong
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : ''; // Tampilkan pesan hasil jika keyword tidak kosong
      }

      // Tampilkan semua tarian jika keyword kosong atau ada data yang cocok
      filteredHouses.forEach((filteredHouse) => {
        housesItem.innerHTML += createCultureItemTemplate(filteredHouse);
      });
    });
  },
};

export default TraditionalHouse;
