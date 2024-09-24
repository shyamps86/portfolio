import React from 'react'
import Header from './components/header'
import SocialMedia from './components/socilaMedia'
import About from './components/aboutPage'
import Description from './components/description'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact';

const App = () => {
  return (

    <div className='bg-gradient-to-r from-slate-500 via-slate-900 to-gray-900 text-white'>

      <div className='mx-auto max-w-screen-lg '>

        <Header />

        <SocialMedia />

        <About />

        <Description />

        <Projects />
        <Skills />

        <Contact />
      </div>
    </div>
  )
}

export default App