import CultureSource from '../../data/culture-source';
import { createCategoriesItemTemplate } from '../templates/template-creator';

const LandingPage = {
  async render() {
    return `
      <!-- Hero Section Start -->
      <section class="hero min-h-screen bg-red-600">
        <div class="hero-content lg:mt-[-5rem] flex-col lg:flex-row">
          <img src="./images/candi.png" alt="candi" class="drop-shadow-2xl" />
          <div class="p-5">
            <h1 class="text-3xl md:text-left md:text-5xl font-bold text-white">Temukan Kekayaan Budaya dan Tradisi yang Penuh Warna!</h1>
            <p class="py-6 text-gray-100 font-light">Menyelami Keindahan Nusantara Bersama IndoCultureFinder: Jelajahi Warisan Indonesia yang Tak Tertandingi!</p>
            <a href="#content" class="mt-5 inline-block px-5 py-5 bg-white text-red-600 font-semibold rounded-xl hover:shadow-lg hover:bg-red-700 hover:text-white transition duration-300">
              Explore Now
            </a> 
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
                  <div class="w-14 h-14 justify-center items-center bg-red-200  text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>
                  </div>
                  <h2 class="font-bold mt-8 mb-3 text-center md:text-xl lg:text-2xl ">Tentang</h2>
                  <p class="mb-5 font-normal text-gray-700 text-sm max-w-md mx-auto text-justify md:text-lg">"Indoculturafinder adalah sebuah situs web yang berdedikasi untuk menjelajahi dan memaparkan kekayaan keragaman 
                  budaya dan tradisi dari seluruh penjuru Nusantara. Melalui platform ini, pengguna dapat mengakses informasi tentang berbagai aspek budaya yang membedakan dan memperkaya Indonesia, termasuk namun tidak terbatas pada adat istiadat, seni, dan tradisi lokal.</p>
                </div>
                <div class="px-6 mb-5 border rounded-lg shadow-md bg-white text-black hover:shadow-xl" data-aos="zoom-in" data-aos-duration="1000">
                  <div class="w-14 h-14 justify-center items-center bg-red-200  text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
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
                  <div class="w-14 h-14 justify-center items-center bg-red-200  text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
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

        <!-- our tech -->
          <section class="min-h-screen overflow-hidden mt-20 font-sans" id="ourTech">
            <h1 class="font-bold font-sans text-center text-red-600 text-2xl mb-3 md:text-4xl xl:text-5xl" data-aos="zoom-in" data-aos-duration="1000">Our Tech</h1>
            <p class="px-6 mx-auto font-sans text-center mt-1 text-xs sm:text-sm md:text-lg md:px-32 lg:px-32" data-aos="zoom-in" data-aos-duration="1000">Teknologi - teknologi yang kami gunakan dalam membangun website ini</p>
            <div class="mt-14 p-6 font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">JavaScript</h4>
                <p class="px-1 font-normal text-gray-500 text-sm md:text-xl mb-6">JavaScript menjadi bahasa yang kami gunakan dalam membangun website</p>
                <div class="flex items-center justify-center">
                  <a href="#content" class="inline-block text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Learn more
                  </a>
                </div>
              </div>
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">HTML</h4>
                <p class="px-1 font-normal text-gray-500 text-sm md:text-xl mb-6">HTML bahasa markup yang kami pakai dalam membangun website ini</p>
                <div class="flex items-center justify-center">
                  <a href="#content" class="inline-block text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Learn more
                  </a>
                </div>
              </div>
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                    </svg>
                
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">Tailwind</h4>
                <p class="px-1 font-normal text-gray-500 text-sm md:text-xl mb-6">Tailwind sebagai framework CSS kami dalam membangun website ini</p>
                <div class="flex justify-center">
                  <a href="#" class="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Learn more           
                  </a>
                </div>
              </div>
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">Laravel</h4>
                <p class="px-1 font-normal text-gray-500 text-sm md:text-xl mb-6">Laravel sebagai framework PHP kami dalam backend website ini</p>
                <div class="flex justify-center">
                  <a href="#" class="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Learn more           
                  </a>
                </div>
              </div>
              <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
                <div class="flex justify-center mb-6">
                  <div class="w-20 py-6 flex justify-center bg-red-200 bg-opacity-30 text-red-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                  </div>
                </div>
                <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">Webpack</h4>
                <p class="px-1 font-normal text-gray-500 text-sm md:text-xl mb-6">Webpack sebagai module bundler kami dalam membangun website ini</p>
                <div class="flex justify-center">
                  <a href="#" class="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Learn more           
                  </a>
                </div>
              </div>
            </div>
        </section>
        <!-- our tech end -->

        <!-- contributor-->
        <section id="contributor" class="min-h-screen mt-13 mb-40">
            <h1 class="mt-20 font-sans text-3xl text-center text-red-600 font-bold" data-aos="zoom-in" data-aos-duration="1000">Contributor</h1>
            <div class="font-sans grid grid-cols-1 px-12 sm:grid-cols-2 md:p-6 lg:grid-cols-5 gap-6">
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
