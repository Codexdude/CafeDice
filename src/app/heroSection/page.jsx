import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/HeroImage.jpeg';

const Hero = () => {
return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Sip&Play</h1>
                    <p className="mb-8 leading-relaxed">
                        At Sip&Play, we offer a unique experience combining delicious snacks with a fun, safe environment for playing board games. Whether you're looking for a place to relax with friends or host an event, we've got you covered.
                    </p>
                    <div className="flex justify-center">
                        <a href="/about" className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">About Us</a>
                        <a href="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={heroImage}
                        width={720}
                        height={600}
                    />
                </div>
            </div>
        </section>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">SERVICES PROVIDED</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Snacks and Games</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our range of services including delicious food options, professional catering services, and fun games for all occasions.</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    <div className="w-full md:w-1/3 px-8 py-6 border-l-2 border-gray-200 border-opacity-60 max-w-sm">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Delicious Food</h2>
                        <p className="leading-relaxed text-base mb-4">Enjoy a variety of mouth-watering dishes prepared with fresh ingredients and culinary expertise.</p>
                        <a href="/menu" className="text-yellow-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="w-full md:w-1/3 px-8 py-6 border-l-2 border-gray-200 border-opacity-60 max-w-sm">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Fun Games</h2>
                        <p className="leading-relaxed text-base mb-4">Add excitement to your event with our selection of fun and engaging games suitable for all ages.</p>
                        <a href="boardgame" className="text-yellow-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <a href="/contact" className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Contact Us</a>
                </div>
            </div>
        </section>
    </>
)
}

export default Hero
