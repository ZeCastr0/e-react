// juntar tudo aqui!!!

import React from "react";
import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";
import AppCards from "../organisms/AppCards";
import AppCarrosel from "../organisms/AppCarrosel";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {/* Header */}
        <AppHeader />
        {/*Carrosel */}
        <div>
          <AppCarrosel />
          {/* PRODUTOS*/}
          <AppCards />
        </div>
        {/* FOOTER  */}
        <AppFooter />
      </div>
    </div>
  );
}
