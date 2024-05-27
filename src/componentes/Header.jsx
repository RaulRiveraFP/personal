import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <Link className="navbar-brand" to="/" onClick={closeMenu}>Raul Rivera</Link> */}
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={closeMenu}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#acerca" onClick={closeMenu}>Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#tecnologias" onClick={closeMenu}>Tecnologias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#proyectos" onClick={closeMenu}>Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contacto" onClick={closeMenu}>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
