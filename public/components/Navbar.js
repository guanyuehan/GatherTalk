class Navbar extends HTMLElement {
  constructor() {
    super();
    this.selected = this.getAttribute("selected");
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
      <a href="index.html" id="navbar--home">Home</a>
      <a href="chat.html" id="navbar--chat">Chat</a>
      <a href="about.html" id="navbar--about">About</a>
    </nav>
    `;

    //underline selected
    const selectedElement = document.getElementById(`navbar--${this.selected}`);
    selectedElement.style.textDecoration = "underline";
  }
}

customElements.define("navbar-component", Navbar);
