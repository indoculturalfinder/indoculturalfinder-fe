/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import Swiper from 'swiper/bundle';
import emailjs from '@emailjs/browser';
import Toastify from 'toastify-js';
import CultureSource from '../../data/culture-source';
import { createCategoriesItemTemplate } from '../templates/template-creator';
import 'swiper/css/bundle';

const LandingPage = {
  async render() {
    return `
      <!-- Hero Section Start -->
      <section tabindex="0" class="hero min-h-screen flex flex-col justify-center bg-red-600 dark:bg-slate-800">
        <div class="hero-content lg:mt-[-5rem] flex-col lg:flex-row">
          <img src="./images/candi.png" alt="candi" class="drop-shadow-2xl" />
          <div class="p-5">
            <h1 class="text-3xl md:text-left md:text-5xl font-bold text-white">Temukan Kekayaan Budaya dan Tradisi yang Penuh Warna!</h1>
            <p class="py-6 text-gray-100 font-light">Menyelami Keindahan Nusantara Bersama IndoCultureFinder: Jelajahi Warisan Indonesia yang Tak Tertandingi!</p>
            <a href="#content" class="cta mt-5 inline-block px-5 py-5 bg-white text-red-600 font-semibold rounded-xl hover:shadow-lg hover:bg-red-800 hover:text-white transition duration-300 dark:bg-red-700 dark:text-white">
              Selengkapnya
            </a> 
          </div>
        </div>
      </section>
      <!-- Hero Section End -->

      <div class="gelombang -mt-5">
        <img src="./images/gelombang.png"
        alt="gelombang" 
        class="w-full dark:hidden"/>
      </div>
            
      <!-- content section Start -->
      <section tabindex="0" class="min-h-screen py-10 flex flex-col justify-center">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-600 dark:text-white" data-aos="zoom-in" data-aos-duration="1000">
          Ayo Kenali Keragaman Budaya Indonesia!
        </h2>

        <p class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl mb-14 md:mb-24" data-aos="zoom-in" data-aos-duration="1000">
          Yuk, mari kita jelajahi serta mengapresiasi kekayaan keragaman budaya yang ada di Indonesia bersama-sama!
        </p>

        <div id="content" class="swiper container max-w-sm md:max-w-2xl"> 
          <button id="prevButton" class="swiper-button-prev"></button>
          <div id="category-list" class="swiper-wrapper">
          <!-- Cards Go Here -->
        </div>
        
        <div class="swiper-pagination"></div>
          <button id="nextButton" class="swiper-button-next"></button>
        </div>
      </section>  
      <!-- content section End -->
        

      <!-- about section start -->
      <section tabindex="0" id="about" class="min-h-screen flex flex-col justify-center p-8">       
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-600 dark:text-white" data-aos="zoom-in" data-aos-duration="1000">
          Tentang
        </h2>
          
        <p class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl md:px-32 lg:px-32 mb-24" data-aos="zoom-in" data-aos-duration="1000">
          Menyuarakan Kekayaan Budaya Indonesia: Mempromosikan, Menginspirasi, dan Membudayakan Pemahaman serta Penghargaan Terhadap Warisan Tradisi dan Budaya
        </p>
        
        <div class="mx-auto max-w-6xl grid grid-cols-1 gap-4 px-6 md:grid-cols-3 md:gap-8">
            <div class="px-6 mb-5 rounded-3xl dark:shadow-2xl shadow-lg relative bg-white text-black hover:shadow-xl dark:bg-slate-800" data-aos="zoom-in" data-aos-duration="1000">
              <div class="w-14 h-14 justify-center items-center bg-red-200  text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>

              <h3 class="font-bold mt-8 mb-3 text-center md:text-xl lg:text-2xl dark:text-white">
                Tentang
              </h3>
              
              <p class="mb-5 font-normal text-gray-700 text-sm max-w-md mx-auto text-justify md:text-lg dark:text-gray-400">
                Indoculturafinder adalah sebuah situs web yang berdedikasi untuk menjelajahi dan memaparkan kekayaan keragaman budaya dan tradisi dari seluruh penjuru Nusantara. Melalui platform ini, pengguna dapat mengakses informasi tentang berbagai aspek budaya yang membedakan dan memperkaya Indonesia, termasuk namun tidak terbatas pada adat istiadat, seni, dan tradisi lokal.
              </p>
            </div>

            <div class="px-6 mb-5 rounded-3xl dark:shadow-2xl shadow-lg bg-white text-black hover:shadow-xl dark:bg-slate-800" data-aos="zoom-in" data-aos-duration="1000">
              <div class="w-14 h-14 justify-center items-center bg-red-200  text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z" clip-rule="evenodd" />
                  <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
                  <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
                </svg>
              </div>

              <h3 class="font-bold mt-8 mb-3 text-center md:text-xl lg:text-2xl dark:text-white">
                Tujuan
              </h3>

              <p class="mb-5 font-normal text-gray-700 text-sm max-w-md mx-auto text-justify md:text-lg dark:text-gray-400">
                Tujuan utama dari Indoculturafinder adalah untuk memberikan wawasan yang mendalam dan menghargai kekayaan budaya yang ada di setiap daerah, serta mempromosikan pemahaman lintas budaya di kalangan pengguna. Dengan menyajikan konten yang informatif dan mendidik, situs ini berperan sebagai sumber pengetahuan yang menghormati serta memperkuat identitas dan keberagaman budaya Indonesia.
              </p>
            </div>
            
            <div class="px-6 mb-5 rounded-3xl dark:shadow-2xl shadow-lg bg-white text-black hover:shadow-xl dark:bg-slate-800" data-aos="zoom-in" data-aos-duration="1000">
              <div class="w-14 h-14 justify-center items-center bg-red-200  text-red-600 rounded-full flex absolute -top-7 left-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
              </div>

              <h3 class="font-bold mt-8 mb-3 text-center md:text-xl lg:text-2xl dark:text-white">
                Manfaat
              </h3>

              <p class="mb-5 font-normal text-gray-700 text-sm max-w-md mx-auto text-justify md:text-lg dark:text-gray-400">
                Dengan adanya indoculturafinder diharapkan mampu memberikan manfaat seperti Pendidikan dan Kesadaran, Pengembangan Identitas Lokal, Promosi Pariwisata Budaya, Koneksi dan Pertukaran Budaya, Inspirasi Kreativitas, dengan adanya manfaat manfaat tersebut diharapkan mampu menjadi pondasi bagi masyarakat dalam mempertahankan budaya.
              </p>
            </div>
          
        </div>
      </section>
      <!-- about section end -->

      <!-- tech section start -->
      <section tabindex="0" class="min-h-screen p-8 flex flex-col justify-center" id="tech">
      
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-600 dark:text-white" 
        data-aos="zoom-in" 
        data-aos-duration="1000">
          Teknologi
        </h2>
            
        <p class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl mb-7 md:px-32 lg:px-32" 
        data-aos="zoom-in" 
        data-aos-duration="1000">
          Teknologi - teknologi yang kami gunakan dalam membangun website ini
        </p>

        <div class="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
          <figure
            title="JavaScript"
            class="relative overflow-hidden rounded-3xl shadow-lg dark:bg-slate-800 dark:shadow-2xl bg-white p-6 duration-100 dark:border-0 active:rounded-xl"
            data-aos="zoom-in" 
            data-aos-duration="1000"
          >
            <div class="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                width="140"
                height="140"
                alt="JavaScript logo"
                title="JavaScript"
                loading="lazy"
                class="h-16 w-16 max-w-full object-contain sm:h-36 sm:w-36 rounded-xl"
              />
            </div>
              <figcaption class="mt-4 hidden text-center font-bold sm:block">
                JavaScript
              </figcaption>
          </figure>

          <figure
            title="Tailwind"
            class="relative overflow-hidden rounded-3xl shadow-lg dark:bg-slate-800 dark:shadow-2xl bg-white p-6 duration-100 dark:border-0 active:rounded-xl"
            data-aos="zoom-in" 
            data-aos-duration="1000"
          >
            <div class="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                width="140"
                height="140"
                alt="Tailwind logo"
                title="Tailwind"
                loading="lazy"
                class="h-16 w-16 max-w-full object-contain sm:h-36 sm:w-36"
              />
            </div>
            <figcaption class="mt-4 hidden text-center sm:block">
              <div class="font-bold">Tailwind CSS</div>
            </figcaption>
          </figure>

          <figure
            title="Laravel"
            class="relative overflow-hidden rounded-3xl shadow-lg dark:bg-slate-800 dark:shadow-2xl bg-white p-6 duration-100 dark:border-0 active:rounded-xl"
            data-aos="zoom-in" 
            data-aos-duration="1000"
          >
            <div class="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                width="140"
                height="140"
                alt="Laravel logo"
                title="Laravel"
                loading="lazy"
                class="h-16 w-16 max-w-full object-contain sm:h-36 sm:w-36"
              />
            </div>
            <figcaption class="mt-4 hidden text-center sm:block">
              <div class="font-bold">Laravel</div>
            </figcaption>
          </figure>

          <figure
            title="Webpack"
            class="relative overflow-hidden rounded-3xl shadow-lg dark:bg-slate-800 dark:shadow-2xl bg-white p-6 duration-100 dark:border-0 active:rounded-xl"
            data-aos="zoom-in" 
            data-aos-duration="1000"
          >
            <div class="flex items-center justify-center">
              <img
                src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
                width="140"
                height="140"
                alt="Webpack logo"
                title="Webpack"
                loading="lazy"
                class="h-16 w-16 max-w-full object-contain sm:h-36 sm:w-36"
              />
            </div>
            <figcaption class="mt-4 hidden text-center sm:block">
              <div class="font-bold">Webpack Bundler</div>
            </figcaption>
          </figure>

          <figure
            title="Workbox"
            class="relative overflow-hidden rounded-3xl shadow-lg dark:bg-slate-800 dark:shadow-2xl bg-white p-6 duration-100 dark:border-0 active:rounded-xl"
            data-aos="zoom-in" 
            data-aos-duration="1000"
          >
            <div class="flex items-center justify-center">
              <img
                src="https://cdn.worldvectorlogo.com/logos/workbox-1.svg"
                width="140"
                height="140"
                alt="Workbox logo"
                title="Workbox"
                loading="lazy"
                class="h-16 w-16 max-w-full object-contain sm:h-36 sm:w-36"
              />
            </div>
            <figcaption class="mt-4 hidden text-center sm:block">
              <div class="font-bold">Workbox</div>
            </figcaption>
          </figure>

          <figure
            title="ESLint"
            class="relative overflow-hidden rounded-3xl shadow-lg dark:bg-slate-800 dark:shadow-2xl bg-white p-6 duration-100 dark:border-0 active:rounded-xl"
            data-aos="zoom-in" 
            data-aos-duration="1000"
          >
            <div class="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg"
                width="140"
                height="140"
                alt="ESLint logo"
                title="ESLint"
                loading="lazy"
                class="h-16 w-16 max-w-full object-contain sm:h-36 sm:w-36"
              />
            </div>
            <figcaption class="mt-4 hidden text-center sm:block">
              <div class="font-bold">ESLint</div>
            </figcaption>
          </figure>
        </div>
      </section>
      <!-- tech section end -->
    

      <!-- contributor section start -->
      <section tabindex="0" id="contributor" class="min-h-screen p-8 flex flex-col justify-center items-center">
      
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-600 dark:text-white" data-aos="zoom-in" data-aos-duration="1000">
          Kontributor
        </h2>

        <p class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Membentuk Keunggulan: Memperkenalkan Kontributor Kami yang Berdedikasi
        </p>

        <div class="font-sans max-w-6xl grid grid-cols-1 px-12 sm:grid-cols-2 md:p-6 lg:grid-cols-5 gap-6">
          <!-- contributor 1-->
            <a 
              href="https://www.linkedin.com/in/muhammmad-rifqi-daffa-ulhaq-9b9301260/" 
              class="container mt-8" 
              data-aos="zoom-in" 
              data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <div class="avatar">
                    <div class="w-400 h-400 rounded-full dark:ring dark:ring-primary dark:ring-offset-base-100 dark:ring-offset-2">
                      <img src="./images/contributor-1.webp" />
                    </div>
                  </div>
                    
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">
                    Daffa Ulhaq
                  </h2>

                  <p class="mb-2 text-grey font-light text-center">
                    Universitas Logistik dan Bisnis Internasional
                  </p>
                </div>
              </div>
            </a>
            <!-- contributor 1 end-->

            <!-- contributor 2-->
            <a 
              href="https://www.linkedin.com/in/zulham-prabandanu-59a60b28a/" 
              class="container mt-8" 
              data-aos="zoom-in" 
              data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <div class="avatar">
                    <div class="w-400 h-400 rounded-full dark:ring dark:ring-primary dark:ring-offset-base-100 dark:ring-offset-2">
                      <img src="./images/contributor-2.webp" />
                    </div>
                  </div>
                    
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">
                    Zulham Prabandanu
                  </h2>

                  <p class="mb-2 text-grey font-light text-center">
                    Universitas Islam Sultan Agung
                  </p>
                </div>
              </div>
            </a>
            <!-- contributor 2 end-->

            <!-- contributor 3-->
            <a 
              href="https://www.linkedin.com/in/muhammad-ilman-aqilaa-0132b9203/" 
              class="container mt-8" 
              data-aos="zoom-in" 
              data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <div class="avatar">
                    <div class="w-400 h-400 rounded-full dark:ring dark:ring-primary dark:ring-offset-base-100 dark:ring-offset-2">
                      <img src="./images/contributor-3.webp" />
                    </div>
                  </div>
                    
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">
                    Muhammad Ilman Aqilaa
                  </h2>

                  <p class="mb-2 text-grey font-light text-center">
                    Universitas Logistik dan Bisnis Internasional
                  </p>
                </div>
              </div>
            </a>
            <!-- contributor 3end-->

            <!-- contributor 4-->
            <a 
            href="https://www.linkedin.com/in/airlangga-maulana-anwar-a4b261296/" 
            class="container mt-8" 
            data-aos="zoom-in" 
            data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <div class="avatar">
                    <div class="w-400 h-400 rounded-full dark:ring dark:ring-primary dark:ring-offset-base-100 dark:ring-offset-2">
                      <img src="./images/contributor-5.webp" />
                    </div>
                  </div>
                    
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">
                    Airlangga Maulana Anwar
                  </h2>

                  <p class="mb-2 text-grey font-light text-center">
                    Institut Teknologi Telkom Purwokerto
                  </p>
                </div>
              </div>
            </a>
            <!-- contributor 4end-->

            <!-- contributor 5-->
            <a 
            href="https://www.linkedin.com/in/inskie-dev221/" 
            class="container mt-8" 
            data-aos="zoom-in" 
            data-aos-duration="1000">
              <div class="flex flex-col">
                <div class="p-6 flex flex-col items-center">
                  <div class="avatar">
                    <div class="w-400 h-400 rounded-full dark:ring dark:ring-primary dark:ring-offset-base-100 dark:ring-offset-2">
                      <img src="./images/contributor-4.webp" />
                    </div>
                  </div>
                    
                  <h2 class="mt-5 mb-2 text-bold text-black-400 text-lg text-center">
                    Bryan Samperura
                  </h2>

                  <p class="mb-2 text-grey font-light text-center">
                    Universitas Logistik dan Bisnis Internasional
                  </p>
                </div>
              </div>
            </a>
            <!-- contributor 5end-->
            </div>
      </section>
      <!-- contributor section end-->


      <!-- contact section start-->
      <section tabindex="0" class="bg-white dark:bg-gray-900 min-h-screen p-8 flex flex-col justify-center" id="contact">
        <div class="px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-600 dark:text-white">Hubungi kami</h2>

          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Ada masalah teknis? Ingin mengirimkan umpan balik? Beri tahu kami.</p>
            
          <form id="contact-form" class="space-y-8">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Nama
              </label>

              <input type="text" id="name" name="name" minlength="4" class="input block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Masukkan nama lengkap kamu" required>
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email
              </label>

              <input type="email" id="email" name="email" class="input w-full shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@example.com" required>
            </div>
               
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Pesan
              </label>

              <textarea id="message" name="message" minlength="10" rows="6" class="textarea block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tulis pesan kamu..."></textarea>
            </div>

            <button type="submit" class="py-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 text-center">
              Send message
            </button>
          </form>
        </div>
      </section>
      <div id="toast"></div>
      <!-- contact section end-->
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
    const categories = await CultureSource.getCategories();
    const categoriesItem = document.querySelector('#category-list');
    const content = document.getElementById('content');
    if (categories) {
      categories.forEach((category) => {
        categoriesItem.innerHTML += createCategoriesItemTemplate(category);
      });
    } else {
      const skeletonItem = `
      <div class="flex flex-col gap-4 w-96 mx-auto">
        <div class="skeleton h-32 w-full"></div>
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
      `;
      content.innerHTML = skeletonItem;
    }

    // init Swiper:
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper', {
      // Default parameters
      slidesPerView: 1,
      spaceBetween: 20,
      // Responsive breakpoints
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows button
      navigation: {
        nextEl: '#nextButton',
        prevEl: '#prevButton',
      },
      // Looping slide
      loop: true,
      // Auto play slide
      autoplay: {
        delay: 5000,
        disavleOnInteraction: true,
      },
    });

    // EmailJs utils

    const contactForm = document.getElementById('contact-form');
    async function sendEmail() {
      return emailjs.sendForm(
        'service_9k83dlj',
        'template_bpvau3u',
        '#contact-form',
        'BxY0-FQlMSQA3_Mel',
      );
    }

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      try {
        await sendEmail(); // Panggil fungsi yang menggunakan async/await
        Toastify({
          text: 'Pesan kamu berhasil dikirim',
          className: 'info',
          style: {
            background: 'linear-gradient(to right, #ff0844, #ffb199)',
          },
        }).showToast();
      } catch (error) {
        console.error('FAILED...', error);
        Toastify({
          text: 'Ups! Mohon kirim pesan beberapa saat lagi',
          className: 'error',
          style: {
            background: 'linear-gradient(to right, #cfd9df, #e2ebf0)',
          },
        }).showToast();
      }
    });
  },
};

export default LandingPage;
