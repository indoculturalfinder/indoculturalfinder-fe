class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="w-full bg-red-600 px-5 dark:bg-slate-800">
        <nav class="w-full px-4 md:px-5 lg:px-10 py-7">
          <div class="flex justify-between items-center md:justify-between">
            <a href="#" class="flex items-center">
              <img src="./favicon.png" alt="IndoCulture" class="mr-2 h-8 w-8 lg:h-10 lg:w-10" />
              <span class="self-center text-lg lg:text-2xl font-semibold whitespace-nowrap text-white py-3">Indo Cultural Finder</span>
            </a>

            <div id="hamburgerButton" tabindex="0" role="button" class="btn btn-ghost inline-block md:hidden btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>

            <div id="navigationDrawer" class="flex flex-col items-start md:hidden md:mt-0 text-gray-900 font-semibold fixed top-0 right-0 h-full w-[50%] md:w-[30rem] bg-white transform translate-x-full transition-transform z-50 shadow-3xl dark:bg-slate-800 dark:text-white">
              <a href="#" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Beranda</a>
              <a href="#content" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Konten</a>
              <a href="#aboutUs" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Tentang</a>
              <a href="#tech" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Teknologi</a>
              <a href="#contributor" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Kontributor</a>
              <a href="#contact" class="w-full py-3 my-3 mx-5 transition ease-in-out duration-500 hover:text-red-700">Hubungi Kami</a>
            </div>

            <div class="hidden text-white text-sm lg:text-base md:inline-block">
              <a href="#" class="py-3 lg:mx-2 xl:mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Beranda</a>
              <a href="#content" class="py-3 lg:mx-2 xl:mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Konten</a>
              <a href="#aboutUs" class="py-3 lg:mx-2 xl:mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Tentang</a>
              <a href="#tech" class="py-3 lg:mx-2 xl:mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Teknologi</a>
              <a href="#contributor" class="py-3 lg:mx-2 xl:mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Kontributor</a>
              <a href="#contact" class="py-3 lg:mx-2 xl:mx-5 transition ease-in-out delay-150 hover:bg-red-700 rounded px-1">Hubungi Kami</a>
            </div>
          </div>
        </nav>
      </header>


    `;
  }
}

customElements.define('nav-bar', NavBar);
