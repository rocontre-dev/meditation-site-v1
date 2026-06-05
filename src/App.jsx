import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import OnlineCourse from './sections/OnlineCourse'
import Community from './sections/Community'
import Retreats from './sections/Retreats'
import Reprogramming from './sections/Reprogramming'
import Resources from './sections/Resources'
import Bookings from './sections/Bookings'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OnlineCourse />
        <Community />
        <Retreats />
        <Reprogramming />
        <Resources />
        <Bookings />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
