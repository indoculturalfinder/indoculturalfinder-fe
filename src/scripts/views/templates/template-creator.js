/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';

const createCultureDetailTemplate = (culture) => `
  
`;

const createCultureItemTemplate = (culture) => `
      
`;

const createCategoriesItemTemplate = () => `
  <a href="#/pakaian-adat">
    <figure class="max-w-sm rounded-xl overflow-hidden shadow-lg">
    <img 
      src="./images/pakaian-adat.jpg" 
      alt="Culture"
      class="w-full h-56 object-cover object-center"
    >
    <div class="px-6 py-4">
      <figcaption class="text-lg font-medium">
        <div class="text-2xl text-slate-500 mb-5">Pakaian Adat</div>
      </figcaption>
      
      <blockquote>
        <p class="text-slate-400 text-base truncate text-justify" id="overview-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget dui efficitur, congue libero vitae, venenatis nulla. In egestas porta eros pretium lacinia. In aliquet congue tellus. Morbi consectetur magna nec consequat porta. Cras est ipsum, vehicula quis elit vel, congue varius eros. Integer non orci accumsan, iaculis turpis non, imperdiet urna. Morbi non porta erat, at lobortis mi. Mauris ullamcorper, ex non pulvinar condimentum, nisi nisl imperdiet augue, vitae ullamcorper ante nulla vitae sem. Aenean efficitur risus sed tempor dignissim. Morbi malesuada placerat efficitur. Pellentesque sit amet dui mi. Nulla facilisi.
        </p> 
      </blockquote> 
    </div> 
  </figure>
  </a>
  
  <a href="#/tarian-adat">
    <figure class="max-w-sm rounded-xl overflow-hidden shadow-lg">
    <img 
      src="./images/tarian-adat.jpg"      
      alt="Culture"
      class="w-full h-56 object-cover object-center"
    >
    <div class="px-6 py-4">
      <figcaption class="text-lg font-medium">
        <div class="text-2xl text-slate-500 mb-5">Tarian Adat</div>
      </figcaption>
      
      <blockquote>
        <p class="text-slate-400 text-base truncate text-justify" id="overview-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget dui efficitur, congue libero vitae, venenatis nulla. In egestas porta eros pretium lacinia. In aliquet congue tellus. Morbi consectetur magna nec consequat porta. Cras est ipsum, vehicula quis elit vel, congue varius eros. Integer non orci accumsan, iaculis turpis non, imperdiet urna. Morbi non porta erat, at lobortis mi. Mauris ullamcorper, ex non pulvinar condimentum, nisi nisl imperdiet augue, vitae ullamcorper ante nulla vitae sem. Aenean efficitur risus sed tempor dignissim. Morbi malesuada placerat efficitur. Pellentesque sit amet dui mi. Nulla facilisi.
        </p> 
      </blockquote> 
    </div> 
  </figure>
  </a>
  
  <a href="#/upacara-adat">
    <figure class="max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img
        src="./images/upacara-adat.jpg"
        alt="Culture"
        class="w-full h-56 object-cover object-center"
      >
      <div class="px-6 py-4">
        <figcaption class="text-lg font-medium">
          <div class="text-2xl text-slate-500 mb-5">Upacara Adat</div>
        </figcaption>
        
        <blockquote>
          <p class="text-slate-400 text-base truncate text-justify" id="overview-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget dui efficitur, congue libero vitae, venenatis nulla. In egestas porta eros pretium lacinia. In aliquet congue tellus. Morbi consectetur magna nec consequat porta. Cras est ipsum, vehicula quis elit vel, congue varius eros. Integer non orci accumsan, iaculis turpis non, imperdiet urna. Morbi non porta erat, at lobortis mi. Mauris ullamcorper, ex non pulvinar condimentum, nisi nisl imperdiet augue, vitae ullamcorper ante nulla vitae sem. Aenean efficitur risus sed tempor dignissim. Morbi malesuada placerat efficitur. Pellentesque sit amet dui mi. Nulla facilisi.
          </p> 
        </blockquote> 
      </div> 
    </figure>
  </a>
`;

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
