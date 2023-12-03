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
    clothes.forEach((culture) => {
      clothesItem.innerHTML += createCultureItemTemplate(culture);
    });

    // Get the select element
    const selectProvince = document.querySelector('#provinceSelect');
    let clothesToFilterByProvince = [...clothes]; // Make a copy of the original data

    // Add event listener to handle province changes
    selectProvince.addEventListener('change', () => {
      // Get the selected province value
      const selectedProvince = selectProvince.value;

      // Filter clothes based on the selected province
      clothesToFilterByProvince = clothes.filter(
        (clothe) => clothe.province_name === selectedProvince,
      );

      // Clear existing content
      clothesItem.innerHTML = '';

      // Render filtered clothes
      clothesToFilterByProvince.forEach((culture) => {
        clothesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      // Gunakan CultureSource.searchTraditionalCloth() jika keyword tidak kosong
      const filteredClothes = keyword.length !== 0
        ? await CultureSource.searchTraditionalCloth({ bajuAdatName: keyword })
        : clothes;

      clothesItem.innerHTML = ''; // Hapus konten sebelumnya
      resultMessage.innerHTML = ''; // Hapus pesan hasil

      if (filteredClothes.length === 0 && keyword.length !== 0) {
        // Tampilkan pesan jika tidak ada data yang cocok dan keyword tidak kosong
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : ''; // Tampilkan pesan hasil jika keyword tidak kosong
      }

      // Tampilkan semua tarian jika keyword kosong atau ada data yang cocok
      filteredClothes.forEach((filteredCloth) => {
        clothesItem.innerHTML += createCultureItemTemplate(filteredCloth);
      });
    });
  },
};

export default TraditionalClothes;
