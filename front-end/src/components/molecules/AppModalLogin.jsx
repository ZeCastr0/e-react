import * as React from "react";
// import React { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseButton from "../atoms/CloseButton";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// <<<<<<< HEAD
// export default function initialState() {
//   return { user: "", password: "" };
// }
// const UserLogin = () => {
//   const [values, setValues] = useState(initialState);

//   function onChange(event) {
//     const { value, name } = event.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   }
// };
// =======
/* React.useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {   
      });
  }, []); CONSUMINDO API */
// >>>>>>> 6300a91027998c64462ab517de7d645a25f9bd80

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="enter-button border-radius">
        <Button
          onClick={handleOpen}
          className="text-color-titles"
          variant="contained"
        >
          Entrar
        </Button>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="border-radius">
          <div className="X">
            <Button variant="outline-dark" onClick={handleClose}>
              <CloseButton />
            </Button>
          </div>
          <h1
            id="modal-modal-title"
            className="align-items-center"
            variant="h6"
            component="h2"
          >
            Identifique-se
          </h1>
          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  // onChange={onChange}
                  // value={values.user}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                  // onChange={onChange}
                  // value={values.password}
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
        </Box>
      </Modal>
    </div>
  );
}
