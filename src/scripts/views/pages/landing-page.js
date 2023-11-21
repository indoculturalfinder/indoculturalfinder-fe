import { createCategoriesItemTemplate } from '../templates/template-creator';

const LandingPage = {
  async render() {
    return `
      <!-- Hero Section Start -->
      <section class="hero min-h-min w-full bg-red-600">
        <div class="flex flex-col items-center md:px-10 lg:flex-row justify-center xl:space-x-6">
          <div class="text-center lg:text-left lg:ml-10 mt-10 font-sans">
            <h1 class="max-w-2xl mx-auto px-6 text-xl text-white font-extrabold tracking-tight leading-none sm:px-0 md:text-3xl xl:text-4xl mb-3">Temukan Kekayaan Budaya dan Tradisi yang Penuh Warna!</h1>
            <p class="max-w-2xl mx-auto px-6 font-light text-gray-100 lg:mb-6 text-sm sm:px-0 md:text-base lg:text-xl">Menyelami Keindahan Nusantara Bersama IndoCultureFinder: Jelajahi Warisan Indonesia yang Tak Tertandingi!</p>
            <a href="#content" class="mt-5 inline-block px-5 py-2 border bg-white text-red-600 font-semibold rounded-xl hover:shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
              Explore Now
            </a> 
          </div>
          <div class="flex flex-col md:mt-10">
            <img src="./images/candi.png" alt="candi" class="sm:px-36 lg:w-full lg:px-0 lg:flex lg:wfull lg:h-full">
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
      <section id="content" class="min-h-screen mt-20 font-sans">
        <h1 class="px-10 text-center font-bold text-red-600 text-2xl md:text-4xl xl:text-5xl">Ayo Kenali Keragaman Budaya Indonesia!</h1>
        <p class="px-6 mx-auto text-center mt-1 font-base text-xs sm:text-sm md:text-lg md:px-32">Yuk, mari kita jelajahi serta mengapresiasi kekayaan keragaman budaya yang ada di Indonesia bersama-sama!</p>
        <div id="category-list" class="container p-5 mx-auto flex flex-wrap justify-center items-center gap-5">
        <!-- Cards Go Here -->
        </div>
      </section>  
      <!-- Culture Section End -->
        

        <!-- about us -->
        <section class="min-h-screen overflow-hidden mt-20 font-sans" id="aboutUs">
          <h1 class="font-bold text-center text-red-600 text-2xl mb-3 md:text-4xl xl:text-5xl" data-aos="zoom-in-up">About Us</h1>
          <p class="px-12 mx-auto text-center mt-3 font-semibold text-base mb-10 sm:text-lg md:text-xl md:px-32 lg:px-20 xl:px-28" data-aos="zoom-in-up">Kami mempromosikan kekayaan budaya Indonesia,  melalui promosi produk budaya, serta menginspirasi pemahaman, kesadaran dan penghargaan terhadap tradisi, budaya Indonesia. Sambil memberikan edukasi yang menginspirasi, terutama bagi generasi muda, untuk memelihara warisan budaya yang berharga.</p>
            <div class="flex px-6">
              <div class="flex flex-wrap justify-center gap-5 font-sans">
                <div class="px-10 mb-5 border rounded-lg shadow-md bg-gray-50 text-black hover:shadow-xl" data-aos="zoom-in">
                  <div></div>
                  <h2 class="font-bold  my-3 text-center md:text-xl lg:text-2xl ">Tentang</h2>
                  <p class="mb-5 font-light text-sm max-w-md mx-auto text-justify md:text-lg">"Indoculturafinder adalah sebuah situs web yang berdedikasi untuk menjelajahi dan memaparkan kekayaan keragaman 
                  budaya dan tradisi dari seluruh penjuru Nusantara. Melalui platform ini, pengguna dapat mengakses informasi tentang berbagai aspek budaya yang membedakan dan memperkaya Indonesia, termasuk namun tidak terbatas pada adat istiadat, seni, dan tradisi lokal.</p>
                </div>
              <div class="px-10 mb-5 border rounded-lg shadow-md bg-gray-50 text-black hover:shadow-xl" data-aos="zoom-in">
                  <h2 class="font-bold  my-3 text-center md:text-xl lg:text-2xl">Tujuan</h2>
                  <p class="mb-5 font-light text-sm max-w-md mx-auto text-justify md:text-lg">Tujuan utama dari Indoculturafinder adalah untuk memberikan wawasan yang mendalam dan menghargai kekayaan budaya 
                  yang ada di setiap daerah, serta mempromosikan pemahaman lintas budaya di kalangan pengguna. Dengan menyajikan konten yang informatif dan mendidik, situs ini berperan sebagai sumber pengetahuan yang menghormati serta memperkuat identitas dan keberagaman budaya Indonesia.</p>
              </div>
              <div class="px-10 mb-5 border rounded-lg shadow-md bg-gray-50 text-black hover:shadow-xl" data-aos="zoom-in">
                  <h2 class="font-bold  my-3 text-center md:text-xl lg:text-2xl">Manfaat</h2>
                  <p class="mb-5 font-light text-sm max-w-md mx-auto text-justify md:text-lg">Dengan adanya indoculturafinder diharapkan mampu memberikan manfaat seperti Pendidikan dan Kesadaran, Pengembangan Identitas Lokal, Promosi Pariwisata Budaya, Koneksi dan Pertukaran Budaya, Inspirasi Kreativitas, 
                  dengan adanya manfaat manfaat tersebut diharapkan mampu menjadi pondasi bagi masyarakat dalam mempertahankan budaya.</p>
              </div>
            </div>
          </div>
          <h1 class="font-bold font-sans text-center text-red-600 text-2xl mt-10 md:text-4xl xl:text-5xl">Keunggulan Website</h1>
        </section>
        <!-- about us end -->

        <!-- contributor-->
        <section id="contributor" class="min-h-screen py-13 mt-13">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">

            <div class="mt-50 text-3xl text-center text-red-500 text-bold">CONTRIBUTOR</div>
            <div class=" flex justify-center md:grid-cols-3 lg-grid-cols-2 gap-2 max-w-screen-lg text flex justify-center">
              <!-- contributor 1-->
                <div class="container mt-8">
                  <div class="flex flex-col">
                    <div class="p-6 flex flex-col items-center">
                      <img class="w-100 h-100 rounded-full object-cover" src="./images/sana-twice.webp" alt="profile photo">
                      <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                        <p class="mb-2 text-grey font-light text-center">asal univ</p>
                    </div>
                  </div>
                </div>
              <!-- contributor 1 end-->

              <!-- contributor 2-->
              <div class="container mt-8">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-100 h-100 rounded-full object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 2 end-->

            <!-- contributor 3-->
            <div class="container mt-8">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-100 h-100 rounded-full object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 3end-->

            <!-- contributor 4-->
            <div class="container mt-8 justify-center">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-100 h-100 rounded-full object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 4end-->

            <!-- contributor 5-->
            <div class="container mt-8 justify-center">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-100 h-100 rounded-full object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 5end-->
            </div>
        </div>
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
