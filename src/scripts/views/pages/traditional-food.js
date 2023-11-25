import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate } from '../templates/template-creator';

const TraditionalFood = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-3xl text-center py-10 font-bold md:text-4xl md:text-left md:ms-10 md:mt-5">Makanan Khas Nusantara</h2>
        <div id="items" class="container flex flex-wrap mb-5 justify-center gap-5 md:p-10 md:grid lg:grid md:grid-cols-2 lg:grid-cols-3"></div>
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
