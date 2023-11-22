import CultureSource from '../../data/culture-source';
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
        <h1 class="px-10 text-center font-bold text-red-600 text-2xl md:text-4xl xl:text-5xl" data-aos="zoom-in" data-aos-duration="1000">Ayo Kenali Keragaman Budaya Indonesia!</h1>
        <p class="px-6 mx-auto text-center mt-1 font-base text-xs sm:text-sm md:text-lg md:px-32" data-aos="zoom-in" data-aos-duration="1000">Yuk, mari kita jelajahi serta mengapresiasi kekayaan keragaman budaya yang ada di Indonesia bersama-sama!</p>
        <div id="category-list" class="flex flex-wrap px-6 justify-center gap-5 mt-20">
          <!-- Cards Go Here -->
        </div>
      </section>  
      <!-- Culture Section End -->
        

        <!-- about us -->
        <section class="min-h-screen overflow-hidden mt-20 font-sans" id="aboutUs">
          <h1 class="font-bold text-center text-red-600 text-2xl mb-3 md:text-4xl xl:text-5xl" data-aos="zoom-in" data-aos-duration="1000">About Us</h1>
          <p class="px-6 mx-auto text-center mt-1 font-sans text-xs sm:text-sm md:text-lg md:px-32 lg:px-32" data-aos="zoom-in" data-aos-duration="1000">Kami mempromosikan kekayaan budaya Indonesia,  melalui promosi produk budaya, serta menginspirasi pemahaman, kesadaran dan penghargaan terhadap tradisi, budaya Indonesia. Sambil memberikan edukasi yang menginspirasi, terutama bagi generasi muda, untuk memelihara warisan budaya yang berharga.</p>
            <div class="flex px-2 mt-14">
              <div class="flex flex-wrap px-6 justify-center gap-5 font-sans">
                <div class="px-6 mb-5 border rounded-lg shadow-md relative bg-white text-black hover:shadow-xl" data-aos="zoom-in" data-aos-duration="1000">
                  <div class="w-14 h-14 justify-center items-center bg-red-200 bg-opacity-30 text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>
                  </div>
                  <h2 class="font-bold mt-8 mb-3 text-center md:text-xl lg:text-2xl ">Tentang</h2>
                  <p class="mb-5 font-normal text-gray-700 text-sm max-w-md mx-auto text-justify md:text-lg">"Indoculturafinder adalah sebuah situs web yang berdedikasi untuk menjelajahi dan memaparkan kekayaan keragaman 
                  budaya dan tradisi dari seluruh penjuru Nusantara. Melalui platform ini, pengguna dapat mengakses informasi tentang berbagai aspek budaya yang membedakan dan memperkaya Indonesia, termasuk namun tidak terbatas pada adat istiadat, seni, dan tradisi lokal.</p>
                </div>
                <div class="px-6 mb-5 border rounded-lg shadow-md bg-white text-black hover:shadow-xl" data-aos="zoom-in" data-aos-duration="1000">
                  <div class="w-14 h-14 justify-center items-center bg-red-200 bg-opacity-30 text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z" clip-rule="evenodd" />
                      <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
                      <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
                    </svg>
                  </div>
                  <h2 class="font-bold mt-8 mb-3 text-center md:text-xl lg:text-2xl">Tujuan</h2>
                  <p class="mb-5 font-normal text-gray-700 text-sm max-w-md mx-auto text-justify md:text-lg">Tujuan utama dari Indoculturafinder adalah untuk memberikan wawasan yang mendalam dan menghargai kekayaan budaya 
                  yang ada di setiap daerah, serta mempromosikan pemahaman lintas budaya di kalangan pengguna. Dengan menyajikan konten yang informatif dan mendidik, situs ini berperan sebagai sumber pengetahuan yang menghormati serta memperkuat identitas dan keberagaman budaya Indonesia.</p>
                </div>
                <div class="px-6 mb-5 border rounded-lg shadow-md bg-white text-black hover:shadow-xl" data-aos="zoom-in" data-aos-duration="1000">
                  <div class="w-14 h-14 justify-center items-center bg-red-200 bg-opacity-30 text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <h2 class="font-bold mt-8 mb-3 text-center md:text-xl lg:text-2xl">Manfaat</h2>
                  <p class="mb-5 font-normal text-gray-700 text-sm max-w-md mx-auto text-justify md:text-lg">Dengan adanya indoculturafinder diharapkan mampu memberikan manfaat seperti Pendidikan dan Kesadaran, Pengembangan Identitas Lokal, Promosi Pariwisata Budaya, Koneksi dan Pertukaran Budaya, Inspirasi Kreativitas, 
                  dengan adanya manfaat manfaat tersebut diharapkan mampu menjadi pondasi bagi masyarakat dalam mempertahankan budaya.</p>
                </div>
              </div>
            </div>
        </section>
        <!-- about us end -->

        <!-- our feature -->
          <section class="min-h-screen overflow-hidden mt-20 font-sans" id="ourFeature">
            <h1 class="font-bold font-sans text-center text-red-600 text-2xl mb-3 md:text-4xl xl:text-5xl" data-aos="zoom-in" data-aos-duration="1000">Our Feature</h1>
            <p class="px-6 mx-auto font-sans text-center mt-1 text-xs sm:text-sm md:text-lg md:px-32 lg:px-32" data-aos="zoom-in" data-aos-duration="1000">Nikmati fitur kami!</p>
            <div class="mt-14 px-6 font-sans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                    </svg>
              
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">Flexible</h4>
                <p class="px-3 font-normal text-gray-500 text-md md:text-xl mb-6">Sangat mudah di akses dalam kondisi apapun</p>
                <div class="flex justify-center">
                  <a href="#" class="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Learn more           
                  </a>
                </div>
              </div>
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
                    </svg>
                                  
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">Realtime Data</h4>
                <p class="px-3 font-normal text-gray-500 text-md md:text-xl mb-6">Data yang kami disajikan selalu update</p>
                <div class="flex justify-center">
                  <a href="#" class="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Learn more           
                  </a>
                </div>
              </div>
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
                    </svg>

                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">Multiplatform</h4>
                <p class="px-3 font-normal text-gray-500 text-md md:text-xl mb-6">Anda dapat mengakses di berbagai perangkat</p>
                <div class="flex justify-center">
                  <a href="#" class="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Learn more           
                  </a>
                </div>
              </div>
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
                      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">Easy to Use</h4>
                <p class="px-3 font-normal text-gray-500 text-md md:text-xl mb-6">Aplikasi ini udah digunakan oleh siapapun</p>
                <div class="flex justify-center">
                  <a href="#" class="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Learn more           
                  </a>
                </div>
              </div>
            </div>
        </section>
        <!-- our feature end -->

        <!-- contributor-->
        <section id="contributor" class="min-h-screen mt-13 mb-40">
            <h1 class="mt-20 font-sans text-3xl text-center text-red-600 font-bold" data-aos="zoom-in" data-aos-duration="1000">Contributor</h1>
            <div class="font-sans grid grid-cols-2 px-12 sm:grid-cols-3 md:p-6 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <!-- contributor 1-->
              <div class="container mt-8 " data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex flex-col">
                  <div class="p-6 flex flex-col items-center">
                    <img class="w-400 h-400 rounded-lg object-cover" src="./images/sana-twice.webp" alt="profile photo">
                    <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                      <p class="mb-2 text-grey font-light text-center">asal univ</p>
                  </div>
                </div>
              </div>
            <!-- contributor 1 end-->

            <!-- contributor 2-->
            <div class="container mt-8 " data-aos="zoom-in" data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-400 h-400 rounded-lg object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 2 end-->

            <!-- contributor 3-->
            <div class="container mt-8 " data-aos="zoom-in" data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-400 h-400 rounded-lg object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 3end-->

            <!-- contributor 4-->
            <div class="container mt-8 " data-aos="zoom-in" data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-400 h-400 rounded-lg object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 4end-->

            <!-- contributor 5-->
            <div class="container mt-8 " data-aos="zoom-in" data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <img class="w-400 h-400 rounded-lg object-cover" src="./images/sana-twice.webp" alt="profile photo">
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">nama contributor</h2>
                    <p class="mb-2 text-grey font-light text-center">asal univ</p>
                </div>
              </div>
            </div>
            <!-- contributor 5end-->
            </div>
      </section>
      <!-- contributor end-->
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const categories = await CultureSource.getCategories();
    const categoriesItem = document.querySelector('#category-list');
    categories.forEach((category) => {
      categoriesItem.innerHTML += createCategoriesItemTemplate(category);
    });
  },
};

export default LandingPage;
