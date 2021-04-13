import React from 'react'

export default function FlightListingHead() {
    return (
        <>
            <div className="listing-head px-4 py-2 rounded mt-7 bg-gray-100">
                    <ul className="flex">
                        <li className="w-1/6">
                            <p className="text-base text-gray-600">
                                <a className="flex items-center" href="">Airlines
                                <svg  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                </a>
                            </p>
                        </li>
                        <li className="w-1/6">
                            <p className="text-base text-gray-600">
                                <a className="flex items-center" href="">Departure
                                <svg  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                </a>
                            </p>
                        </li>
                        <li className="w-1/6">
                            <p className="text-base text-gray-600">
                                <a className="flex items-center" href="">Arrival
                                <svg  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                </a>
                            </p>
                        </li>
                        <li className="w-1/6">
                            <p className="text-base text-gray-600">
                                <a className="flex items-center" href="">Duration
                                <svg  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                </a>
                            </p>
                        </li>
                        <li className="w-1/6">
                            <p className="text-base text-gray-600">
                                <a className="flex items-center" href="">Price
                                <svg  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
                
        </>
    )
}
