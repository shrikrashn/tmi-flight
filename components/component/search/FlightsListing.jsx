import React from 'react'
import FlightDetails from './FlightDetails'
import FlightListingHead from './FlightListingHead'
export default function FlightsListing() {
    return (
        <>
            <FlightListingHead />
            <div className="flight-listing py-0">
                <div className="listing p-4 border rounded mt-3 hover:shadow">
                    <ul className="flex relative">
                        <li className="w-1/6">
                            <a href="" className="text-blue-500 text-base hover:text-blue-700 detail">
                                <img src="/images/airasia-icon.svg" alt="icon" />
                                <span className="mt-0 flex ">Flight details
                                    <svg className="w-4 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">15:15</span>
                            <p className="text-base text-gray-600 mt-1">DEL → GOI</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">17:50</span>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">2h 35m</span>
                            <p className="text-base text-gray-600 mt-1">Non-stop</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-xl font-bold">₹8,367</span>
                        </li>
                        <li className="w-1/6 text-right">
                            <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-1 rounded-full font-normal " href="/paymentstep1">Book</a>
                        </li>
                    </ul>
                    <FlightDetails />
                </div>
                <div className="listing p-4 border rounded mt-3 hover:shadow">
                    <ul className="flex">
                        <li className="w-1/6">
                            <a href="" className="text-blue-500 text-base hover:text-blue-700">
                                <img src="/images/airasia-icon.svg" alt="icon" />
                                <span className="mt-0 flex ">Flight details
                                <svg className="w-4 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">15:15</span>
                            <p className="text-base text-gray-600 mt-1">DEL → GOI</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">17:50</span>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">2h 35m</span>
                            <p className="text-base text-gray-600 mt-1">Non-stop</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-xl font-bold">₹8,367</span>
                        </li>
                        <li className="w-1/6 text-right">
                            <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-1 rounded-full font-normal " href="/paymentstep1">Book</a>
                        </li>
                    </ul>
                </div>
                <div className="listing p-4 border rounded mt-3 hover:shadow">
                    <ul className="flex">
                        <li className="w-1/6">
                            <a href="" className="text-blue-500 text-base hover:text-blue-700">
                                <img src="/images/airasia-icon.svg" alt="icon" />
                                <span className="mt-0 flex ">Flight details
                                <svg className="w-4 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">15:15</span>
                            <p className="text-base text-gray-600 mt-1">DEL → GOI</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">17:50</span>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">2h 35m</span>
                            <p className="text-base text-gray-600 mt-1">Non-stop</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-xl font-bold">₹8,367</span>
                        </li>
                        <li className="w-1/6 text-right">
                            <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-1 rounded-full font-normal " href="">Book</a>
                        </li>
                    </ul>
                </div>
                <div className="listing p-4 border rounded mt-3 hover:shadow">
                    <ul className="flex">
                        <li className="w-1/6">
                            <a href="" className="text-blue-500 text-base hover:text-blue-700">
                                <img src="/images/airasia-icon.svg" alt="icon" />
                                <span className="mt-0 flex ">Flight details
                                <svg className="w-4 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">15:15</span>
                            <p className="text-base text-gray-600 mt-1">DEL → GOI</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">17:50</span>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">2h 35m</span>
                            <p className="text-base text-gray-600 mt-1">Non-stop</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-xl font-bold">₹8,367</span>
                        </li>
                        <li className="w-1/6 text-right">
                            <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-1 rounded-full font-normal " href="">Book</a>
                        </li>
                    </ul>
                </div>
                <div className="listing p-4 border rounded mt-3 hover:shadow">
                    <ul className="flex">
                        <li className="w-1/6">
                            <a href="" className="text-blue-500 text-base hover:text-blue-700">
                                <img src="/images/airasia-icon.svg" alt="icon" />
                                <span className="mt-0 flex ">Flight details
                                <svg className="w-4 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">15:15</span>
                            <p className="text-base text-gray-600 mt-1">DEL → GOI</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">17:50</span>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">2h 35m</span>
                            <p className="text-base text-gray-600 mt-1">Non-stop</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-xl font-bold">₹8,367</span>
                        </li>
                        <li className="w-1/6 text-right">
                            <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-1 rounded-full font-normal " href="">Book</a>
                        </li>
                    </ul>
                </div>
                <div className="listing p-4 border rounded mt-3 hover:shadow">
                    <ul className="flex">
                        <li className="w-1/6">
                            <a href="" className="text-blue-500 text-base hover:text-blue-700">
                                <img src="/images/airasia-icon.svg" alt="icon" />
                                <span className="mt-0 flex ">Flight details
                                <svg className="w-4 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">15:15</span>
                            <p className="text-base text-gray-600 mt-1">DEL → GOI</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">17:50</span>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-lg font-semibold">2h 35m</span>
                            <p className="text-base text-gray-600 mt-1">Non-stop</p>
                        </li>
                        <li className="w-1/6">
                            <span className="text-gray-600 text-xl font-bold">₹8,367</span>
                        </li>
                        <li className="w-1/6 text-right">
                            <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-1 rounded-full font-normal " href="">Book</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
