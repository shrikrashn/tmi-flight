import React from 'react'

export default function TravellerSelect() {
    return (
        <>
            <section className="hidden traveller-select shadow-lg bg-white rounded-br-md rounded-bl-md py-5 w-80 absolute z-10 top-full right-0 mt-1">
                <div className="container px-5 mx-auto">
                    <div className="repeat flex justify-between items-center py-2">
                        <label className="text-gray-700">Adults</label>
                        <div className="select-number w-36 rounded-full shadow h-10 flex items-center px-4 justify-between hover:shadow-md">
                            <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                            </svg>
                            <span className="font-bold text-blue-600">2</span>
                            <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                    <div className="repeat flex justify-between items-center py-2">
                        <label className="text-gray-700">Children</label>
                        <div className="select-number w-36 rounded-full shadow h-10 flex items-center px-4 justify-between hover:shadow-md">
                            <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                            </svg>
                            <span className="font-bold text-blue-600">1</span>
                            <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                    <div className="repeat flex justify-between items-center py-2">
                        <label className="text-gray-700">Infants</label>
                        <div className="select-number w-36 rounded-full shadow h-10 flex items-center px-4 justify-between hover:shadow-md">
                            <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                            </svg>
                            <span className="font-bold text-blue-600">1</span>
                            <svg className="w-6 cursor-pointer text-gray-600" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                    <div className="btn text-right py-5 block">
                        <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-14 py-2 rounded-full font-normal" href="">Apply</a>
                    </div>
                </div>
            </section>
        </>
    )
}
