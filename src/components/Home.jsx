import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  )
}
