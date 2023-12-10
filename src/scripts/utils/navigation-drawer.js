const NavigationDrawer = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
      content.classList.toggle('blur-lg');
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      content.classList.remove('blur-lg');
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
