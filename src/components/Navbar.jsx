import { faBurger } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Navbar = () => {
    return (
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
    )
}

export default Navbar;