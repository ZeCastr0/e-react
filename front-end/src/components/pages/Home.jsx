import React from "react";
import AppNavbar from "../organisms/AppNavbar";
import AppCards from "../organisms/AppCards";
import Carousel from "../organisms/Carousel";
import Footer from "../organisms/Footer";

/* React.useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {   
      });
  }, []); CONSUMINDO API */

export default function Home() {
  return (
    <div>
      <div>
        <AppNavbar />
      </div>

      <div>
        <Carousel />
      </div>

      <div>
        <AppCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
