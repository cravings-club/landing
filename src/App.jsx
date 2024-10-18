import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faImage } from "@fortawesome/free-solid-svg-icons"
import Footer from "./components/Footer"

function App() {

  return (
    <div className='bg-background flex flex-col items-center'>
      <div className="w-full min-h-screen flex flex-col">

        <Navbar/>
        <Hero/>

        <div className="w-full py-5 px-5 text-white bg-primary flex flex-row text-nowrap overflow-hidden"> 
          <h1 className="text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>

      </div>


      <div className="w-full h-screen py-10 bg-background flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center font-bold text-white">Plenty of resources to help <br/> your restaurant <span className="text-primary">succeed</span></h1>

        <div className="mt-20 w-8/12 grid grid-cols-2 gap-4">
          <div className="rounded-lg border-2 border-primary p-3 bg-white text-black">
            <div className="w-full h-36 rounded-lg bg-[#362c5d] flex items-center justify-center">
              <FontAwesomeIcon className="text-[#c3b2f6]" size='5x' icon={faImage}/>
            </div>

            <h1 className="pt-3 text-3xl font-bold">Lorem ipsum</h1>
            <p className="text-lg pt-2 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <button className="pt-2 flex flex-row items-center text-primary font-bold gap-2">
              Learn More
              <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
            </button>
          </div>

          <div className="rounded-lg border-2 border-primary p-3 bg-white text-black">
            <div className="w-full h-36 rounded-lg bg-[#362c5d] flex items-center justify-center">
              <FontAwesomeIcon className="text-[#c3b2f6]" size='5x' icon={faImage}/>
            </div>

            <h1 className="pt-3 text-3xl font-bold">Lorem ipsum</h1>
            <p className="text-lg pt-2 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <button className="pt-2 flex flex-row items-center text-primary font-bold gap-2">
              Learn More
              <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-white flex items-center justify-center">
      <svg className="animate-spin-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.92 291.56" height="150">
        <g>
            <path
            fill="#ff5925"
            d="M31.81,242.34l52.25-72.7L0,141.62,26.51,62.1l83.3,28.02V0h83.3v90.12l84.06-28.02,25.75,79.52-83.3,28.02,51.5,72.7-67.4,49.22-52.25-74.22-52.25,74.22-67.4-49.22Z"
            />
        </g>
      </svg>
      </div>

      <Footer/>
    </div>
  )
}

export default App
