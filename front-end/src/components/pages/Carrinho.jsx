import React from "react";
import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";

import { useNavigate } from "react-router-dom";
import AppLoading from "../organisms/AppLoading";

export default function Carrinho() {
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
      {/* Main*/}
      <div className="container">
        <main>
          {/* <div class="lista-carrinho">
  <span id="close">Fechar</span>
    </div> 
    *div do carrinhno para quando tiver o JSon*
  
  */}
          <section>
            <hr className="my-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  defaultChecked
                  required
                />
                <label className="form-check-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder
                  required
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>
            <hr className="my-4" />
          </section>
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </main>
      </div>
      {/* FOOTER  */}
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017–2022 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
      <AppFooter />
    </div>
  );
}
