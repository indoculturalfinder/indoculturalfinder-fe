class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="w-full bg-red-600 sticky top-0">
        <nav class="w-full px-20 py-7 shadow">
          <div
            class="flex flex-col items-center justify-between md:flex-row md:justify-between"
          >
            <a href="#" class="flex items-center">
              <img src="./favicon.png" alt="IndoCulture" class="mr-2 h-8 w-8" />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap text-white"
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

            <div id="navigationDrawer" class="flex items-center mt-7 md:mt-0 text-white">
              <a href="#" class="mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded">Home</a>
              <a href="#content" class="mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded">Explore Now</a>
              <a href="#aboutUs" class="mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded">About Us</a>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
