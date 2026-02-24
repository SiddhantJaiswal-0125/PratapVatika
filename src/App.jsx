import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import SlidingBanner from './components/SlidingBanner'
import Intro from './components/Intro'
import HeroGalleryGrid from './components/HeroGalleryGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <SlidingBanner />
            <Intro />
            <HeroGalleryGrid />
            <Testimonials />
          </>
        } />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
