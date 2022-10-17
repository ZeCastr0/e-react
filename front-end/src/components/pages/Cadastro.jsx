import React from "react";
import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";

import { useNavigate } from "react-router-dom";
import AppLoading from "../organisms/AppLoading";

import logoCadastro from "../../imgs/Logo ProStyle/09.jpeg";

export default function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div>
      {/* Header */}
      <AppHeader />
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
      {/*Main */}
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src={logoCadastro}
              alt="Logo da ProStyle"
              width={100}
              height={100}
            />
            <h2>Cadastre-se</h2>
            <p className="lead">
              Faça o cadastro para ficar por dentro de tudo e comprar com mais
              agilidade nas proximas vezes!
            </p>
          </div>
          <div>
            {/* Identificaçao */}
            <h4 className="mb-3">Indentificação</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    Primeiro Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder
                    defaultValue
                    required
                  />
                  <div className="invalid-feedback">
                    Primeiro nome é necessário.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder
                    defaultValue
                    required
                  />
                  <div className="invalid-feedback">
                    Sobrenome name é necessário.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Nome de Usuario
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div className="invalid-feedback">
                      Nome de Usuario é necessário.
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        Crie uma senha
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="password"
                          className="form-control"
                          id="username"
                          placeholder="Password"
                          required
                        />
                        <div className="invalid-feedback">
                          Senha é necessário.
                        </div>
                        <div className="col-12">
                          <label htmlFor="password" className="form-label">
                            Confirme sua senha
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="password"
                              className="form-control"
                              id="username"
                              placeholder="Password"
                              required
                            />
                            <div className="invalid-feedback">
                              Confirme sua senha é necessário.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-muted">(Optional)</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="you@example.com"
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address for shipping
                            updates.
                          </div>
                        </div>
                        {/* LOCAL */}
                        <div className="col-md-12">
                          <label htmlFor="zip" className="form-label">
                            CEP
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            size={12}
                            id="txtCep"
                            name="txtCep"
                            onblur="fnBuscaCep(this.value)"
                            style={{ width: "25%" }}
                            placeholder="Escreva seu CEP"
                          />
                          <div className="invalid-feedback">
                            CEP code required.
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="state" className="form-label">
                            Bairro
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            size={12}
                            id="txtBairro"
                            name="txtBairro"
                            onblur="fnBuscaCep(this.value)"
                            style={{ width: "50%" }}
                            placeholder="Nome do seu Bairro"
                          />
                          <div className="invalid-feedback">
                            Selecione um estado valido.
                          </div>
                          <div className="col-md-12">
                            <label htmlFor="state" className="form-label">
                              Estado
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              size={12}
                              id="txtUF"
                              name="txtUF"
                              onblur="fnBuscaCep(this.value)"
                              placeholder="Escreva o nome do seu Estado."
                            />
                            <div className="invalid-feedback">
                              Selecione um estado valido.
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="address" className="form-label">
                              Endereço
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="txtEndereco"
                              name="txtendereço"
                              placeholder="Escreva o noem da sua rua."
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your shipping address.
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="address2" className="form-label">
                              Número Residêncial
                              <span className="text-muted" />
                            </label>
                            <input
                              type="numer"
                              className="form-control"
                              id="address2"
                              style={{ width: "90px" }}
                            />
                            <label htmlFor="address2" className="form-label">
                              Ponto de Referência{" "}
                              <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address2"
                              placeholder="Casa, Apartamento, Casa dos fundos..."
                            />
                          </div>
                        </div>
                      </div>
                      {/* Caixas de aceites */}
                      <hr className="my-4" />
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="aceite-receber-ofertas"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="aceite-receber-ofertas"
                        >
                          Aceito receber as ofertas no email
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="save-info"
                        />
                        <label className="form-check-label" htmlFor="save-info">
                          Salve esta informação para a próxima vez
                        </label>
                      </div>
                      <hr className="my-4" />
                      <button
                        className="w-100 btn btn-primary btn-lg"
                        type="submit"
                      >
                        Confirmar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
        {/* Footer */}
        <AppFooter />
      </div>
    </div>
  );
}
