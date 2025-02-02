import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Contant from './components/Contant'
import Brand from './components/Brand'
import Info from './components/Info'
import About from './components/About'
import News from './components/News'
import Footer from './components/Footer'
const App = () => {
  return (
  <>
 <div className='mb-15'>
 <Header />
 </div>
  <Hero />
  <Contant />
  <Brand />
  <Info />
  <About />
  <News />
  <Footer />
  </>
  )
}

export default App