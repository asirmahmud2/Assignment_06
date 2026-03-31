import { Suspense } from 'react'
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

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Getstarted></Getstarted>
      <Pricing></Pricing>
      <Suspense>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
