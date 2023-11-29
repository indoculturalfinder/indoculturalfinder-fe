class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="w-full bg-red-600 px-5">
        <nav class="w-full px-4 md:px-10 py-7">
          <div class="flex justify-between items-center md:justify-between">
            <a href="#" class="flex items-center">
              <img src="./favicon.png" alt="IndoCulture" class="mr-2 h-10 w-10" />
              <span class="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap text-white">Indo Cultural Finder</span>
            </a>

            <div class="navbar__burger inline-block md:hidden">
              <a href="#" id="hamburgerButton" class="space-y-2 p-3 inline-block md:hidden" tabindex="0" aria-label="Menu" role="button">
                <div class="w-8 h-0.5 bg-white"></div>
                <div class="w-8 h-0.5 bg-white"></div>
                <div class="w-8 h-0.5 bg-white"></div>
              </a>
            </div>

            <div id="navigationDrawer" class="flex flex-col items-start md:hidden md:mt-0 text-gray-900 font-semibold fixed top-0 right-0 h-full w-[50%] md:w-[30rem] bg-white transform translate-x-full transition-transform z-20 shadow-lg">
              <a href="#" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Home</a>
              <a href="#content" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Explore Now</a>
              <a href="#aboutUs" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">About Us</a>
            </div>

            <div class="hidden text-white md:inline-block">
              <a href="#" class="mx-5 py-3 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Home</a>
              <a href="#content" class="mx-5 py-3 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Explore Now</a>
              <a href="#aboutUs" class="mx-5 py-3 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">About Us</a>
            </div>
          </div>
        </nav>
      </header>


    `;
  }
}

customElements.define('nav-bar', NavBar);
