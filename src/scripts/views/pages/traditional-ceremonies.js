import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalCeremonies = {
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
    const header = document.querySelector('#header');
    const titlePage = 'Upacara Adat Nusantara';
    const inputPlaceholder = 'Cari upacara adat ..';

    // get provinces
    const provinces = await CultureSource.getProvinces();
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder, provinces);

    const ceremonies = await CultureSource.getTraditionalCeremonies();
    const ceremoniesItem = document.querySelector('#items');
    if (ceremonies) {
      ceremonies.forEach((ceremony) => {
        ceremoniesItem.innerHTML += createCultureItemTemplate(ceremony);
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
      ceremoniesItem.innerHTML = skeletonItem.repeat(ceremonies.length);
    }

    // filter item by provinces
    const selectProvince = document.querySelector('#provinceSelect');
    let ceremoniesToFilterByProvince = [...ceremonies]; // Make a copy of the original data
    selectProvince.addEventListener('change', () => {
      const selectedProvince = selectProvince.value;

      ceremoniesToFilterByProvince = ceremonies.filter(
        (ceremony) => ceremony.province_name === selectedProvince,
      );

      ceremoniesItem.innerHTML = '';

      ceremoniesToFilterByProvince.forEach((culture) => {
        ceremoniesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // reset button
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    resetFilterBtn.addEventListener('click', () => {
      selectProvince.value = 'All';

      ceremoniesItem.innerHTML = '';

      ceremonies.forEach((culture) => {
        ceremoniesItem.innerHTML += createCultureItemTemplate(culture);
      });
    });

    // Search functionality
    const inputSearch = document.querySelector('#input');
    const resultMessage = document.querySelector('#resultMessage');
    inputSearch.addEventListener('change', async () => {
      const keyword = inputSearch.value.toLowerCase();

      const filteredCeremonies = keyword.length !== 0
        ? await CultureSource.searchTraditionalCeremony({ ceremonyName: keyword })
        : ceremonies;

      ceremoniesItem.innerHTML = '';
      resultMessage.innerHTML = '';

      if (filteredCeremonies.length === 0 && keyword.length !== 0) {
        resultMessage.innerHTML += `<h3 class="font-semibold text-xl">Tidak ada hasil untuk ${keyword}</h3>`;
      } else {
        resultMessage.innerHTML = keyword.length !== 0
          ? `<h3 class="font-semibold text-xl">Hasil untuk ${keyword}</h3>`
          : '';
      }

      filteredCeremonies.forEach((filteredCeremony) => {
        ceremoniesItem.innerHTML += createCultureItemTemplate(filteredCeremony);
      });
    });
  },
};

export default TraditionalCeremonies;
