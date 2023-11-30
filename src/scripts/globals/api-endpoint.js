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
  SEARCH_TCEREMONY: (upacaraAdatName) => `${CONFIG.BASE_URL}upacara-adat/search/name/${upacaraAdatName}`,
  SEARCH_THOUSE: (rumahAdatName) => `${CONFIG.BASE_URL}rumah-adat/search/name/${rumahAdatName}`,
  SEARCH_TFOOD: (makanankhasName) => `${CONFIG.BASE_URL}makanan-khas/search/name/${makanankhasName}`,
  SEARCH_TCLOTH: (bajuAdatName) => `${CONFIG.BASE_URL}baju-adat/search/name/${bajuAdatName}`,
  PROVINCES: `${CONFIG.BASE_URL}provinces`,
};

export default API_ENDPOINT;
