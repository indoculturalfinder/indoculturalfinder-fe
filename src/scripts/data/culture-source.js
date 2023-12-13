import API_ENDPOINT from '../globals/api-endpoint';

class CultureSource {
  static async getTraditionalCostumes() {
    const response = await fetch(API_ENDPOINT.COSTUMES);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async getCulturesById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id.id));
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async getTraditionalFoods() {
    const response = await fetch(API_ENDPOINT.FOODS);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async getTraditionalHouses() {
    const response = await fetch(API_ENDPOINT.HOUSES);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async getTraditionalDances() {
    const response = await fetch(API_ENDPOINT.DANCES);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async getTraditionalCeremonies() {
    const response = await fetch(API_ENDPOINT.CEREMONIES);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async getCategories() {
    const response = await fetch(API_ENDPOINT.CATEGORIES);
    const responseJson = await response.json();
    return responseJson.Categories;
  }

  static async getProvinces() {
    const response = await fetch(API_ENDPOINT.PROVINCES);
    const responseJson = await response.json();
    return responseJson.provinces;
  }

  static async searchTraditionalDance(danceName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_DANCE(danceName.danceName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalCeremony(ceremonyName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_CEREMONY(ceremonyName.ceremonyName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalCostume(costumeName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_COSTUME(costumeName.costumeName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalFood(foodName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_FOOD(foodName.foodName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalHouse(houseName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_HOUSE(houseName.houseName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }
}

export default CultureSource;
