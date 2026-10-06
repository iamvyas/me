class Header extends HTMLElement {
  connectedCallback() {
    const rootPath = this.getAttribute('root') || '';
    
    this.innerHTML = `
      <!-- Navigation Bar -->
      <nav class="d-flex justify-content-between align-items-center">
        <div class="nav-brand">Vyas</div>
        <div class="d-none d-md-flex">
          <a href="${rootPath}index.html" class="nav-item">Home</a>
          <a href="${rootPath}blogIndex.html" class="nav-item">Blog</a>
          <a href="${rootPath}works.html" class="nav-item">Works</a>
          <a href="${rootPath}contact.html" class="nav-item">Contact</a>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div class="d-flex justify-content-evenly d-md-none mobile-menu">
        <a href="${rootPath}index.html" class="nav-item">Home</a>
        <a href="${rootPath}blogIndex.html" class="nav-item">Blog</a>
        <a href="${rootPath}works.html" class="nav-item">Works</a>
        <a href="${rootPath}contact.html" class="nav-item">Contact</a>
      </div>
    `;
  }
}

customElements.define('header-component', Header);
