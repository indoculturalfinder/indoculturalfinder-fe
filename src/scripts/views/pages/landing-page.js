import { createCategoriesItemTemplate } from '../templates/template-creator';

const LandingPage = {
  async render() {
    return `
      <!-- Hero Section Start -->
      <section class="hero min-h-screen w-full h-1/2 bg-red-600">
        <div class="hero__inner container w-full mx-auto flex flex-wrap text-white font-sans">    
            <div class="px-10 mt-44 text-center lg:text-start lg:flex-1 lg:px-20">
              <h1 class="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mb-6">Temukan Kekayaan Budaya dan Tradisi yang Penuh Warna!</h1>
              <p class="max-w-2xl font-light text-gray-100 lg:mb-6 md:text-lg lg:text-xl">Menyelami Keindahan Nusantara Bersama IndoCultureFinder: Jelajahi Warisan Indonesia yang Tak Tertandingi!</p>
              <a href="#content" class="mt-5 inline-block px-5 py-2 border bg-white text-red-600 font-semibold rounded-xl hover:shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
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
      </section>
      <!-- Hero Section End -->

      <div class="gelombang">
        <img src="./images/gelombang.png"
        alt="gelombang" 
        class="w-full"/>
      </div>
            

      <!-- Culture Section Start -->
      <section id="content" class="min-h-screen">
        <h1 class="px-56 text-center text-4xl font-bold text-red-500 mt-40 font-sans">Ayo Kenali Keragaman Budaya Indonesia!</h1>
        <div id="category-list" class="container p-5 mx-auto flex flex-wrap justify-center items-center gap-5">
        <!-- Cards Go Here -->
        </div>
      </section> 
      <!-- Culture Section End -->
        

        <!-- about us -->
          <section class="min-h-screen overflow-hidden" id="aboutUs">
            <h1 class="font-bold uppercase text-red-500 text-lg mb-2xl text-3xl text-center mb-10">ABOUT US</h1>
              <div class="flex space-x-4 justify-center">
                <div class="flex flex-wrap">
                  <div class="w-full px-4 mb-10 lg:w-1/3">
                      <h2 class="font-bold text-black mb-5 text-center">tentang</h2>
                      <p class="font-medium text-lg mb-5 max-w-md mx-8 text-justify">"Indoculturafinder adalah sebuah situs web yang berdedikasi untuk menjelajahi dan memaparkan kekayaan keragaman 
                      budaya dan tradisi dari seluruh penjuru Nusantara. Melalui platform ini, pengguna dapat mengakses informasi tentang berbagai aspek budaya yang membedakan dan memperkaya Indonesia, termasuk namun tidak terbatas pada adat istiadat, seni, dan tradisi lokal.</p>
                  </div>
                  <div class="w-full px-4 mb-10 lg:w-1/3">
                    <h2 class="font-bold text-black mb-5 text-center">tujuan</h2>
                      <p class="font-medium text-lg mb-5 max-w-md mx-8 text-justify">Tujuan utama dari Indoculturafinder adalah untuk memberikan wawasan yang mendalam dan menghargai kekayaan budaya 
                      yang ada di setiap daerah, serta mempromosikan pemahaman lintas budaya di kalangan pengguna. Dengan menyajikan konten yang informatif dan mendidik, situs ini berperan sebagai sumber pengetahuan yang menghormati serta memperkuat identitas dan keberagaman budaya Indonesia.</p>
                  </div>
                  <div class="w-full px-4 mb-10 lg:w-1/3">
                      <h2 class="font-bold text-black mb-5 text-center">manfaat</h2>
                        <p class="font-medium text-lg mb-5 max-w-md mx-8 text-justify">Dengan adanya indoculturafinder diharapkan mampu memberikan manfaat seperti Pendidikan dan Kesadaran, Pengembangan Identitas Lokal, Promosi Pariwisata Budaya, Koneksi dan Pertukaran Budaya, Inspirasi Kreativitas, 
                        dengan adanya manfaat manfaat tersebut diharapkan mampu menjadi pondasi bagi masyarakat dalam mempertahankan budaya.</p>
                  </div>
                </div>
              </div>
          </section>
        <!-- about us end -->

        <!-- contributor -->
        <section id="contributor" class="min-h-screen">
              <div class="mt-50">CONTRIBUTOR</div>
        </section>   
        <!-- contributor end-->
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded

    const contentContainer = document.querySelector('#category-list');
    contentContainer.innerHTML += createCategoriesItemTemplate();
  },
};

export default LandingPage;
