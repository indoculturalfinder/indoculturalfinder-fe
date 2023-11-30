/* eslint-disable no-unused-vars */
import CultureSource from '../../data/culture-source';
import UrlParser from '../../routes/url-parser';
import { createCultureDetailTemplate } from '../templates/template-creator';

const CultureDetail = {
  async render() {
    return `
      <div class="container">
      <div id="arrow-back" class="place-items-start mt-5 ml-8">
          <a href="#" onclick="history.back()" class="inline-flex py-4 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 rounded-lg text-sm px-5 text-center me-2 mb-2 relative">
          <svg class="rotate-180 w-3.5 h-3.5 absolute top-2 left-1 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>

        </div>
        <div id="content" class="container"></div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const cultureId = UrlParser.parseActiveUrlWithoutCombiner();
    const culture = await CultureSource.getCulturesById(cultureId);

    const detailContainer = document.querySelector('#content');
    detailContainer.innerHTML = createCultureDetailTemplate(culture);
  },
};

export default CultureDetail;
