import React from "react";

export default function AppFooter() {
  return (
    <div>
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
    </div>
  );
}
