import React, { useEffect } from 'react'
import CategoryBlock from '../components/CategoryBlock'
import { useLocation } from 'react-router'

export default function Category({ addToCart }) {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return (
    <>
      <CategoryBlock addToCart={addToCart} />
    </>
  )
}
