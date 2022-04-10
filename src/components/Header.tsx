import React from "react";
import Nav from "./Nav";
import Logo from "../assets/icons/logo.svg";

export default function Header() {
  return (
    <header className='app-header'>
      <h1 className='app-header__title'>
        <img src={Logo} />
        Matthew Lefevre
      </h1>
      <Nav />
    </header>
  );
}
