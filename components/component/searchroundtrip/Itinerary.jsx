import React from 'react'

export default function Itinerary() {
    return (
        <>
            <div className="flight-detail my-7 w-fullbg-white border-b-2 border-dashed pb-4 border-gray-300">
                <h1 className="text-2xl font-semibold text-gray-700">Review your itinerary</h1>
                <div className="py-2 flex justify-between mt-2">
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
                <ul className="flex py-4 mt-2">
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
            <div className="flight-detail my-7 w-fullbg-white">
                <div className="py-2 flex justify-between mt-2">
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
                <ul className="flex py-4 mt-2">
                    <li className="w-1/5 ">
                        <img src="/images/spice.svg" alt="icon"/>
                        <span className="mt-0 flex text-sm text-gray-700">SpiceJet</span>
                        <p className="text-xs text-gray-500">AI-144 Economy</p>
                    </li>
                    <li className="w-1/5">
                        <p className="text-lg text-gray-600">DEL
                            <span className="text-gray-700 text-lg font-semibold ml-1">08:15</span>
                        </p>
                        <p className="text-sm text-gray-600 pb-2">Fri, 30 Mar 2021</p>
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
                        <p className="text-sm text-gray-600 pb-2">Fri, 30 Mar 2021</p>
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
        </>
    )
}
