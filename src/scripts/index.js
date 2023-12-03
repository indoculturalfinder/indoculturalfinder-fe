/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/input.css';
import AOS from 'aos';

import App from './views/app';
import swRegister from './utils/sw-register';
import 'aos/dist/aos.css';

// Components
import './components/Navbar.js';
import './components/Footer.js';

// AOS.init();
AOS.init();

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
