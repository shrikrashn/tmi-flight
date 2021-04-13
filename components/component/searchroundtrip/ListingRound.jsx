import React from 'react'

export default function ListingRound() {
    return (
        <>
        <div className="flight-listing-round py-0">
            <div className="listing p-2 border rounded mt-3 hover:shadow hover:bg-green-50 hover:border-green-500">
                <ul className="flex">
                    <li className="w-14">
                        <a href="" className="text-blue-500 text-base hover:text-blue-700">
                            <img src="/images/airasia-icon.svg" alt="icon" />
                        </a>
                    </li>
                    <li className="w-32">
                        <span className="text-gray-700 text-base ">15:15</span>
                        <p className="text-xs text-gray-600 mt-1">DEL→AMD→BOM</p>
                    </li>
                    <li className="w-1/5">
                        <span className="text-gray-700 text-base ">17:50</span>
                    </li>
                    <li className="w-1/5">
                        <span className="text-gray-700 text-base">2h 35m</span>
                        <p className="text-sm text-red-600 mt-1 font-semibold">1 Stop</p>
                    </li>
                    <li className="w-1/5">
                        <span className="text-gray-600 text-lg font-semibold">₹8,367</span>
                    </li>
                    
                </ul>
            </div>
            <div className="listing p-2 border rounded mt-3 hover:shadow hover:bg-green-50 hover:border-green-500">
                <ul className="flex">
                    <li className="w-14">
                        <a href="" className="text-blue-500 text-base hover:text-blue-700">
                            <img src="/images/airasia-icon.svg" alt="icon" />
                        </a>
                    </li>
                    <li className="w-32">
                        <span className="text-gray-700 text-base ">15:15</span>
                        <p className="text-xs text-gray-600 mt-1">DEL→AMD→BOM</p>
                    </li>
                    <li className="w-1/5">
                        <span className="text-gray-700 text-base ">17:50</span>
                    </li>
                    <li className="w-1/5">
                        <span className="text-gray-700 text-base">2h 35m</span>
                        <p className="text-sm text-red-600 mt-1 font-semibold">1 Stop</p>
                    </li>
                    <li className="w-1/5">
                        <span className="text-gray-600 text-lg font-semibold">₹8,367</span>
                    </li>
                    
                </ul>
            </div>
        </div>
        </>
    )
}
