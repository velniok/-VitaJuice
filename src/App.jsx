import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Header from "./components/HeaderBlock";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {

  const [doAddToCart, setDoAddToCart] = useState(0)
  const [categoryId, setCategoryId] = useState(0)

  const addToCart = (id, categoryId) => {
    setDoAddToCart(prev => prev = id)
    setCategoryId(prev => prev = categoryId)
  } 

  return (
    <>
    <Header doAddToCart={doAddToCart} categoryId={categoryId} />
    <div className="main">
      <Routes>
        <Route path="/-VitaJuice" element={<Home />} />
        <Route path="/-VitaJuice/category/:categoryName" element={<Category addToCart={addToCart} />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}
