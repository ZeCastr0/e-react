import React from "react";

export default function Login() {
  return (
    <div
      className="modal modal-signin position-static d-block py-5 background-gray"
      tabIndex={-1}
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            {/* <h5 class="modal-title">Modal title</h5> */}
            <h2 className="fw-bold mb-0">Identifique-se</h2>
            <a href="index.html">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </a>
          </div>
          <div className="modal-body p-5 pt-0">
            <form className>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                ENTRAR
              </button>
              <small className="text-muted">
                Ao clicar em ENTRAR estará aceitando os Termos de uso.
              </small>
              <hr className="my-4" />
              <h2 className="fs-5 fw-bold mb-3">Ou entre com:</h2>
              <button
                className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                type="submit"
              >
                <svg className="bi me-1" width={16} height={16}>
                  <use xlinkHref="#twitter" />
                </svg>
                Sign up with Google
              </button>
              <button
                className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                type="submit"
              >
                <svg className="bi me-1" width={16} height={16}>
                  <use xlinkHref="#facebook" />
                </svg>
                Sign up with Facebook
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
