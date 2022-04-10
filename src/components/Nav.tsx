import React from "react";
import Logo from "../assets/icons/logo.svg";

export default function Nav() {
  const [toggle, setToggle] = React.useState(false);
  const toggleNav = () => setToggle(prev => !prev);
  return (
    <>
      <button
        className={toggle ? "nav__btn--open" : "nav__btn--closed"}
        onClick={toggleNav}
      >
        {toggle ? "Close" : "Menu"}
      </button>
      <nav className={toggle ? "nav--open" : "nav--closed"}>
        <div className='nav__header'>
          <div className='nav__header__title'>
            <img src={Logo} />
            <span>Menu</span>
          </div>
          <button
            className={toggle ? "nav__btn--open" : "nav__btn--closed"}
            onClick={toggleNav}
          >
            {toggle ? "Close" : "Menu"}
          </button>
        </div>
        <ul className='nav__item-list'>
          <li>
            <a className='nav__item' href='#' onClick={toggleNav}>
              Welcome
            </a>
          </li>
          <li>
            <a className='nav__item' href='/#skills' onClick={toggleNav}>
              Skills
            </a>
          </li>
          <li>
            <a className='nav__item' href='/#projects' onClick={toggleNav}>
              Projects
            </a>
          </li>
          <li>
            <a className='nav__item' href='/#interests' onClick={toggleNav}>
              Intrests
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
