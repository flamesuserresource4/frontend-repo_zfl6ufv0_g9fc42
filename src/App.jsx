import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/Services'
import About from './pages/About'
import Projects from './pages/Projects'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Policies from './pages/Policies'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policies" element={<Policies />} />
    </Routes>
  )
}

export default App
