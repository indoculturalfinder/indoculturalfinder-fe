class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="dark:bg-black lg:py-16 sm:py-10 xs:py-8 py-[30px] w-full sticky bg-opacity-60 backdrop-blur-xl" style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(./images/footer-bg.jpg); background-position: center; background-size: cover;">
        <div class="flex flex-col items-center lg:gap-14 md:gap-12 sm:gap-8 xs:gap-[30px] gap-6">
          <ul class="grid items-center justify-center font-medium text-slate-300 capitalize">
            <li class="text-center">
              <a href="" class="hover:text-primary hover:underline transition-all duration-300 md:text-[15.25px] sm:text-[14.75px] xs:text-[12.75px] text-[12px] font-nunito">
                © 2023 IndoCulturalFinder. All Rights Reserved.
              </a>
            </li>
          </ul>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-app', Footer);
