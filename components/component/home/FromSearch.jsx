import React from 'react'

export default function FromSearch() {
    return (
        <>
            <section className="hidden search-result w-96 bg-white absolute top-full left-0 text-left shadow-lg z-50 rounded-br-md rounded-bl-md  mt-1">
                <div className="top-search">
                    <div className="nearby bg-gray-100 py-2 px-3">
                        <p className="flex items-center text-lg"><img src="/images/cursor.svg" /> Near By</p>
                    </div>
                    <div className="px-4 mx-auto">
                        <div className="search mx-auto relative inline-block w-full mt-4">
                            <span className="absolute left-4 top-0 bottom-0 m-auto h-5">
                                <svg className="w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input type="text" id="search" name="search" placeholder="e.g. City, Landmark, address" className="w-full h-10 bg-white rounded-full text-sm outline-none text-gray-800 py-1 pl-12 sm:pr-40 pr-14 leading-8 transition-colors duration-200 ease-in-out shadow" />
                        </div>
                    </div>
                </div>
                <div className="w-full p-4">
                    <ul>
                        <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                            <figure className="w-6 h-6 overflow-hidden rounded-md">
                                <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </figure>
                            <h5 className="text-base text-gray-800 pl-1 leading-5">Bangalore
                                <p className="text-sm text-gray-500 font-normal">Bangalore, IN - Kempegowda International ...</p>
                            </h5>
                        </li>
                        <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                            <figure className="w-6 h-6 overflow-hidden rounded-md">
                                <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </figure>
                            <h5 className="text-base text-gray-800 pl-1 leading-5">Shrinagar
                                <p className="text-sm text-gray-500 font-normal">India</p>
                            </h5>
                        </li>
                    </ul>
                </div>
                <div className="w-full p-4 top-search">
                    <h3 className="text-sm text-gray-700 font-bold pb-2 uppercase">Top Searched</h3>
                    <ul>
                        <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                            <figure className="w-9 h-9 overflow-hidden rounded-md">
                                <img src="/images/top-search.svg" alt="icon" />
                            </figure>
                            <h5 className="text-base text-gray-800 pl-2 leading-5">Shrinagar
                                <p className="text-sm text-gray-500 font-normal">India</p>
                            </h5>
                        </li>
                        <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                            <figure className="w-9 h-9 overflow-hidden rounded-md">
                                <img src="/images/top-search.svg" alt="icon" />
                            </figure>
                            <h5 className="text-base text-gray-800 pl-2 leading-5">Shrinagar
                                <p className="text-sm text-gray-500 font-normal">India</p>
                            </h5>
                        </li>
                        <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 ">
                            <figure className="w-9 h-9 overflow-hidden rounded-md">
                                <img src="/images/top-search.svg" alt="icon" />
                            </figure>
                            <h5 className="text-base text-gray-800 pl-2 leading-5">Shrinagar
                                <p className="text-sm text-gray-500 font-normal">India</p>
                            </h5>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
