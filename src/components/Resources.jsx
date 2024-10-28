import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faImage } from "@fortawesome/free-solid-svg-icons"

const Resources = () => {
    return (
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
    )
}

export default Resources;