import CONFIG from './config';

const API_ENDPOINT = {
  CATEGORIES: `${CONFIG.BASE_URL}categories`,
  DANCES: `${CONFIG.BASE_URL}dance`,
  CEREMONIES: `${CONFIG.BASE_URL}traditional-ceremonies`,
  HOUSES: `${CONFIG.BASE_URL}traditional-houses`,
  FOODS: `${CONFIG.BASE_URL}traditional-food`,
  COSTUMES: `${CONFIG.BASE_URL}traditional-costume`,
  DETAIL: (id) => `${CONFIG.BASE_URL}cultures/${id}`,
  SEARCH_DANCE: (danceName) => `${CONFIG.BASE_URL}dance/search/name/${danceName}`,
  SEARCH_CEREMONY: (ceremonyName) => `${CONFIG.BASE_URL}traditional-ceremonies/search/name/${ceremonyName}`,
  SEARCH_HOUSE: (houseName) => `${CONFIG.BASE_URL}traditional-houses/search/name/${houseName}`,
  SEARCH_FOOD: (foodName) => `${CONFIG.BASE_URL}traditional-food/search/name/${foodName}`,
  SEARCH_COSTUME: (costumeName) => `${CONFIG.BASE_URL}traditional-costume/search/name/${costumeName}`,
  PROVINCES: `${CONFIG.BASE_URL}provinces`,
};

export default API_ENDPOINT;
