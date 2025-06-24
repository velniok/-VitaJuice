import React from 'react'
import icon01 from '../../assets/loyalty/info-icon-01.svg'
import icon02 from '../../assets/loyalty/info-icon-02.svg'
import icon03 from '../../assets/loyalty/info-icon-03.svg'

export default function LoyaltyInfo() {
  return (
    <div className="loyalty__info">
        <h3 className="loyalty__info-title">С КАРТОЙ ВЫ ПОЛУЧАЕТЕ</h3>
        <ul className="loyalty__list">
            <li className="loyalty__list-item">
                <img src={icon01} alt="Телефон" className="loyalty__list-icon" />
                <p className="loyalty__list-desc">Всегда рядом в вашем телефоне</p>
            </li>
            <li className="loyalty__list-item">
                <img src={icon02} alt="Акции" className="loyalty__list-icon" />
                <p className="loyalty__list-desc">Участвуй в акциях и получай подарки</p>
            </li>
            <li className="loyalty__list-item">
                <img src={icon03} alt="Напитки" className="loyalty__list-icon" />
                <p className="loyalty__list-desc">Каждый 5-й напиток бесплатно</p>
            </li>
        </ul>
        <div className="loyalty__apply">
            <h3 className="loyalty__apply-title">ХОТИТЕ ОФОРМИТЬ?</h3>
            <button className="loyalty__apply-btn btn--yellow">ПОЛУЧИТЬ</button>
        </div>
    </div>
  )
}
