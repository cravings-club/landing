import { faArrowRight, faBurger, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {

  return (
    <div className='bg-background flex flex-col items-center min-h-screen'>
      <div className="w-full border-b border-dashed border-zinc-700 py-5">
        <div className="px-20 w-full flex flex-row justify-between">
            <button className='flex flex-row items-center gap-2'>
                <FontAwesomeIcon className='text-primary' size='2x' icon={faBurger}/>
                <span className='text-white text-3xl font-bold'>Cravings Club</span>
            </button>

            <div className="flex flex-row items-center gap-6 underline-offset-4">
                <button className='text-white font-semibold hover:underline decoration-primary'>About</button>
                <button className='text-white font-semibold hover:underline decoration-primary'>Features</button>
                <button className='text-white font-semibold hover:underline decoration-primary'>Pricing</button>
                <div className="flex flex-row items-center border-l border-zinc-700 border-dashed gap-6">
                    <a href="https://dashboard.cravings.club/" className='text-white font-semibold ml-6 hover:underline decoration-primary'>Log In</a>
                    <a href="https://dashboard.cravings.club/register" className='font-semibold rounded-lg hover:bg-hover bg-primary px-3 py-1'>Get Started</a>
                </div>
            </div>
        </div>
      </div>

      <div className="px-20 w-full bg-white flex flex-row flex-grow items-center">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold">A Loyalty Program</h1>
          <h1 className="text-5xl font-bold">For <span className="text-primary">Your</span> Business</h1>

          <span className="py-3 font-light">Gain insight and provide your customers with a loyalty <br/> program that suits your needs.</span>

          <a href="https://dashboard.cravings.club/register" className="text-2xl text-white font-bold rounded-lg hover:bg-hover gap-3 bg-primary px-4 py-2 flex flex-row justify-center items-center">
            Get Started
            <FontAwesomeIcon className='' size='lg' icon={faArrowRight}/>
          </a>

          <div className="flex flex-row items-center mt-5">
            <FontAwesomeIcon className="text-primary" size='1x' icon={faCheckCircle}/>
            <span className="ml-3 text-lg">1,000+ Businsses</span>
          </div>
          <div className="flex flex-row items-center">
            <FontAwesomeIcon className="text-primary" size='1x' icon={faCheckCircle}/>
            <span className="ml-3 text-lg">Completely Customizable</span>
          </div>
        </div>
      </div>

      <div className="w-full py-5 px-5 text-white bg-primary flex flex-row text-nowrap overflow-hidden"> 
        <h1 className="text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>

    </div>
  )
}

export default App
