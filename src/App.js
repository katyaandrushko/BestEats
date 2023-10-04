import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <div className="bg-primary w-full overflow-hidden">
        <div className={`container mx-auto`}>
          <div className={`xl:max-w-[1980px] w-full`}>
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
