import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Collection from "./Pages/Collection"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import PlaceOrder from "./Pages/PlaceOrder"
import Orders from "./Pages/Orders"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>

  )
}

export default App