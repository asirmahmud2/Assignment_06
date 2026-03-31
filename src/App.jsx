import './App.css'
import Getstarted from './Components/Homepage/Details/Getstarted'
import Pricing from './Components/Homepage/Details/Pricing'
import Hero from './Components/Homepage/Hero/Hero'
import Rating from './Components/Homepage/Hero/Rating'
import Navbar from './Components/Homepage/Navbar/Navbar'

function App() {

  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Rating></Rating>
        <Getstarted></Getstarted>
        <Pricing></Pricing>
    </>
  )
}

export default App
