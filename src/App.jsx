import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Resources from "./components/Resources"
import Features from "./components/Features"
import Companies from "./components/Companies"
import Pricing from "./components/Pricing"

function App() {

  return (
    <div className='bg-background flex flex-col items-center'>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar/>
        <Hero/>
        <Companies/>
      </div>

      <Resources/>
      <Pricing/>     
      <Features/>
      <Footer/>
    </div>
  )
}

export default App
