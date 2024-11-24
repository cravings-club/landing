import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Features = () => {
    return (
        <div id='features' className="w-full h-screen bg-white flex flex-col items-center justify-center">
            <h1 className="text-black font-bold text-5xl text-center">The features you need to help <br/><span className="text-primary">grow</span> your restaurant</h1>

            <div className="mt-20 w-8/12 grid grid-cols-2 gap-4">
            
            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Customer Insights</h1>
                <p className="text-lg pt-2 flex-grow">Learn more about your customers than ever before with data analytics tools curated for your business.</p>

                <button className="mb-4 bg-primary/20 mt-4 py-1 px-4 rounded-lg flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Reward Programs</h1>
                <p className="text-lg pt-2 flex-grow">Develop custom loyalty reward programs for your customers to promote returning customers.</p>

                <button className="mb-4 bg-primary/20 mt-4 py-1 px-4 rounded-lg flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Mobile App</h1>
                <p className="text-lg pt-2 flex-grow">On our mobile app users can discover your restaurant and leave a review, helping you get more customers.</p>

                <button className="mb-4 bg-primary/20 mt-4 py-1 px-4 rounded-lg flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            <div className="rounded-lg border-2 border-inactive px-4 bg-alt-background text-white">
                <h1 className="pt-4 text-3xl font-bold">Collaboration</h1>
                <p className="text-lg pt-2 flex-grow">Have a big team? Don't worry you'll be able to invite them to your dashboard and allow everyone to manage your business profile.</p>

                <button className="mb-4 bg-primary/20 mt-4 py-1 px-4 rounded-lg flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                Learn More
                <FontAwesomeIcon className="text-primary" size='lg' icon={faArrowRight}/>
                </button>
            </div>

            </div>
        </div>
    )
}

export default Features;