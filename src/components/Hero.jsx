import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hero = () => {
    return (
        <div className="px-20 w-full bg-white flex flex-row flex-grow items-center min-h-full">
            <div className="flex flex-col">
            <h1 className="text-6xl font-bold">A Loyalty Program</h1>
            <h1 className="text-5xl font-bold">for <span className="text-primary">YOUR</span> restaurant</h1>

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
    );
}

export default Hero;
