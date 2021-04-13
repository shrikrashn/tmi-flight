import React from 'react'

export default function TotalPrice() {
    return (
        <>
            <div className="total-price p-5 bg-white shadow rounded">
                <div className="top pb-3 border-b">
                    <p className="text-xl flex justify-between items-center pb-1">Total price <span className="text-blue-500 font-bold">₹ 33,520</span></p>
                    <span className="text-sm text-gray-600">1 adult, 1 infant</span>
                </div>
                <div className="bottom pt-3">
                    <p className="text-sm flex justify-between items-center pb-2 text-gray-600">Base fare (2 travellers)
                        <span className="font-bold">₹ 9,000</span>
                    </p>
                    <p className="text-sm flex justify-between items-center py-1 text-gray-600">Tax & Charges
                        <span className="font-bold text-yellow-500">+ ₹ 1,080</span>
                    </p>
                </div>
            </div>
        </>
    )
}
