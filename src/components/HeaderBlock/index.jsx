import HeaderContacts from "./HeaderContacts";
import HeaderMenu from "./HeaderMenu";
import HeaderTop from "./HeaderTop";
import logo from '../../assets/logo.png'
import { useEffect } from "react";
import HeaderBurger from "./HeaderBurger";
import { Link } from "react-router";


export default function Header() {

  return (
    <header className="header">
        <div className="container">
            <div className="header-wrapper">
                <HeaderTop />
                <nav className="header__nav">
                    <HeaderMenu />
                    <HeaderContacts />
                </nav>
                <Link to="/-VitaJuice">
                  <img src={logo} alt="Vita Juice" className="header__logo" />
                </Link>
                <HeaderBurger />
            </div>
        </div>
    </header>
  )
}