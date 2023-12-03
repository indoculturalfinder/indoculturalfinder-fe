/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';

const createSlug = (text) => text
  .toString()
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w-]+/g, '') // Remove all non-word characters
  .replace(/--+/g, '-') // Replace multiple - with single -
// eslint-disable-next-line semi-style
;

const createCultureDetailTemplate = (culture) => `
  <div class="container mx-auto">
    <article class="p-8">
        <header>
            <h2 class="text-4xl font-bold mb-2">${culture.name}</h2>
            <p class="text-gray-600">${culture.province_name}, ${culture.category_name}</p>
        </header>
        <div class="lg:flex lg:items-center">
          <figure class="my-4 lg:w-1/2 lg:pr-4 lg:h-[300px]">
              <img src="${culture.img}" alt="${culture.name}" class="w-full h-full object-cover rounded-md mx-auto mb-4">
          </figure>
          <iframe src="${culture.video}" title="${culture.name}" class="w-full aspect-video lg:w-1/2 lg:h-[300px] mx-auto rounded-md" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <section class="mt-4 text-bg-black">
            <p class="text-lg leading-1.4 text-justify mb-5">${culture.desc}</p>
        </section>
    </article>
  </div>
`;

const createCultureItemTemplate = (culture) => ` 
  <div class="card max-w-sm bg-base-100 shadow-xl image-full">
    <figure> 
      <img src="${culture.img}" alt="${culture.name}" />
    </figure>  
    <div class="card-body">
      <h2 class="card-title">${culture.name}</h2>
      <p class="mb-3 font-normal">${culture.province_name}</p>
      <div class="card-actions justify-end">
        <a href="/#/detail/${culture.id}" class="inline-flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">
          Pelajari
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>  
    </div>
  </div>
`;

const createCategoriesItemTemplate = (category) => {
  const slug = createSlug(category.name);

  return `
    <div class="swiper-slide card w-full bg-base-100 image-full">
      <figure>
        <img 
        src="${category.img}"  
        alt="${category.name}"
        class="max-h-[16.5rem] md:max-h-80 w-full object-cover object-center"
      >
      </figure>
      <div class="card-body">
        <h2 class="card-title">${category.name}</h2>
        <p class="text-justify">${category.desc}</p>
        <div class="card-actions justify-end">
          <a href="#/${slug}" class="inline-flex py-4 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 text-center me-2 mb-2">
            Jelajahi
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this culture" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikeButtonTemplate = () => `
  <button aria-label="unlike this culture" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const headerMainPage = (pageTitle, inputPlaceholder, provinces) => {
  const provinceListItems = provinces
    .map((province) => `
      <option value="${province.name}">${province.name}</a></option>
    `)
    .join('');

  // Return the header HTML
  return `
    <header class="flex flex-wrap p-10 space-y-7 justify-center items-center md:justify-between md:flex-nowrap md:space-x-8">
      <h2 id="title" class="text-3xl text-center font-bold md:text-4xl md:mt-5">
        ${pageTitle}
      </h2>  
        
      <div class="flex items-center justify-center space-x-3 space-y-3 flex-wrap lg:justify-between lg:flex-nowrap">
        <div class="flex items-center bg-gray-100 px-2 space-x-4 rounded-lg">    
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input id="input" type="search" class="bg-gray-100 outline-none py-4" placeholder="${inputPlaceholder}" />
          <button type="submit" class="text-white py-3 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 text-center">Cari</button>
        </div>
          
        <select id="provinceSelect" class="select select-ghost w-full max-w-xs">
          <option disabled selected>Provinsi</option>
          ${provinceListItems}
        </select>
        
      </div>
    </header>
    <div id="resultMessage" class="text-center mb-5"></div>
  `;
};

export {
  createCategoriesItemTemplate,
  createCultureItemTemplate,
  createCultureDetailTemplate,
  createLikeButtonTemplate,
  createUnLikeButtonTemplate,
  headerMainPage,
};
