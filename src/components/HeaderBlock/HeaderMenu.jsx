import { Link } from "react-router";


export default function HeaderMenu() {
  return (
    <div className="header__menu">
        <ul className="header__menu-list">
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/juices" className="header__menu-link header__menu-link--orange01">
                    СОКИ
                </Link>
            </li>
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/mixes" className="header__menu-link header__menu-link--yellow">
                    МИКСЫ
                </Link>
            </li>
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/smoothie" className="header__menu-link header__menu-link--pink01">
                    СМУЗИ
                </Link>
            </li>
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/lassi" className="header__menu-link header__menu-link--pink02">
                    ЛАССИ
                </Link>
            </li>
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/detox" className="header__menu-link header__menu-link--orange02">
                    ДЕТОКС
                </Link>
            </li>
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/bowls" className="header__menu-link header__menu-link--purple">
                    БОУЛЫ
                </Link>
            </li>
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/salads" className="header__menu-link header__menu-link--green01">
                    САЛАТЫ
                </Link>
            </li>
            <li className="header__menu-item">
                <Link to="/-VitaJuice/category/healthy-food" className="header__menu-link header__menu-link--green02">
                    ЗДОРОВАЯ ЕДА
                </Link>
            </li>
        </ul>
    </div>
  )
}
