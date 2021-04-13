import React from 'react'

export default function AddinFlightMeals() {
    return (
        <>
            <div className="add-flightmeal mx-auto w-full fixed top-0 left-0 right-0 bg-black bg-opacity-40 h-full hidden">
                <div className="modal-inner bg-white mx-auto md:w-11/12 lg:w-9/12 shadow rounded mt-20">
                    <div className="head px-8 py-5 border-b relative">
                        <h2 className="text-2xl font-bold text-gray-800">Add in-flight meals to your journey</h2>
                        <p className="text-green-600">Meals are cheaper when pre-booked</p>
                        <a href="" className="absolute top-5 right-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                    <div className="middle px-8 flex pb-20">
                        <div className="left w-1/4 mt-3">
                        <div className="repeat">
                                <h4 className="text-gray-700 uppercase">Onward</h4>
                                <ul className="mt-5">
                                    <li>
                                        <a className="text-base bg-blue-500 rounded px-5 py-2 text-white font-normal hover:bg-blue-600 block mb-2" href="">Mumbai → New Delhi</a>
                                    </li>
                                    <li>
                                        <a className="text-base rounded px-5 py-2 hover:text-white font-normal hover:bg-blue-600 text-gray-700 block mb-2" href="">New Delhi → Mumbai</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="repeat mt-10">
                                <h4 className="text-gray-700 uppercase">return</h4>
                                <ul className="mt-5">
                                    <li>
                                        <a className="text-base rounded px-5 py-2 hover:text-white font-normal hover:bg-blue-600 text-gray-700 block" href="">New Delhi → Mumbai</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right w-3/4 pl-8">
                            <div className="repeat flex justify-between items-center py-3 border-b">
                                <label className="text-gray-700">Jain Hot Meal</label>
                                <div className="flex items-center px-4 justify-between">
                                    <span className="text-blue-500 font-semibold">₹425</span>
                                    <div className="groups w-36 select-number rounded-full shadow h-8 flex items-center px-4 justify-between hover:shadow-md ml-10">
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                        <span className="font-bold text-blue-600">2</span>
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="repeat flex justify-between items-center py-3 border-b">
                                <label className="text-gray-700">Jain Hot Meal</label>
                                <div className="flex items-center px-4 justify-between">
                                    <span className="text-blue-500 font-semibold">₹425</span>
                                    <div className="groups w-36 select-number rounded-full shadow h-8 flex items-center px-4 justify-between hover:shadow-md ml-10">
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                        <span className="font-bold text-blue-600">2</span>
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="repeat flex justify-between items-center py-3 border-b">
                                <label className="text-gray-700">Jain Hot Meal</label>
                                <div className="flex items-center px-4 justify-between">
                                    <span className="text-blue-500 font-semibold">₹425</span>
                                    <div className="groups w-36 select-number rounded-full shadow h-8 flex items-center px-4 justify-between hover:shadow-md ml-10">
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                        <span className="font-bold text-blue-600">2</span>
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="repeat flex justify-between items-center py-3 border-b">
                                <label className="text-gray-700">Jain Hot Meal</label>
                                <div className="flex items-center px-4 justify-between">
                                    <span className="text-blue-500 font-semibold">₹425</span>
                                    <div className="groups w-36 select-number rounded-full shadow h-8 flex items-center px-4 justify-between hover:shadow-md ml-10">
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                        <span className="font-bold text-blue-600">2</span>
                                        <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bottom w-full px-8 py-5 border-t flex justify-between items-center">
                        <div className="bottom-left">
                            <button className="text-green-600 uppercase" type="reset">Clear All meals</button>
                        </div>
                        <div className="bottom-right flex items-center">
                            <span className="font-bold text-gray-700 text-2xl">₹8,367</span>
                            <a href="" className="rounded px-5 py-2 bg-blue-500 text-white leading-3 ml-5 hover:bg-blue-600">Done</a>
                            <a href="" className="rounded px-5 py-2 bg-white text-blue-500 leading-3 ml-4 border border-blue-500">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
