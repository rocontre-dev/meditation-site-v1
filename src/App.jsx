import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import TheVoidPage from './pages/TheVoidPage'
import MeditationPage from './pages/MeditationPage'
import RetreatsPage from './pages/RetreatsPage'
import PodcastPage from './pages/PodcastPage'
import FabrizioPage from './pages/FabrizioPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="the-void" element={<TheVoidPage />} />
        <Route path="meditation" element={<MeditationPage />} />
        <Route path="retreats" element={<RetreatsPage />} />
        <Route path="podcast" element={<PodcastPage />} />
        <Route path="fabrizio" element={<FabrizioPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Legacy route redirects */}
        <Route path="about" element={<Navigate to="/fabrizio" replace />} />
        <Route path="services" element={<Navigate to="/meditation" replace />} />
        <Route path="resources" element={<Navigate to="/podcast" replace />} />
        <Route path="bookings" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App