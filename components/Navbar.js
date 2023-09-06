class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="chat.html">Chat</a>
      <a href="about.html">About</a>
    </nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);
