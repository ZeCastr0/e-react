import React from "react";
import { useNavigate } from "react-router-dom";
import AppLoading from "../organisms/AppLoading";

export default function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  /* React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []); CONSUMINDO API */

  return isLoading ? <AppLoading /> : <div> oi</div>;
}
