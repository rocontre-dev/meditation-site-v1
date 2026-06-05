import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import OnlineCourse from './sections/OnlineCourse'
import Community from './sections/Community'
import Retreats from './sections/Retreats'
import Reprogramming from './sections/Reprogramming'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OnlineCourse />
        <Community />
        <Retreats />
        <Reprogramming />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App