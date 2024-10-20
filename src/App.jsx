import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Skills from './pages/skills/Skills'
import Themes from './components/Themes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Themes />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="projects" element={<Projects/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="skills" element={<Skills/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
