export function Header(){

    const $header = document.createElement("div");
    $header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#/">SPA</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" id="homeLink" aria-current="page" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="serviciosLink" href="#/servicios">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="portafolioLink" href="#/portafolio">Portafolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contactoLink" href="#/contacto">Contacto</a>
          </li>
        </ul>
        <span class="navbar-text">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-whatsapp"></i>

        </span>
      </div>
    </div>
  </nav>
    `
    
    return $header;
}