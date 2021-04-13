import React from 'react'

export default function DetailTrip() {
    return (
        <>
            <div className="detail-trip mx-auto w-full fixed top-0 left-0 right-0 bg-black bg-opacity-40 h-full z-30 hidden text-left">
                <div className="modal-inner bg-white mx-auto w-8/12 shadow rounded mt-20">
                    <div className="head px-8 py-5 relative mb-5">
                        <h2 className="text-2xl font-bold text-gray-800">Details of your round trip</h2>
                        <a href="" className="absolute top-5 right-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                    <div className="middle px-8 ">
                        <div className="flight-detail border rounded mb-5 relative w-full top-full left-0 bg-white">
                            <div className="py-2 px-4 border-b flex justify-between">
                                <div className="left flex items-center">
                                    <p className="flex font-semibold text-gray-700 items-center">
                                        <span>New Delhi</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                        <span>Mumbai</span>
                                    </p>
                                    <span className="text-sm text-gray-600 pl-5">Fri, 26 Mar</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-red-500">NON REFUNDABLE</span>
                                    <a href="" className="text-sm text-blue-500 flex items-center ml-3">Know More
                                        <svg className="w-3 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <ul className="flex p-4">
                                <li className="w-1/5 ">
                                    <img src="/images/spice.svg" alt="icon"/>
                                    <span className="mt-0 flex text-sm text-gray-700">SpiceJet</span>
                                    <p className="text-xs text-gray-500">AI-144 Economy</p>
                                </li>
                                <li className="w-1/5">
                                    <p className="text-lg text-gray-600">DEL
                                        <span className="text-gray-700 text-lg font-semibold ml-1">08:15</span>
                                    </p>
                                    <p className="text-sm text-gray-600 pb-2">Fri, 26 Mar 2021</p>
                                    <p className="text-sm text-gray-600 ">Indira Gandhi Airport, Terminal3</p>
                                </li>
                                <li className="w-1/5">
                                    <span className="text-gray-600 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>2h 5m
                                    </span>
                                </li>
                                <li className="w-1/5">
                                    <p className="text-lg text-gray-600">BOM
                                        <span className="text-gray-700 text-lg font-semibold ml-1">08:15</span>
                                    </p>
                                    <p className="text-sm text-gray-600 pb-2">Fri, 26 Mar 2021</p>
                                    <p className="text-sm text-gray-600 ">Indira Gandhi Airport, Terminal3</p>
                                </li>
                                <li className="w-1/5">
                                    
                                    <p className="text-sm text-gray-600 pb-2 text-right">
                                        <span className="block">Check-in baggage</span>
                                        <span>Cabin baggage</span>
                                    </p>
                                    <p className="text-sm text-green-500 text-right  pt-2">
                                        <span className="block">15 KG (1 Piece)/person</span>
                                        <span>7 KG/person</span>
                                    </p>
                                </li>
                        </ul>
                        </div>
                        <div className="flight-detail border rounded mb-5 relative w-full top-full left-0 bg-white">
                            <div className="py-2 px-4 border-b flex justify-between">
                                <div className="left flex items-center">
                                    <p className="flex font-semibold text-gray-700 items-center">
                                        <span>Mumbai</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                        <span>New Delhi</span>
                                    </p>
                                    <span className="text-sm text-gray-600 pl-5">Fri, 30 Mar</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-red-500">NON REFUNDABLE</span>
                                    <a href="" className="text-sm text-blue-500 flex items-center ml-3">Know More
                                        <svg className="w-3 text-blue-500 items-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <ul className="flex p-4">
                                <li className="w-1/5 ">
                                    <img src="/images/spice.svg" alt="icon"/>
                                    <span className="mt-0 flex text-sm text-gray-700">SpiceJet</span>
                                    <p className="text-xs text-gray-500">AI-144 Economy</p>
                                </li>
                                <li className="w-1/5">
                                    <p className="text-lg text-gray-600">DEL
                                        <span className="text-gray-700 text-lg font-semibold ml-1">08:15</span>
                                    </p>
                                    <p className="text-sm text-gray-600 pb-2">Fri, 26 Mar 2021</p>
                                    <p className="text-sm text-gray-600 ">Indira Gandhi Airport, Terminal3</p>
                                </li>
                                <li className="w-1/5">
                                    <span className="text-gray-600 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>2h 5m
                                    </span>
                                </li>
                                <li className="w-1/5">
                                    <p className="text-lg text-gray-600">BOM
                                        <span className="text-gray-700 text-lg font-semibold ml-1">08:15</span>
                                    </p>
                                    <p className="text-sm text-gray-600 pb-2">Fri, 26 Mar 2021</p>
                                    <p className="text-sm text-gray-600 ">Indira Gandhi Airport, Terminal3</p>
                                </li>
                                <li className="w-1/5">
                                    
                                    <p className="text-sm text-gray-600 pb-2 text-right">
                                        <span className="block">Check-in baggage</span>
                                        <span>Cabin baggage</span>
                                    </p>
                                    <p className="text-sm text-green-500 text-right  pt-2">
                                        <span className="block">15 KG (1 Piece)/person</span>
                                        <span>7 KG/person</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom w-full px-8 py-5 flex justify-end items-center">
                        <div className="bottom-right flex items-center">
                            <span className="font-bold text-gray-700 text-2xl">₹8,367</span>
                            <a href="/paymentroundtrip" className="rounded-full px-8 py-2 bg-blue-500 text-white leading-3 ml-5 hover:bg-blue-600">Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
