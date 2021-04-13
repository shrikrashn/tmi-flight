import React from 'react'
import Slider from './Slidero'

export default function HomeSlider() {
    return (
        <>
            <section className="top-attraction xl:pt-10 pt-8 sm:block hidden">
                <div className="container px-5 m-auto">
                    <h2 className="xl:text-3xl lg:text-xl font-bold text-gray-900 capitalize mb-4 text-xl flex justify-between flex-wrap items-center">Top Filghts Search <a className="text-lg text-gray-600 capitalize font-normal hover:text-blue-500 pr-2 sm:block hidden" href="galleryview">View All</a></h2>
                    <div className="recent-gallery">
                        <Slider>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide1.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">Dubai</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide2.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">Japan</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide4.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">India</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide3.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">Netherland</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide1.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">Dubai</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide2.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">Japan</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide4.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">India</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="xl:w-1/4 sm:w-1/4 px-2 py-2 w-1/2">
                                <figure className="relative overflow-hidden rounded-md">
                                    <a className="overflow-hidden block rounded-lg" href="/">
                                        <img className="w-full h-full transition duration-500 scale-100 img" src="images/slide3.jpg" alt="image"/>
                                    </a>
                                    <figcaption className="py-2 px-2">
                                        <h4 className="xl:text-lg text-base font-bold text-gray-700">Netherland</h4>
                                        <p className="xl:text-base text-sm text-gray-500">40,560 Stays</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
