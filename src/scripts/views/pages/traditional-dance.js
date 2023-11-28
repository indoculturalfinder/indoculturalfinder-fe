import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalDance = {
  async render() {
    return `
      <div class="container">
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
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder);

    // load all culture datas
    const dances = await CultureSource.traditionalDance();
    const dancesItem = document.querySelector('#items');
    dances.forEach((culture) => {
      dancesItem.innerHTML += createCultureItemTemplate(culture);
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');

    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      // Gunakan CultureSource.searchTraditionalDance() jika keyword tidak kosong
      const filteredDances = keyword.length !== 0
        ? await CultureSource.searchTraditionalDance({ tarianName: keyword })
        : dances;

      dancesItem.innerHTML = ''; // Hapus konten sebelumnya
      resultMessage.innerHTML = ''; // Hapus pesan hasil

      if (filteredDances.length === 0 && keyword.length !== 0) {
        // Tampilkan pesan jika tidak ada data yang cocok dan keyword tidak kosong
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : ''; // Tampilkan pesan hasil jika keyword tidak kosong
      }

      // Tampilkan semua tarian jika keyword kosong atau ada data yang cocok
      filteredDances.forEach((filteredDance) => {
        dancesItem.innerHTML += createCultureItemTemplate(filteredDance);
      });
    });
  },
};

export default TraditionalDance;
