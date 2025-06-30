import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/-VitaJuice" element={<Home />} />
        <Route path="/-VitaJuice/category/:categoryName" element={<Category />} />
      </Routes>
    </>
  )
}
