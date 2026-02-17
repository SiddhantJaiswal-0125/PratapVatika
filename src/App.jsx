import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import HeroGalleryGrid from './components/HeroGalleryGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import EventsPage from './pages/EventsPage'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Intro />
            <HeroGalleryGrid />
            <Testimonials />
          </>
        } />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
