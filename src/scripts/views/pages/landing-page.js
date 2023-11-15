import { createCategoriesItemTemplate } from '../templates/template-creator';

const LandingPage = {
  async render() {
    return `
      <!-- Hero Section -->
      <div class="hero w-full h-1/2 bg-red-600">
        <div class="hero__inner container w-full mx-auto flex flex-wrap text-white font-sans">
          
            <div class="px-10 mt-44 text-center lg:text-start lg:flex-1 lg:px-20">
              <h1 class="text-xl md:text-4xl font-semibold mb-3">Temukan Kekayaan Budaya dan Tradisi yang Penuh Warna!</h1>
              <p class="font-semibold text-sm md:text-xl text-slate-300">Menyelami Keindahan Nusantara Bersama IndoCultureFinder: Jelajahi Warisan Indonesia yang Tak Tertandingi!</p>
              <a href="#content" class="mt-5 inline-block px-5 py-3 border bg-white text-red-600 font-semibold rounded-xl hover:shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
                Explore Now
              </a>              
            </div>
            <div class="flex-1 self-end mt-32">
              <div class="mt-10">
                <img 
                  src="./images/candi.png" 
                  alt="candi"
                  class="hidden lg:flex lg:wfull lg:h-full lg:object-cover lg:object-center"
                  />
              </div>
            </div>
          
        </div>
      </div>
      <div class="gelombang">
        <img src="./images/gelombang.png"
        alt="gelombang" 
        class="w-full"/>
      </div>
            

      <!-- Content -->
      <div class="content min-h-screen">
        <h1 class="px-56 text-center text-4xl font-bold text-red-500 font-sans">Ayo Kenali Keragaman Budaya Indonesia!</h1>
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
