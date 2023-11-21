import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate } from '../templates/template-creator';

const TraditionalFood = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-4xl py-10 font-bold">Makanan Khas Nusantara</h2>
        <div id="items" class="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const foods = await CultureSource.traditionalFoods();
    const foodsItem = document.querySelector('#items');
    foods.forEach((culture) => {
      foodsItem.innerHTML += createCultureItemTemplate(culture);
    });
  },
};

export default TraditionalFood;
