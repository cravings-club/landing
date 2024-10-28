import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Features = () => {
    return (
        <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
            <h1 className="text-black font-bold text-5xl text-center">The features you need to help <br/><span className="text-primary">grow</span> your restaurant</h1>

            <div className="mt-20 w-8/12 grid grid-cols-2 gap-4">
            
            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Customer Insights</h1>
                <p className="text-lg pt-2 flex-grow">Learn more about your customers than ever before with data analytics tools curated for your business.</p>

                <button className="py-4 flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Customer Insights</h1>
                <p className="text-lg pt-2 flex-grow">Learn more about your customers than ever before with data analytics tools curated for your business.</p>

                <button className="py-4 flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Customer Insights</h1>
                <p className="text-lg pt-2 flex-grow">Learn more about your customers than ever before with data analytics tools curated for your business.</p>

                <button className="py-4 flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Customer Insights</h1>
                <p className="text-lg pt-2 flex-grow">Learn more about your customers than ever before with data analytics tools curated for your business.</p>

                <button className="py-4 flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            </div>
        </div>
    )
}

export default Features;