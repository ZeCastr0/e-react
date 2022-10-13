import React from "react";

export default function Home() {
  return (
    <div>
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
      {/* FOOTER  */}
      <div className="container background-black">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-color-titles">Navegue pelo site</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-color-itens ">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-color-itens ">
                    Camisetas
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-color-itens ">
                    Camisas Longas
                  </a>
                </li>
                <li className=" nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-color-itens ">
                    Regastas
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="login.html"
                    className="nav-link p-0 text-color-itens "
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-color-titles">Fale conosco</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-color-itens ">
                    (xx)xxxxx-xxxx
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-color-itens ">
                    Email: prostayle@gmail.com
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-color-itens ">
                    Endereço: Av. Tal n⁰XXXX - SP - BR
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 className="text-color-titles">
                  Quer ficar por dentro das ofertas?
                </h5>
                <p className=" text-color-titles">
                  Inscrevas-se para enviarmos nossas ofertas semanais
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email{" "}
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Inscreva-se
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="text-color-itens">© 2022 ProStyle</p>
            <ul className=" list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-ligh" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-ligh" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-ligh" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      {/* JavaScript Bundle with Popper */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      />
    </div>
  );
}
