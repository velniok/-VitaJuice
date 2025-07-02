import React, { useEffect } from 'react'
import Hero from '../components/HeroBlock'
import Products from '../components/ProductsBlock'
import Popular from '../components/PopularBlock'
import Delivery from '../components/DeliveryBlock'
import Loyalty from '../components/LoyaltyBlock'
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
      <Hero />
      <Products />
      <Popular />
      <Delivery />
      <Loyalty />
    </>
  )
}
