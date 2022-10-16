import React from "react";
import logoProStyle from "../../imgs/Logo ProStyle/Logo-NAV.jpeg";

export default function AppHeader() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark  p-3 background-black"
        aria-label="Third navbar example"
      >
        <div className="container">
          <img
            src={logoProStyle}
            alt="Logo da ProStyle"
            className=" bi me-2 d-flex  mb-2 mb-lg-0 text-white text-decoration-none"
            width={100}
            height={70}
            role="img"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li>
                <a href="index.html" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white ">
                  Camisas
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white ">
                  Camisetas Longas
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white ">
                  Regatas
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white ">
                  Suporte
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aproveite!
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li className="nav-item">
                    <a className="nav-link px-2 text-white" href="#">
                      Feminino
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link px-2 text-white" href="#">
                      Masculino
                    </a>
                  </li>
                  <li>
                    <a className="nav-link px-2 text-white" href="#">
                      Os mais vendidos!
                    </a>
                  </li>
                  <li>
                    <a className=" nav-link px-2 text-white" href="#">
                      Frete Gratis.
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="text-end">
              <button
                type="button"
                id="Mover-o-entrar-e-Cadastro"
                className="btn btn-outline-light me-2"
              >
                {" "}
                <a href="login.html" className="text-link ">
                  Entrar
                </a>
              </button>
              <button
                type="button"
                id="Mover-o-entrar-e-Cadastro"
                className="btn btn-outline-light me-2"
              >
                {" "}
                <a href="Cadastre-se.html" className="text-link">
                  Cadastre-se
                </a>
              </button>
              <a href="Carrinho.html">
                <button type="button" className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-cart4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                  Carrinho
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
