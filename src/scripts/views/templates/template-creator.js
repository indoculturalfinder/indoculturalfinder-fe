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
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">  
      <img class="rounded-t-lg" src="${culture.img}" alt="${culture.name}" />
      <div class="p-5">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${culture.name}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">${culture.province_name}</p>
          <a href="/#/detail/${culture.id}" class="inline-flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Pelajari
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
  </div>
`;

const createCategoriesItemTemplate = (category) => {
  const slug = createSlug(category.name);

  return `
    <figure class="max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img 
        src="${category.img}"  
        alt="${category.name}"
        class="w-full h-56 object-cover object-center"
      >
      <div class="px-6 py-4">
        <figcaption class="text-lg font-medium">
          <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${category.name}</div>
          <p class="mb-3 font-normal text-gray-700 text-justify">${category.desc}</p>
          <a href="#/${slug}" class="inline-flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Explore
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </figcaption>
      </div> 
    </figure>
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

export {
  createCategoriesItemTemplate,
  createCultureItemTemplate,
  createCultureDetailTemplate,
  createLikeButtonTemplate,
  createUnLikeButtonTemplate,
};
