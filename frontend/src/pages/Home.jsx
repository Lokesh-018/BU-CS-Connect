import React from 'react'
import Feedback from '../components/Feedback'
import Blog from '../components/Blog'
import Features from '../components/Features'
import About from '../components/About'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Features/>
            <Blog />
            <Feedback />
        </div>
    )
}

export default Home
