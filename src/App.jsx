import { Suspense, useState } from 'react'
import './App.css'
import Getstarted from './Components/Homepage/Details/Getstarted'
import Pricing from './Components/Homepage/Details/Pricing'
import Hero from './Components/Homepage/Hero/Hero'
import Rating from './Components/Homepage/Hero/Rating'
import Navbar from './Components/Homepage/Navbar/Navbar'
import Products from './Components/Homepage/Products/Products'

const fetchPlayer = async () => {
  const res = await fetch("/product.json");
  return res.json();
}

function App() {
  const productsPromise = fetchPlayer();
  const [addCart, setaddCart] = useState([]);

  return (
    <>
      <Navbar addCart={addCart}></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Getstarted></Getstarted>
      <Pricing></Pricing>
      <Suspense>
        <Products productsPromise={productsPromise} setaddCart={setaddCart} addCart={addCart}></Products>
      </Suspense>
    </>
  )
}

export default App
