import { useState } from "react"


export default function HeaderContacts() {

    const [circleShow, setCircleShow] = useState(0)

  return (
    <div className="header__contacts">
        <ul className="header__contacts-list">
            <li className="header__contacts-item">
                <a href="#!" className="header__contacts-link" onMouseEnter={() => setCircleShow(prev => prev = 1)} onMouseLeave={() => setCircleShow(prev => prev = 0)}>
                    О НАС
                </a>
                <div className={`header__contacts-circle ${circleShow === 1 ? 'show' : ''}`}></div>
            </li>
            <li className="header__contacts-item">
                <a href="#!" className="header__contacts-link" onMouseEnter={() => setCircleShow(prev => prev = 2)} onMouseLeave={() => setCircleShow(prev => prev = 0)}>
                    ФРАНШИЗА
                </a>
                <div className={`header__contacts-circle ${circleShow === 2 ? 'show' : ''}`}></div>
            </li>
            <li className="header__contacts-item">
            <a href="#!" className="header__contacts-link" onMouseEnter={() => setCircleShow(prev => prev = 3)} onMouseLeave={() => setCircleShow(prev => prev = 0)}>
                    КОНТАКТЫ
                </a>
                <div className={`header__contacts-circle ${circleShow === 3 ? 'show' : ''}`}></div>
            </li>
            <li className="header__contacts-item">
                <a href="#!" className="header__contacts-link" onMouseEnter={() => setCircleShow(prev => prev = 4)} onMouseLeave={() => setCircleShow(prev => prev = 0)}>
                    РАБОТА
                </a>
                <div className={`header__contacts-circle ${circleShow === 4 ? 'show' : ''}`}></div>
            </li>
        </ul>
    </div>
  )
}
