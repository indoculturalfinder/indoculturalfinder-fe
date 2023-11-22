/* eslint-disable no-unused-vars */
import CultureSource from '../../data/culture-source';
import UrlParser from '../../routes/url-parser';
import { createCultureDetailTemplate } from '../templates/template-creator';

const CultureDetail = {
  async render() {
    return `
      <div class="container">
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
