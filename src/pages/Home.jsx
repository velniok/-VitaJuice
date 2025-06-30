import React, { useEffect } from 'react'
import Header from '../components/HeaderBlock'
import Hero from '../components/HeroBlock'
import Products from '../components/ProductsBlock'
import Popular from '../components/PopularBlock'
import Delivery from '../components/DeliveryBlock'
import Loyalty from '../components/LoyaltyBlock'
import Footer from '../components/Footer'
import { useLocation } from 'react-router'

export default function Home() {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return (
    <>
        <Header />
        <main className="main">
            <Hero />
            <Products />
            <Popular />
            <Delivery />
            <Loyalty />
        </main>
        <Footer />
    </>
  )
}
