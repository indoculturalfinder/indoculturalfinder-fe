import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalClothes = {
  async render() {
    return `
      <div class="container">
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
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder);

    const clothes = await CultureSource.traditionalClothes();
    const clothesItem = document.querySelector('#items');
    clothes.forEach((culture) => {
      clothesItem.innerHTML += createCultureItemTemplate(culture);
    });
  },
};

export default TraditionalClothes;
