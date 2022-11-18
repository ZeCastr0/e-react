import React from "react";
import InputProdutos from "../atoms/InputProdutos";
import AppNavbar from "../organisms/AppNavbar";
import AppTextProduct from "../molecules/AppTextProduct";
import CamisetaSantaCruz from "../../imgs/camisa santacruz.png.png";

export default function Product() {
  /* React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []); CONSUMINDO API */

  return (
    <div>
      <div>
        <AppNavbar />
      </div>

      <div className="informações-pag-produto">
        <img
          src={CamisetaSantaCruz}
          alt="Camiseta Santa Cruz"
          className="card"
        />
        <AppTextProduct />
        <InputProdutos />
      </div>
    </div>
  );
}
