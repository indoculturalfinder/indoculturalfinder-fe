class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
        <aside>
          <img src="./favicon.png" alt="IndoCulture" class="mr-2 h-20 w-20" />
          <p class="font-bold">
            © 2023 IndoCulturalFinder. <br/>All Rights Reserved
          </p> 
          <p>Copyright © 2023 - All right reserved</p>
        </aside> 
      </footer>
    `;
  }
}

customElements.define('footer-app', Footer);
