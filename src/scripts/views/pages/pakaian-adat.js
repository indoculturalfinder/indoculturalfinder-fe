const PakaianAdat = {
  async render() {
    return `
      <div class="content min-h-screen flex justify-center items-center">
        <h2 class="content__title">Halaman Pakaian Adat</h2>
      </div>
    `;
  },

  async afterRender() {
    // This function will run after the page is loaded
  },
};

export default PakaianAdat;
