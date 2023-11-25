const NavigationDrawer = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('right-0');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('right-0');
  },
};

export default NavigationDrawer;
