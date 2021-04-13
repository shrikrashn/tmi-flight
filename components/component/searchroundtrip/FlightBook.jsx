import React from 'react'
import DetailTrip from './DetailTrip'

export default function FlightBook() {
    return (
        <>
            <div className="listing p-2 border rounded mb-4 hover:shadow border-blue-500 flex">
                <div className="w-1/3 flex items-center">
                    <figure>
                        <img src="/images/airasia-icon.svg" alt="icon" />
                    </figure>
                    <h4 className="font-semibold text-gray-700 pl-2">DEL → BOM
                        <p className="text-sm text-gray-600 font-normal"><span>14:10 - 16:05</span><span> • 1h 55m</span><span> • Non-stop</span></p>
                    </h4>
                </div>
                <div className="w-1/3 flex items-center">
                    <figure>
                        <img src="/images/airasia-icon.svg" alt="icon" />
                    </figure>
                    <h4 className="font-semibold text-gray-700 pl-2">BOM → DEL
                        <p className="text-sm text-gray-600 font-normal"><span>14:10 - 16:05</span><span> • 1h 55m</span><span> • Non-stop</span></p>
                    </h4>
                </div>
                <div className="w-1/3 text-right">
                    <p>
                        <span className="text-gray-700 font-bold text-xl mr-3">₹8,367</span>
                        <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-1 rounded-full font-normal " href="/paymentroundtrip">Book</a>
                    </p>
                    <a href="" className="f-details text-green-600 text-sm flex items-center justify-end mt-2">Flight details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <DetailTrip />
                </div>
            </div>
        </>
    )
}
