import React from 'react'
import LoyaltyCard from './LoyaltyCard'
import LoyaltyInfo from './LoyaltyInfo'

export default function Loyalty() {
  return (
    <section className="loyalty">
        <h1 className="loyalty-title title">НАША СИСТЕМА ЛОЯЛЬНОСТИ</h1>
        <div className="container">
            <div className="loyalty-wrapper">
                <LoyaltyCard />
                <LoyaltyInfo />
            </div>
        </div>
    </section>
  )
}
