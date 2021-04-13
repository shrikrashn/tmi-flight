import React from 'react'

export default function FilterLeft() {
    return (
        <>
            <div className="filter-side md:pr-7 md:border-r border-gray-200 md:w-1/4 w-full md:block hidden">
                <div className="filter">
                    <div className="head flex justify-between">
                        <a href="#" className="text-gray-600 w-6 h-6 md:hidden block cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        </a>
                        <label className="text-base font-bold text-gray-700">FILTERS</label>
                        <span className="text-gray-700 text-base">Clear All</span>
                    </div>
                    <div className="stops w-full py-5">
                        <h6 className="text-lg text-gray-700 font-semibold flex justify-between">Stops <img src="images/arrow-open.svg" /></h6>
                        <ul className="pt-3">
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer">None-stop</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" checked/>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer">1 Stop</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer">2 Stops</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="departure w-full py-5">
                        <h6 className="text-lg text-gray-700 font-semibold flex justify-between">Departure time <img src="images/arrow-open.svg" /></h6>
                        <ul className="pt-3">
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex justify-between w-full">After Noon <span className="text-right text-gray-500">Noon - 4PM</span></p>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0"/>
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex justify-between w-full">Evening <span className="text-right text-gray-500">4PM - 8PM</span></p>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex justify-between w-full">Campsite <span className="text-right text-gray-500">8PM - Midnight</span></p>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="airlines w-full py-5">
                        <h6 className="text-lg text-gray-700 font-semibold flex justify-between">Airlines <img src="images/arrow-open.svg" /></h6>
                        <ul className="pt-3">
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex w-full items-center">
                                        <span className="leading-none mr-2">
                                            <img src="/images/spicejet.svg" />
                                        </span> SpiceJet 
                                    </p>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex w-full items-center">
                                        <span className="leading-none mr-2">
                                            <img src="/images/airindia.svg" />
                                        </span> Air India 
                                    </p>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex w-full items-center">
                                        <span className="leading-none mr-2">
                                            <img src="/images/airasia.svg" />
                                        </span> Air Asia 
                                    </p>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex w-full items-center">
                                        <span className="leading-none mr-2">
                                            <img src="/images/goair.svg" />
                                        </span> GoAir 
                                    </p>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex w-full items-center">
                                        <span className="leading-none mr-2">
                                            <img src="/images/vistara.svg" />
                                        </span> Vistara 
                                    </p>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1 w-full">
                                    <input type="checkbox" className="form-checkbox rounded-sm bg-gray-300 border-0" />
                                    <p className="ml-2 text-base text-gray-600 cursor-pointer flex w-full items-center">
                                        <span className="leading-none mr-2">
                                            <img src="/images/indigo.svg" />
                                        </span> Indigo 
                                    </p>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="one-way-price w-full py-5">
                        <h6 className="text-lg text-gray-700 font-semibold flex justify-between">One Way Price <img src="images/arrow-open.svg" /></h6>
                        <div className="range-slide">
                            <label class=" py-1 w-full text-gray-600">Up to ₹18,158</label>
                            <input type="range" min="6,154" max="18,158" className=" rounded-sm bg-gray-300 w-full" />
                            <p className="text-gray-600 flex justify-between">
                                <spa>₹6,154</spa>
                                <spa>₹18,158</spa>
                            </p>
                        </div>
                    </div>
                    <div className="trip-duration w-full py-5">
                        <h6 className="text-lg text-gray-700 font-semibold flex justify-between">Trip Duration <img src="images/arrow-open.svg" /></h6>
                        <div className="range-slide mt-5">
                            <input type="range" min="6,154" max="18,158" className=" rounded-sm bg-gray-300 w-full" />
                            <p className="text-gray-600 flex justify-between">
                                <spa>2 hours</spa>
                                <spa>28 hours</spa>
                            </p>
                        </div>
                    </div>
                    <div className="layover-duration w-full py-5">
                        <h6 className="text-lg text-gray-700 font-semibold flex justify-between">Layover duration <img src="images/arrow-open.svg" /></h6>
                        <div className="range-slide mt-5">
                            <input type="range" min="6,154" max="18,158" className=" rounded-sm bg-gray-300 w-full" />
                            <p className="text-gray-600 flex justify-between">
                            <spa>2 hours</spa>
                                <spa>28 hours</spa>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
