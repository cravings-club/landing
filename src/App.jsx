import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Resources from "./components/Resources"
import Features from "./components/Features"
import Companies from "./components/Companies"

function App() {

  return (
    <div className='bg-background flex flex-col items-center'>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar/>
        <Hero/>
        <Companies/>
      </div>
      
      <Resources/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App
