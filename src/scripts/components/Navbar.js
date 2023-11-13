class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="w-full bg-opacity-60 backdrop-blur-md sticky">
        <nav class="w-full px-20 py-7 shadow">
          <div
            class="flex flex-col items-center justify-between md:flex-row md:justify-between"
          >
            <a href="#" class="flex items-center">
              <img src="./favicon.png" alt="IndoCulture" class="mr-2 h-8 w-8" />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap text-teal-600"
                >Indo Cultural Finder</span
              >
            </a>

            <div class="navbar__burger">
              <a
                href="#"
                id="hamburgerButton"
                tabindex="0"
                aria-label="Menu"
                role="button"
              >
              </a>
            </div>

            <div id="navigationDrawer" class="flex items-center mt-7 md:mt-0">
              Explore Now
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
