import React from 'react'

export default function SelectFare() {
    return (
        <>
            <div className="select-fare">
                <h2 className="text-2xl font-semibold text-gray-700">Select your fare</h2>
                <div className="fare-inner flex justify-between py-5">
                    <div className="standard-fare w-1/2 rounded bg-blue-500 p-5 text-white">
                        <h4 className="text-lg uppercase flex justify-between items-center font-semibold">
                            <p className="flex items-center">
                                    <figure className="mr-2">
                                        <img src="/images/normal-tab.svg" alt="icon" />
                                    </figure> Standard fare 
                                </p>
                            <span>₹6,114</span>
                        </h4>
                        <div className="content mt-4">
                            <p className="text-gray-50">Date change fees:</p>
                            <p className="mt-4">
                                <span className="block">Airline fee upto ₹3000</span>
                                <span>Cleartrip fee upto ₹200</span>
                            </p>
                        </div>
                    </div>
                    <div className="flexi-fare w-1/2 rounded bg-white border-2 border-green-500 p-5 text-gray-600 ml-3">
                        <h4 className="text-lg uppercase flex justify-between items-center font-semibold">
                            <p className="flex items-center">
                                    <figure className="mr-2">
                                        <img src="/images/radio.svg" alt="icon" />
                                    </figure> Flexifly 
                                </p>
                            <span>₹6,114</span>
                        </h4>
                        <div className="content mt-4">
                            <p className="">Date change fees:</p>
                            <p className="mt-4 text-red-600 line-through">
                                <span className="block">Airline fee upto ₹3000</span>
                                <span>Cleartrip fee upto ₹200</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
