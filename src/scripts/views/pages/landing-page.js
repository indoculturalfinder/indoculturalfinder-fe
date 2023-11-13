import { createCategoriesItemTemplate } from '../templates/template-creator';

const LandingPage = {
  async render() {
    return `
      <div class="content min-h-screen">
      <h2 class="text-4xl">Ini halaman Landing Page</h2>

        <div id="category-list" class="container p-5 mx-auto flex flex-wrap justify-center items-center gap-5">
          <!-- Cards Go Here -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const contentContainer = document.querySelector('#category-list');
    contentContainer.innerHTML += createCategoriesItemTemplate();
  },
};

export default LandingPage;
