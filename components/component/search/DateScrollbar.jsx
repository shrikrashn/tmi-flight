import React from 'react'

export default function DateScrollbar() {
    return (
        <>
            <div className="w-full date-scroll bg-gray-100 rounded px-4 sticky top-0 z-20">
                <span className="absolute top-5 left-1 cursor-pointer">
                    <svg className="w-5 text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </span>
                <ul className="flex whitespace-nowrap overflow-hidden">
                    <li className="active text-center py-3 mx-5">
                        <a href="">
                            <p className="text-sm text-gray-600 leading-3">Wed, 24 Mar</p>
                            <span className="text-base font-semibold text-green-500 leading-3">₹8,180</span>
                        </a>
                    </li>
                    <li className="text-center py-3 mx-5">
                        <a href="">
                            <p className="text-sm text-gray-600 leading-3">Wed, 24 Mar</p>
                            <span className="text-base font-semibold text-green-500 leading-3">₹8,180</span>
                        </a>
                    </li>
                    <li className="text-center py-3 mx-5">
                        <a href="">
                            <p className="text-sm text-gray-600 leading-3">Wed, 24 Mar</p>
                            <span className="text-base font-semibold text-green-500 leading-3">₹8,180</span>
                        </a>
                    </li>
                    <li className="text-center py-3 mx-5">
                        <a href="">
                            <p className="text-sm text-gray-600 leading-3">Wed, 24 Mar</p>
                            <span className="text-base font-semibold text-green-500 leading-3">₹8,180</span>
                        </a>
                    </li>
                    <li className="text-center py-3 mx-5">
                        <a href="">
                            <p className="text-sm text-gray-600 leading-3">Wed, 24 Mar</p>
                            <span className="text-base font-semibold text-green-500 leading-3">₹8,180</span>
                        </a>
                    </li>
                    <li className="text-center py-3 mx-5">
                        <a href="">
                            <p className="text-sm text-gray-600 leading-3">Wed, 24 Mar</p>
                            <span className="text-base font-semibold text-green-500 leading-3">₹8,180</span>
                        </a>
                    </li>
                    <li className="text-center py-3 mx-5">
                        <a href="">
                            <p className="text-sm text-gray-600 leading-3">Wed, 24 Mar</p>
                            <span className="text-base font-semibold text-green-500 leading-3">₹8,180</span>
                        </a>
                    </li>
                    
                </ul>
                <span className="absolute top-5 right-1 cursor-pointer">
                <svg className="w-5 text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                </span>
            </div>
        </>
    )
}
