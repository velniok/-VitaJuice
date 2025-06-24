import React, { useState } from 'react'
import PopularItem from './PopularItem'

export default function Popular() {

    const popularCards = [
        {
            id: 1,
            img: './img/popular/popular-card-01.png',
            title: 'ЛАССИ',
            size: '500',
            price: '375',
        },
        {
            id: 2,
            img: './img/popular/popular-card-02.png',
            title: 'МИКС',
            size: '500',
            price: '400',
        },
        {
            id: 3,
            img: './img/popular/popular-card-03.png',
            title: 'БОУЛ',
            size: '500',
            price: '450',
        },
        {
            id: 4,
            img: './img/popular/popular-card-01.png',
            title: 'ЛАССИ',
            size: '500',
            price: '375',
        },
        {
            id: 5,
            img: './img/popular/popular-card-02.png',
            title: 'МИКС',
            size: '500',
            price: '400',
        },
        {
            id: 6,
            img: './img/popular/popular-card-03.png',
            title: 'БОУЛ',
            size: '500',
            price: '450',
        },
    ]

    const [activeSlider, setActiveSlider] = useState(0)

  return (
    <section className="popular">
        <h1 className="populat-title title">ХИТЫ ПРОДАЖ</h1>
        <div className="container">
            <div className="popular-wrapper">
                <div className="popular__card">
                    <ul className="popular__card-list">
                        {
                            popularCards.map(obj => {
                                let pos = activeSlider * 105
                                return <PopularItem item={obj} pos={pos} key={obj.id} />
                            })
                        }
                    </ul>
                </div>
                <button className={`popular__card-btn--prev btn--arrow ${activeSlider === 0 ? 'disable' : ''}`} onClick={() => {
                    if (activeSlider !== 0) {
                        setActiveSlider(prev => prev - 1)
                    }
                }}>
                    <svg width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2725 0.469277C19.9863 -0.244507 21.1283 -0.101749 21.8421 0.612034C22.4131 1.32582 22.4131 2.46787 21.6994 3.18165L5.1396 17.4573L21.6994 31.8757C22.4131 32.4467 22.4131 33.5888 21.8421 34.4453C21.1283 35.1591 19.9863 35.1591 19.2725 34.5881L1.14242 18.8849C0.28588 18.1711 0.285879 16.8863 1.14242 16.1725L19.2725 0.469277Z" fill="#2B2A29" />
                    </svg>
                </button>
                <button className={`popular__card-btn--next btn--arrow ${activeSlider === popularCards.length - 3 ? 'disable' : ''}`} onClick={() => {
                    if (activeSlider < popularCards.length - 3) {
                        setActiveSlider(prev => prev + 1)
                    }
                }}>
                    <svg width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.72763 0.469277C3.01385 -0.244507 1.87179 -0.101749 1.15801 0.612034C0.586986 1.32582 0.586986 2.46787 1.30077 3.18165L17.8605 17.4573L1.30077 31.8757C0.586983 32.4467 0.586983 33.5888 1.15801 34.4453C1.87179 35.1591 3.01384 35.1591 3.72763 34.5881L21.8577 18.8849C22.7142 18.1711 22.7142 16.8863 21.8577 16.1725L3.72763 0.469277Z" fill="#2B2A29" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
  )
}
