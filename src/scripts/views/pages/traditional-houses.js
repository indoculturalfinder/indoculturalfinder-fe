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
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder);

    const houses = await CultureSource.traditionalHouses();
    const housesItem = document.querySelector('#items');
    houses.forEach((culture) => {
      housesItem.innerHTML += createCultureItemTemplate(culture);
    });
  },
};

export default TraditionalHouse;
