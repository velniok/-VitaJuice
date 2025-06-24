import React from 'react'
import logo from '../../assets/loyalty/loyalty-logo.png'
import img from '../../assets/loyalty/loyalty-img.png'
import qrcode from '../../assets/loyalty/loyalty-qrcode.png'

export default function LoyaltyCard() {
  return (
    <div className="loyalty__card">
        <div className="loyalty__card-top">
            <div className="loyalty__logo">
                <img src={logo} alt="Лого" className="loyalty__logo-img" />
                <span className="loyalty__logo-text">ВИТА ДЖУС</span>
            </div>
            <div className="loyalty__wallet">
                <span className="loyalty__wallet-text">БАЛАНС</span>
                <span className="loyalty__wallet-balance">500</span>
            </div>
        </div>
        <img src={img} alt="" className="loyalty__card-img" />
        <div className="loyalty__owner">
            <h3 className="loyalty__owner-title">ВЛАДЕЛЕЦ</h3>
            <span className="loyalty__owner-name">Имя Фамилия</span>
        </div>
        <img src={qrcode} alt="QR-Code" className="loyalty__card-qrcode" />
    </div>
  )
}
