import API_ENDPOINT from '../globals/api-endpoint';

class CultureSource {
  static async traditionalClothes() {
    const response = await fetch(API_ENDPOINT.CLOTHES);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async getCulturesById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id.id));
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async traditionalFoods() {
    const response = await fetch(API_ENDPOINT.FOODS);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async traditionalHouses() {
    const response = await fetch(API_ENDPOINT.HOUSES);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async traditionalDance() {
    const response = await fetch(API_ENDPOINT.DANCE);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async traditionalCeremonies() {
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

  static async searchTraditionalDance(tarianName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_TDANCE(tarianName.tarianName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalCeremony(upacaraAdatName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_TCEREMONY(upacaraAdatName.upacaraAdatName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalCloth(bajuAdatName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_TCLOTH(bajuAdatName.bajuAdatName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalFood(makananKhasName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_TFOOD(makananKhasName.makananKhasName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }

  static async searchTraditionalHouse(rumahAdatName) {
    const response = await fetch(
      API_ENDPOINT.SEARCH_THOUSE(rumahAdatName.rumahAdatName),
    );
    const responseJson = await response.json();
    return responseJson.cultures;
  }
}

export default CultureSource;
