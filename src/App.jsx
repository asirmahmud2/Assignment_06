import { Suspense, useState } from 'react'
import './App.css'
import Getstarted from './Components/Homepage/Details/Getstarted'
import Pricing from './Components/Homepage/Details/Pricing'
import Hero from './Components/Homepage/Hero/Hero'
import Rating from './Components/Homepage/Hero/Rating'
import Navbar from './Components/Homepage/Navbar/Navbar'
import Products from './Components/Homepage/Products/Products'
import Join from './Components/Homepage/Details/Join'
import Footer from './Components/Homepage/Details/Footer'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async () => {
  const res = await fetch("/product.json");
  return res.json();
}
const productsPromise = fetchPlayer();

function App() {
  const [addCart, setaddCart] = useState([]);

  return (
    <>
      <Navbar addCart={addCart}></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Suspense>
        <Products productsPromise={productsPromise} setaddCart={setaddCart} addCart={addCart}></Products>
      </Suspense>
      <Getstarted></Getstarted>
      <Pricing></Pricing>
      <Join></Join>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
