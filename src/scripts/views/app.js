import NavigationDrawer from '../utils/navigation-drawer';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import { loadingPage } from './templates/template-creator';

class App {
  constructor({
    button, drawer, content, navbar,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navbar = navbar;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavigationDrawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navbar: this._navbar,
    });

    // Add other component
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = loadingPage();

    try {
      const pageContent = await page.render();
      this._content.innerHTML = pageContent;

      if (pageContent) {
        await page.afterRender();
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      this._content.innerHTML = '<p>Oops, something went wrong...</p>';
    }

    document.body.addEventListener('click', (event) => {
      const { target } = event;

      if (target.matches('.skip-link')) {
        event.preventDefault();
        const targetElement = document.getElementById('content')
          || document.getElementById('items');
        targetElement.tabIndex = -1;
        targetElement.focus();
      } else if (
        target.matches('.cta')
      ) {
        event.preventDefault();
        const targetElement = document.getElementById('content');
        targetElement.scrollIntoView({ behavior: 'smooth' });
        targetElement.tabIndex = -1;
        targetElement.focus();
      }
    });
  }
}

export default App;
