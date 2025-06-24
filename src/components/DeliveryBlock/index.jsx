import React from 'react'
import DeliveryMap from './DeliveryMap'
import DeliveryBottom from './DeliveryBottom'
import img from '../../assets/delivery/delivery-img.png'

export default function Delivery() {
  return (
    <section className="delivery">
        <h1 className="delivery-title title">ДОСТАВКА И ОПЛАТА</h1>
        <div className="delivery-wrapper">
            <div className="container">
                <div className="delivery-inner">
                    <div className="delivery__content">
                        <DeliveryMap />
                        <DeliveryBottom />
                    </div>
                    <img src={img} alt="Быстро и бесплатно" className="delivery__img" />
                </div>
            </div>
        </div>
    </section>
  )
}
