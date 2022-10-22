import React from "react";
import AppNavbar from "../organisms/AppNavbar";
import AppTextProduct from "../molecules/AppTextProduct";

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

      <div className="justify-content">
        <div>
          <img
            src={CamisetaSantaCruz}
            alt="Camiseta Santa Cruz"
            className="card"
          />
        </div>

        <div className="float-right">
          <AppTextProduct />
        </div>
      </div>
    </div>
  );
}
