import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Pricing = () => {
    return (
        <div id='pricing' className="w-full h-screen bg-primary flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-5xl text-center">The most affordable prices in the entire <br/><span className="text-black">industry</span></h1>

            <div className="flex flex-row mt-20 w-9/12 gap-4">
                <div className="bg-white rounded-lg flex flex-col w-1/3 p-5">
                    <h1 className="text-black font-bold text-3xl items-center flex flex-row">Free</h1>
                    <p className="font-light h-1/6">A plan for your (really) small shop..</p>
                    <h1 className="mt-4 text-3xl font-bold">$0 <span className="text-sm">USD</span></h1>
                    <p className="font-light">Per month</p>

                    <button className="mt-4 bg-primary/20 py-2 px-4 rounded-lg flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                    <FontAwesomeIcon className="" size='md' icon={faChevronRight}/>
                    Get Started for Free
                    </button>

                    <ul className="mt-4 pt-4 border-t-2">
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>1 User</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>Basic Support</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>Limited Analytics</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg flex flex-col w-1/3 p-5">
                    <h1 className="text-black font-bold text-3xl items-center flex flex-row">Medium <span className="ml-2 text-sm font-medium px-2 text-white bg-primary rounded-lg">Most Popular</span></h1>
                    <p className="font-light h-1/6">A plan for your normal sized Restaurant.</p>
                    <h1 className="mt-4 text-3xl font-bold">$20 <span className="text-sm">USD</span></h1>
                    <p className="font-light">Per month</p>

                    <button className="mt-4 bg-primary/20 py-2 px-4 rounded-lg flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                    <FontAwesomeIcon className="" size='md' icon={faChevronRight}/>
                    Purchase Medium
                    </button>

                    <ul className="mt-4 pt-4 border-t-2">
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>5 Users</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>50 Rewards</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>24/7 Support</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>Full Analytics</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg flex flex-col w-1/3 p-5">
                    <h1 className="text-black font-bold text-3xl items-center flex flex-row">Enterprise</h1>
                    <p className="font-light h-1/6">A plan for your normal sized Restaurant.</p>
                    <h1 className="mt-4 text-3xl font-bold">N/A</h1>
                    <p className="font-light">Per year</p>

                    <button className="mt-4 bg-primary/20 py-2 px-4 rounded-lg flex flex-row items-center hover:text-hover text-primary font-bold gap-2">
                    <FontAwesomeIcon className="" size='md' icon={faChevronRight}/>
                    Contact Us
                    </button>

                    <ul className="mt-4 pt-4 border-t-2">
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>∞ Users</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>∞ Rewards</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>24/7 Support</p>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <p>Full Analytics</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pricing;