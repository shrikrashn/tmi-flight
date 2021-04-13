import React from 'react'

export default function HeaderInner() {
    return (
        <>
            <section className="header-inner bg-white w-full m-auto shadow">
                <div className="container px-5 mx-auto flex justify-between items-center">
                    <div className="left flex justify-between items-center">
                        <div className="logo pr-2">
                            <a href="/" className="w-16 block">
                                <img className="w-full" src="images/tmi-logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="nav-bar text-gray-600 text-base">
                            <ul className="flex items-center">
                                <li>
                                    <a className="flex items-center mr-3 hover:text-blue-500" href="">Destinations
                                        <svg className="w-4 ml-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center mr-3 hover:text-blue-500" href="">Holiday Ideas
                                        <svg className="w-4 ml-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center mr-3 hover:text-blue-500" href="">Packages
                                        <svg className="w-4 ml-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center mr-3 hover:text-blue-500" href="">Places to Stay
                                        <svg className="w-4 ml-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center mr-3 " href="">Weekend Getaways
                                        <svg className="w-4 ml-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                    <div className="nav-bar text-gray-600 text-base">
                            <ul className="flex items-center">
                                <li>
                                    <a className="flex items-center mr-4 hover:text-blue-500" href="">
                                        <img src="/images/flight.svg" alt="icon" />
                                        <p className="ml-1">Flights</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center mr-4 hover:text-blue-500" href="">
                                        <img src="/images/hotel.svg" alt="icon" />
                                        <p className="ml-1">Hotels</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center mr-4 hover:text-blue-500" href="">
                                        <img src="/images/review.svg" alt="icon" />
                                        <p className="ml-1">Reviews</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
