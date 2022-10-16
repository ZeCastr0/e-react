import React from "react";
import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";

export default function Home() {
  return (
    <div>
      <div>
        {/* Header */}
        <AppHeader />
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">
                  "×"
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div
                  className="lista-carrinho"
                  style={{ color: "black" }}
                ></div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* MENU NAVBAR */}
        <div className="navbar-collapse collapse" id="navbarsExample01">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feminino
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Masculino</a>
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
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Os mais vendidos!
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Produtos com Frete Gratis para todo Brasil.
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
          </form>
        </div>
        {/*Carrosel */}
        <section>
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={0}
                className
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={1}
                aria-label="Slide 2"
                className="active"
                aria-current="true"
              />
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  src="assets/frete.png"
                  alt="IMG TESTE Carrosel"
                  className="bd-placeholder-img img-carousel"
                />
                <div className="container">
                  <div className="carousel-caption text-start" />
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="assets/arara-roupas.jpg"
                  alt="IMG TESTE Carrosel"
                  className="bd-placeholder-img img-carousel"
                />
                <div className="container">
                  <div className="carousel-caption" />
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="assets/Imagem-streetwear-nacional.png"
                  alt="IMG TESTE Carrosel"
                  className="bd-placeholder-img img-carousel"
                />
                <div className="container">
                  <div className="carousel-caption text-end"></div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* PRODUTOS*/}
        <main>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/camisa santacruz.png.png"
                      alt="Camisa Santacruz Preta"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Camisa Santa Cruz Preta
                    </text>
                    <div className="lista-carrinho">
                      <span id="close">{/*Fechar*/}</span>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button
                            onclick="addCamisa()"
                            type="button"
                            className="btn btn-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/camisa-vislla-azul.png.png"
                      alt="Camisa Vissla Azul"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect className width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Camisa Vissla Azul
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/Camisa Supreme Branca.png.png"
                      alt="Camisa Supreme Branca"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Camisa Supreme Branca
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/mangalongapreta.png.png  "
                      alt="Manga Longa thrasher"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Manga Longa thrasher
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/mangalongacinza.png.png"
                      alt="Manga Longa Nike Cinza"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Manga Longa Nike Cinza
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/mangalongaillusionpreta.png.png"
                      alt="manga longa illusion preta"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Manga Longa Illusion Preta
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/camisa santacruz.png.png"
                      alt="Camisa Santacruz Preta"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Camisa Santa Cruz Preta
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/camisa santacruz.png.png"
                      alt="Camisa Santacruz Preta"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Camisa Santa Cruz Preta
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm align-items-center">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      {/* IMAGEM AQUI*/}
                    </svg>
                    <img
                      src="./assets/camisa santacruz.png.png"
                      alt="Camisa Santacruz Preta"
                      className="Tamanho-da-camisa-no-card"
                    />
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="texto-roupas"
                    >
                      Camisa Santa Cruz Preta
                    </text>
                    <div className="card-body">
                      <p className="card-text">Apenas R$150,00 ou 3xR$50,00</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Detalhes
                          </button>
                          <button type="button" className="btn btn-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-cart-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                          </button>
                        </div>
                        <small className="text-muted">Frete grátis</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* FOOTER  */}
        <AppFooter />
      </div>
    </div>
  );
}
