import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AppModalLogin from "../AppModalLogin";

export default function Entrar() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Entrar
        </Button>
  
        <AppModalLogin
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  render(<Entrar />);