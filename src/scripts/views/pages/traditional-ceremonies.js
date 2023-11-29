import CultureSource from '../../data/culture-source';
import { createCultureItemTemplate, headerMainPage } from '../templates/template-creator';

const TraditionalCeremonies = {
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
    const titlePage = 'Upacara Adat Nusantara';
    const inputPlaceholder = 'Cari upacara adat ..';
    header.innerHTML += headerMainPage(titlePage, inputPlaceholder);

    const ceremonies = await CultureSource.traditionalCeremonies();
    const ceremoniesItem = document.querySelector('#items');
    ceremonies.forEach((culture) => {
      ceremoniesItem.innerHTML += createCultureItemTemplate(culture);
    });
  },
};

export default TraditionalCeremonies;
