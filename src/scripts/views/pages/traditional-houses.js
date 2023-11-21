import { createCultureItemTemplate } from '../templates/template-creator';
import CultureSource from '../../data/culture-source';

const TraditionalHouse = {
  async render() {
    return `
      <div class="container">
        <header class="flex justify-between items-center py-10">
          <h2 class="text-4xl font-bold">Rumah Adat Nusantara</h2>
        </header>

        <div id="items" class="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const houses = await CultureSource.traditionalHouses();
    const housesItem = document.querySelector('#items');
    houses.forEach((culture) => {
      housesItem.innerHTML += createCultureItemTemplate(culture);
    });
  },
};

export default TraditionalHouse;
