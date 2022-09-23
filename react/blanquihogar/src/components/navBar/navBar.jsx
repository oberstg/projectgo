import React from "react";

export const NavBar = () => {
    return(
        <nav id="navegador" class="navbar navbar-expand-lg navbar-dark navegador">
            <div id="contNav" class="container-fluid">
                <button id="hambNav" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#dropNav" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="index.html">
                </a>
                <div id="dropNav" class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="catalogo.html">Catálogo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="envio.html">Cotización de envío</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="revendedores.html">Ser revendedor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;