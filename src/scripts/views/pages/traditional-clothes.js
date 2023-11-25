import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate } from '../templates/template-creator';

const TraditionalClothes = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-3xl text-center py-10 font-bold md:text-4xl md:text-left md:ms-10 md:mt-5">Baju Adat Nusantara</h2>
        <div id="items" class="container flex flex-wrap mb-5 justify-center gap-5 md:p-10 md:grid lg:grid md:grid-cols-2 lg:grid-cols-3"></div>
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
