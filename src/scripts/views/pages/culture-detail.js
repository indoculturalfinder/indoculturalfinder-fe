/* eslint-disable no-unused-vars */
import CultureSource from '../../data/culture-source';
import UrlParser from '../../routes/url-parser';
import { createCultureDetailTemplate } from '../templates/template-creator';

const CultureDetail = {
  async render() {
    return `
      <div class="container">
        <div id="arrow-back" class="place-items-start mt-5 ml-8">
          <button id="goBackButton" class="btn dark:bg-slate-800">
            <svg class="rotate-180 dark:text-white w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>

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

    const goBackButton = document.querySelector('#goBackButton');

    goBackButton.addEventListener('click', () => {
      // Go back one page in the history
      window.history.go(-1);
    });
  },
};

export default CultureDetail;
