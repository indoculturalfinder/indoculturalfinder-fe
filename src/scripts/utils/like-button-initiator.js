import FavoriteCultureIdb from '../data/favorite-culture-idb';
import { createLikeButtonTemplate, createUnLikeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, culture }) {
    this._likeButtonContainer = likeButtonContainer;
    this._culture = culture;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._culture;

    if (await this._isCultureExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isCultureExist(id) {
    const culture = await FavoriteCultureIdb.getCultureById(id);
    return !!culture;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteCultureIdb.putCulture(this._culture);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteCultureIdb.deleteCulture(this._culture.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
