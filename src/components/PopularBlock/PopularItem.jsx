import React from 'react'

export default function PopularItem({ item, pos }) {
  return (
    <li className="popular__card-item" style={{ transform: `translateX(-${pos}%)` }}>
        <img src={item.img} alt={item.title} className="popular__card-img" />
        <h3 className="popular__card-title">{item.title}</h3>
        <span className="popular__card-size">{item.size} мл</span>
        <div className="popular__card-wrapper">
            <span className="popular__card-price">{item.price}₽</span>
            <svg className="popular__card-like" width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17 26.9375L5.08662 16.0104C-7.23887 4.70634 12.1976 -4.57492 17 5.39958C21.8024 -4.57492 41.2388 4.70634 28.9134 16.0104L17 26.9375Z" stroke="#2B2A29" strokeWidth="2" strokeMiterlimit="22.9256" />
            </svg>
        </div>
        <button className="popular__card-btn btn--yellow">В КОРЗИНУ</button>
    </li>
  )
}
