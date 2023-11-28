import CONFIG from './config';

const API_ENDPOINT = {
  CATEGORIES: `${CONFIG.BASE_URL}categories`,
  DANCE: `${CONFIG.BASE_URL}tarian`,
  CEREMONIES: `${CONFIG.BASE_URL}upacara-adat`,
  HOUSES: `${CONFIG.BASE_URL}rumah-adat`,
  FOODS: `${CONFIG.BASE_URL}makanan-khas`,
  CLOTHES: `${CONFIG.BASE_URL}baju-adat`,
  DETAIL: (id) => `${CONFIG.BASE_URL}cultures/${id}`,
  SEARCH_TDANCE: (tarianName) => `${CONFIG.BASE_URL}tarian/search/name/${tarianName}`,
};

export default API_ENDPOINT;
