import Delivery from "./components/DeliveryBlock";
import Footer from "./components/Footer";
import Header from "./components/HeaderBlock/index";
import Hero from "./components/HeroBlock/index";
import Loyalty from "./components/LoyaltyBlock";
import Popular from "./components/PopularBlock";
import Products from "./components/ProductsBlock";

export default function App() {
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
