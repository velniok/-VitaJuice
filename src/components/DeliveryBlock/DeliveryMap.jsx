import React from 'react'

export default function DeliveryMap() {
  return (
    <div className="delivery__map">
        <h3 className="delivery__map-title">ЗОНА ДОСТАВКИ</h3>
            <ul className="delivery__price-list">
                <li className="delivery__price-item">
                    <span className="delivery__price-text delivery__price-text--yellow">
                        Минимальная сумма заказа 500 руб.
                    </span>
                </li>
                <li className="delivery__price-item">
                    <span className="delivery__price-text delivery__price-text--orange">
                        Минимальная сумма заказа 750 руб.
                    </span>
                </li>
                <li className="delivery__price-item">
                    <span className="delivery__price-text delivery__price-text--pink">
                        Минимальная сумма заказа 1000 руб.
                    </span>
                </li>
            </ul>
        <div className="delivery__map-content">
                                
        </div>
    </div>
  )
}
