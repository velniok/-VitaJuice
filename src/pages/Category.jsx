import React, { useEffect } from 'react'
import Header from '../components/HeaderBlock'
import Footer from '../components/Footer'
import CategoryBlock from '../components/CategoryBlock'
import { useLocation } from 'react-router'

export default function Category() {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return (
    <>
        <Header />
        <CategoryBlock />
        <Footer />
    </>
  )
}
