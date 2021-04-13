import React from 'react'

export default function NonRefundable() {
    return (
        <>
            <div className="non-refundable my-7 w-fullbg-white border-b">
                <ul className="flex py-4 mt-2">
                    <li className="w-1/4 flex items-center pr-5">
                        <span className="text-gray-600 text-sm mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="green">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <img src="/images/spice.svg" alt="icon"/>
                        <p className="text-xs text-gray-500 ml-3"><span className="mt-0 flex text-sm text-gray-700">SpiceJet</span> AI-144 Economy</p>
                    </li>
                    <li className="w-1/4">
                        <p className="text-lg text-gray-600 block">DEL
                            <span className="text-gray-700 text-lg font-semibold ml-1">08:15</span>
                        </p>
                        <p className="text-sm text-gray-600 pb-2">Fri, 26 Mar 2021</p>
                    </li>
                    <li className="w-1/4">
                        <p className="text-lg text-gray-600">BOM
                            <span className="text-gray-700 text-lg font-semibold ml-1">08:15</span>
                        </p>
                        <p className="text-sm text-gray-600 pb-2">Fri, 26 Mar 2021</p>
                    </li>
                    <li className="w-1/4">
                        <p className="text-sm text-red-600 px-3 py-0.5 text-center bg-gray-200 rounded-full">NON REFUNDABLE</p>
                    </li>
               </ul>
            </div>
        </>
    )
}
