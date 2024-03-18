import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Delivery from './components/Delivery'
import TopPicks from './components/TopPicks'
import Meal from './components/Meal'
import Categories from './components/Categories'
import Footer from './components/Footer'
import NewsLetter from './components/Newsletter'
import { BrowserRouter,RouterProvider, createBrowserRouter } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: "/MyAccount",
      element: <Meal/>
    },
    {
      path: "/Delivery",
      element:<Delivery/> 
    }
  ])

  return (
    <>
      <div>
      </div>
      <Navbar/>
      <Hero/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
