import React from "react";
import AppNavbar from "../organisms/AppNavbar";
import AppCards from "../organisms/AppCards";

export default function Home() {
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

      <div>
        <AppCards />
      </div>
    </div>
  );
}
