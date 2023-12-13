const NavigationDrawer = {
  init({
    button, drawer, content, navbar,
  }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
      content.classList.toggle('blur-lg');
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      content.classList.remove('blur-lg');
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      content.classList.remove('blur-lg');
    });

    window.addEventListener('scroll', () => {
      const navbarApp = navbar;
      if (window.scrollY > 10) {
        navbarApp.classList.remove('bg-red-600', 'dark:bg-slate-800');
        navbarApp.classList.add(
          'backdrop-filter',
          'backdrop-blur-md',
          'backdrop-brightness-50',
        );
      } else {
        navbarApp.classList.remove(
          'backdrop-filter',
          'backdrop-blur-md',
          'backdrop-brightness-50',
        );
        navbarApp.classList.add('bg-red-600', 'dark:bg-slate-800');
      }
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
