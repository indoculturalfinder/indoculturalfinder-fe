import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate } from '../templates/template-creator';

const TraditionalClothes = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-4xl py-10 font-bold">Baju Adat Nusantara</h2>
        <div id="items" class="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const clothes = await CultureSource.traditionalClothes();
    const clothesItem = document.querySelector('#items');
    clothes.forEach((culture) => {
      clothesItem.innerHTML += createCultureItemTemplate(culture);
    });
  },
};

export default TraditionalClothes;
