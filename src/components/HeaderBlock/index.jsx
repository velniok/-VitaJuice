import HeaderContacts from "./HeaderContacts";
import HeaderMenu from "./HeaderMenu";
import HeaderTop from "./HeaderTop";
import logo from '../../assets/logo.png'
import { useEffect } from "react";
import HeaderBurger from "./HeaderBurger";


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
                <img src={logo} alt="Vita Juice" className="header__logo" />
                <HeaderBurger />
            </div>
        </div>
    </header>
  )
}