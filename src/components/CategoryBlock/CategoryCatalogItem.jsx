import React from 'react'
import bonusIcon from '../../assets/category/bonus-icon.svg'

export default function CategoryCatalogItem({ item }) {
  return (
    <li className="catalog__card-item">
        {
            item.bonus !== "0" && (
                <div className="catalog__bonus">
                    <span className="catalog__bonus-text">+{item.bonus} б</span>
                    <img src={bonusIcon} alt="bonus" className="catalog__bonus-icon" />
                </div>
        )
        }
        <img src={item.img} alt={item.title} className="catalog__card-img" />
        <h3 className="catalog__card-title">{item.title}</h3>
        <span className="catalog__card-size">{item.size} мл</span>
        <div className="catalog__card-bottom">
            <span className="catalog__card-price">{item.price}₽</span>
            <div className="catalog__card-like">
                <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0005 26.9375L5.08711 16.0104C-7.23838 4.70634 12.198 -4.57492 17.0005 5.39958C21.8029 -4.57492 41.2393 4.70634 28.9138 16.0104L17.0005 26.9375Z" stroke="#2B2A29" strokeWidth="2" strokeMiterlimit="22.9256" />
                </svg>
            </div>
        </div>
        <button className="catalog__card-btn btn--yellow">В КОРЗИНУ</button>
    </li>
  )
}
