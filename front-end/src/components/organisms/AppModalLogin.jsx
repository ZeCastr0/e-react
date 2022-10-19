import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AppModalLogin(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Identifique-se
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body p-5 pt-0">
  <form className="">
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
  </form>
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }